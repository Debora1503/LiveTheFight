// src/components/ClothingSection.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ClothingCard from '../screens/ClothingCard ';

const ClothingSection = ({ title, data }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <ClothingCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
    paddingLeft: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#33FFFF', // Cor do texto para combinar com o título das notícias na `Casa`
    marginBottom: 10,
  },
});

export default ClothingSection;
