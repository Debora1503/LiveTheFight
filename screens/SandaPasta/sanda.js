// ./screens/Sanda.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const Sanda = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.titulo}>Sanda</Text>
      
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('SandaAtletas')}>
          <Text style={styles.squareText}>Atletas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('SandaTreinador')}>
          <Text style={styles.squareText}>Treinador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('SandaInfo')}>
          <Text style={styles.squareText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('SandaEventos')}>
          <Text style={styles.squareText}>Eventos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 60,
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    marginTop: -15,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  gridContainer: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  square: {
    width: '45%',
    height: 150,
    backgroundColor: '#76c7c0',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  squareText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Sanda;
