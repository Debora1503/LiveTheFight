import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Competicoes = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
      </View>
    </View>
  );

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
    left: 20,
    zIndex: 1,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    paddingBottom: 20,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  record: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  separatorContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  separatorText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});

export default Competicoes;
