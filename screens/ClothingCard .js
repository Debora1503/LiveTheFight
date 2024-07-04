import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LikesContext } from './data/LikesContext';

const ClothingCard = ({ item }) => {
  const { likes, toggleLike } = useContext(LikesContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const isLiked = likes[item.id];

  return (
    <View style={styles.card}>
      <Image source={item.images[currentImageIndex]} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity onPress={handleNextImage} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next Image</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.likeButton}>
        <Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={24} color={isLiked ? 'red' : 'gray'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButton: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  likeButton: {
    marginTop: 10,
  },
});

export default ClothingCard;
