import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ClothingSection from './ClothingSection';

const shirtsData = [
  { id: '1', title: 'Camisola 1', image: 'https://example.com/camisola1.jpg' },
  { id: '2', title: 'Camisola 2', image: 'https://example.com/camisola2.jpg' },
  // ... more data
];

const shortsData = [
  { id: '1', title: 'Calção 1', image: 'https://example.com/calcao1.jpg' },
  { id: '2', title: 'Calção 2', image: 'https://example.com/calcao2.jpg' },
  // ... more data
];

const pantsData = [
  { id: '1', title: 'Calça 1', image: 'https://example.com/calca1.jpg' },
  { id: '2', title: 'Calça 2', image: 'https://example.com/calca2.jpg' },
  // ... more data
];

const jacketsData = [
  { id: '1', title: 'Casaco 1', image: 'https://example.com/casaco1.jpg' },
  { id: '2', title: 'Casaco 2', image: 'https://example.com/casaco2.jpg' },
  // ... more data
];

const ClothingPage = () => {
  return (
    <ScrollView style={styles.container}>
      <ClothingSection title="Camisolas" data={shirtsData} />
      <ClothingSection title="Calções de Luta" data={shortsData} />
      <ClothingSection title="Calças" data={pantsData} />
      <ClothingSection title="Casacos" data={jacketsData} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default ClothingPage;
    