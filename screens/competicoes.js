import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  TextInput,
  Button,
  FlatList,
  Alert // Importar o Alert para exibir mensagens de erro
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db, firebase_auth } from '../firebase/firebaseconf'; // Verifique o caminho
import { collection, addDoc, query, where, getDocs, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const Competicoes = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);
  const [eventId, setEventId] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase_auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          setUser({ ...currentUser, ...userDoc.data() });
        } catch (error) {
          console.error("Error fetching user data: ", error);
          Alert.alert("Erro", "Não foi possível buscar os dados do usuário.");
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (eventId) {
      const q = query(collection(db, 'comments'), where('eventId', '==', eventId));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const fetchedComments = [];
        querySnapshot.forEach((doc) => {
          fetchedComments.push({ id: doc.id, ...doc.data() });
        });
        setComments(fetchedComments);
      }, (error) => {
        console.error("Error fetching comments: ", error);
        Alert.alert("Erro", "Não foi possível buscar os comentários.");
      });
      return () => unsubscribe();
    }
  }, [eventId]);

  const handleCommentSubmit = async () => {
    if (comment.trim() === '' || !user || !eventId) return;

    const newComment = {
      eventId,
      text: comment,
      createdAt: new Date(),
      userId: user.uid,
      userName: user.displayName || 'Anonymous', // Verifique se o nome de usuário está disponível
    };

    try {
      console.log("Submitting comment:", newComment); // Adicione um log para verificar os dados do comentário
      await addDoc(collection(db, 'comments'), newComment);
      setComment(''); // Limpa o campo de entrada
    } catch (error) {
      console.error("Error adding comment: ", error);
      Alert.alert("Erro", "Não foi possível enviar o comentário.");
    }
  };

  const data = [
    { id: '1', name: 'Bernardo', won: 10, lost: 2, image: require('../img/bernardo.jpg') },
    { id: '2', name: 'Joaquim', won: 8, lost: 3, image: require('../img/bernardo.jpg') },
    { id: '3', name: 'Rita', won: 15, lost: 5, image: require('../img/bernardo.jpg') },
    { id: '4', name: 'Carla', won: 12, lost: 4, image: require('../img/bernardo.jpg') },
    { id: '5', name: 'Tiago', won: 9, lost: 1, image: require('../img/bernardo.jpg') },
    { id: '6', name: 'Diogo', won: 14, lost: 6, image: require('../img/bernardo.jpg') },
  ];

  const renderItem = (item, index) => (
    <View
      key={item.id}
      style={[
        styles.cardItem,
        { backgroundColor: index % 2 === 0 ? '#1E90FF' : '#FF4500' }, // Alternando as cores de fundo
      ]}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.record}>Lutas Ganhas: {item.won}</Text>
        <Text style={styles.record}>Lutas Perdidas: {item.lost}</Text>
        <TouchableOpacity onPress={() => {
          setEventId(item.id);
          setModalVisible(true);
        }}>
          <Text style={styles.commentButton}>Ver Comentários</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderComment = ({ item }) => {
    const isUserComment = item.userId === user?.uid;
    return (
      <View
        style={[
          styles.commentContainer,
          { alignSelf: isUserComment ? 'flex-end' : 'flex-start' }, // Alinha os comentários à direita para o usuário e à esquerda para outros
        ]}
      >
        <View
          style={[
            styles.commentBubble,
            { backgroundColor: isUserComment ? '#33FFFF' : '#1F1F1F' },
          ]}
        >
          <Text
            style={[
              styles.commentUserName,
              { color: '#0000FF' }, // Nome do usuário em azul
            ]}
          >
            {item.userName}
          </Text>
          <Text style={styles.commentText}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.header}>Competições</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <View style={styles.separatorContainer}>
          <Text style={styles.separatorText}>Luta 1</Text>
          <View style={styles.separator} />
        </View>
        {data.map((item, index) => (
          <React.Fragment key={item.id}>
            {renderItem(item, index)}
            {(index + 1) % 2 === 0 && index < data.length - 1 && (
              <View style={styles.separatorContainer}>
                <Text style={styles.separatorText}>Luta 2</Text>
                <View style={styles.separator} />
              </View>
            )}
          </React.Fragment>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.moreButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="ellipsis-vertical" size={32} color="white" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Comentários</Text>
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id}
            renderItem={renderComment}
          />
          <TextInput
            style={styles.input}
            placeholder="Escreva seu comentário"
            placeholderTextColor="#999"
            value={comment}
            onChangeText={setComment}
          />
          <Button title="Enviar" onPress={handleCommentSubmit} disabled={!user || !eventId} />
          <Button title="Fechar" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Cor de fundo escura
    paddingTop: 60,
    paddingHorizontal: 10,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  cardContainer: {
    flexGrow: 1,
  },
  cardItem: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  record: {
    fontSize: 14,
    color: '#fff',
  },
  commentButton: {
    color: '#33FFFF',
    marginTop: 10,
    fontSize: 16,
  },
  separatorContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '80%',
    marginTop: 5,
  },
  separatorText: {
    fontSize: 16,
    color: '#fff',
  },
  modalView: {
    flex: 1,
    marginTop: 22,
    backgroundColor: '#1E1E1E',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#33FFFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 10,
    width: '100%',
  },
  commentContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  commentBubble: {
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  commentUserName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentText: {
    color: '#fff',
  },
  moreButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    zIndex: 1,
  },
});

export default Competicoes;
