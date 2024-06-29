import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { db, firebase_auth } from '../../firebase/firebaseconf'; // Certifique-se de que o caminho está correto
import { collection, addDoc, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const CommentSection = ({ eventId }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase_auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        setUser({ ...currentUser, ...userDoc.data() });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const q = query(collection(db, 'comments'), where('eventId', '==', eventId));
        const querySnapshot = await getDocs(q);
        const fetchedComments = [];
        querySnapshot.forEach((doc) => {
          fetchedComments.push({ id: doc.id, ...doc.data() });
        });
        setComments(fetchedComments);
      } catch (error) {
        console.error("Error fetching comments: ", error);
      }
    };
    fetchComments();
  }, [eventId]);

  const handleCommentSubmit = async () => {
    if (comment.trim() === '' || !user) return;
    const newComment = {
      eventId,
      text: comment,
      createdAt: new Date(),
      userId: user.uid,
      userName: user.username || 'Anonymous',
    };
    try {
      await addDoc(collection(db, 'comments'), newComment);
      setComments([...comments, { id: new Date().toISOString(), ...newComment }]);
      setComment('');
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comentários</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text style={styles.commentUserName}>{item.userName}</Text>
            <Text style={styles.commentText}>{item.text}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Escreva um comentário"
        value={comment}
        onChangeText={setComment}
      />
      <Button title="Enviar" onPress={handleCommentSubmit} disabled={!user} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
  },
  title: {
    fontSize: 18,
    color: '#33FFFF',
    marginBottom: 10,
  },
  comment: {
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  commentUserName: {
    color: '#33FFFF',
    fontWeight: 'bold',
  },
  commentText: {
    color: '#fff',
  },
  input: {
    backgroundColor: '#444444',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default CommentSection;
