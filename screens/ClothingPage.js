// src/components/ClothingPage.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ClothingSection from '../screens/ClothingSection';
import { shirtsData, shortsData, pantsData, jacketsData } from './data/data';

const ClothingPage = () => {
  return (
    <ScrollView style={styles.container}>
      <ClothingSection title="Camisolas" data={shirtsData} />
      <ClothingSection title="Calções de Luta" data={shortsData} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default ClothingPage;
