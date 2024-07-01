import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Alert,
} from 'react-native';
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import { db, firebase_auth } from '../firebase/firebaseconf'; // Verifique o caminho
import { onAuthStateChanged } from 'firebase/auth';

const CommentSectionComp = ({ eventId }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase_auth, (currentUser) => {
      if (currentUser) {
        console.log("Authenticated user:", currentUser); // Verifique se displayName está presente
        setUser(currentUser);
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
        console.log("Fetched comments:", fetchedComments); // Verifique se userName está presente
      }, (error) => {
        console.error("Error fetching comments: ", error);
        Alert.alert("Erro", "Não foi possível buscar os comentários.");
      });
      return () => unsubscribe();
    }
  }, [eventId]);

  const handleCommentSubmit = async () => {
    if (comment.trim() === '' || !user) return;

    const newComment = {
      eventId,
      text: comment,
      createdAt: new Date(),
      userId: user.uid,
      userName: user.displayName || 'Anonymous', // Certifique-se de que user.displayName está disponível
    };

    console.log("Submitting comment:", newComment); // Verifique se userName está correto

    try {
      await addDoc(collection(db, 'comments'), newComment);
      setComment('');
    } catch (error) {
      console.error("Error adding comment: ", error);
      Alert.alert("Erro", "Não foi possível enviar o comentário.");
    }
  };

  const renderComment = ({ item }) => {
    console.log("Rendering comment:", item); // Adicione log para depuração
    const isUserComment = item.userId === user?.uid;
    return (
      <View style={[styles.commentContainer, isUserComment ? styles.userComment : styles.otherComment]}>
        <Text style={styles.commentUserName}>{item.userName}</Text>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderComment}
        contentContainerStyle={styles.commentList}
      />
      <TextInput
        style={styles.input}
        placeholder="Escreva seu comentário"
        placeholderTextColor="#999"
        value={comment}
        onChangeText={setComment}
      />
      <Button title="Enviar" onPress={handleCommentSubmit} disabled={!user || !eventId} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#121212',
  },
  commentList: {
    flexGrow: 1,
  },
  commentContainer: {
    marginBottom: 10,
    padding: 10,
  },
  userComment: {
    alignSelf: 'flex-end',
    backgroundColor: '#33FFFF',
    borderRadius: 10,
  },
  otherComment: {
    alignSelf: 'flex-start',
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
  },
  commentUserName: {
    fontWeight: 'bold',
    color: '#FFD700',
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
    color: '#fff',
  },
});

export default CommentSectionComp;
