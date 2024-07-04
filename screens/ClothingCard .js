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
    backgroundColor: '#A8A8A8', // Cor de fundo semelhante à `Casa`
    borderRadius: 10,
    borderColor: '#33FFFF', // Bordas semelhantes à `Casa`
    borderWidth: 2,
    shadowColor: '#121212',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#121212', // Cor de texto semelhante à `Casa`
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
