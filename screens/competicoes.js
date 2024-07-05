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
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const Competicoes = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);


  const data = [
    { id: '1', name: 'Bernardo', won: 10, lost: 2, image: require('../img/bernardo.jpg') },
    { id: '2', name: 'Joaquim', won: 8, lost: 3, image: require('../img/do-utilizador.png') },
    { id: '3', name: 'Débora', won: 15, lost: 5, image: require('../img/atletas/debora.jpg') },
    { id: '4', name: 'Carla', won: 12, lost: 4, image: require('../img/do-utilizador.png') },
    { id: '5', name: 'Tiago', won: 9, lost: 1, image: require('../img/do-utilizador.png') },
    { id: '6', name: 'Diogo', won: 14, lost: 6, image: require('../img/diogo.jpg') },
  ];

  const renderItem = (item, index) => (
    <View
      key={item.id}
      style={[
        styles.cardItem,
        { backgroundColor: index % 2 === 0 ? '#1E90FF' : '#FF4500' },
      ]}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.record}>Lutas Ganhas: {item.won}</Text>
        <Text style={styles.record}>Lutas Perdidas: {item.lost}</Text>
      </View>
    </View>
  );

  const closeModal = () => {
    setModalVisible(false);
    setEventId(null); // Limpa o ID do evento ao fechar o modal
    setSelectedEvent(null); // Limpa o evento selecionado
  };

  const renderComment = ({ item }) => {
    const isUserComment = item.userId === user?.uid;
    return (
      <View
        style={[
          styles.commentContainer,
          { alignSelf: isUserComment ? 'flex-end' : 'flex-start' },
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
              { color: isUserComment ? '#0000FF' : '#FFD700' }, // Azul para o usuário e dourado para outros
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
      <Text style={styles.separatorText}>Este evento ira começar dia 20.07.2024 as 11:30h</Text>
        <View style={styles.separatorContainer}>
          <Text style={styles.separatorText}></Text>
          <View style={styles.separator} />
        </View>
        {data.map((item, index) => (
          <React.Fragment key={item.id}>
            {renderItem(item, index)}
            {(index + 1) % 2 === 0 && index < data.length - 1 && (
              <View style={styles.separatorContainer}>
                <Text style={styles.separatorText}></Text>
                <View style={styles.separator} />
              </View>
            )}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 60,
    paddingHorizontal: 10,
  },
  menuButton: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
    textAlign: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  cardItem: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  record: {
    fontSize: 16,
    color: '#fff',
  },
  moreButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#ff6347',
    borderRadius: 50,
    padding: 10,
  },
  separatorContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  separatorText: {
    fontSize: 16,
    color: '#fff',
  },
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: '#fff',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  commentList: {
    flexGrow: 1,
    width: '100%',
  },
  commentContainer: {
    marginBottom: 10,
    padding: 10,
  },
  commentBubble: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  commentUserName: {
    fontWeight: 'bold',
  },
  commentText: {
    marginTop: 5,
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    color: '#fff',
  },
});

export default Competicoes;
