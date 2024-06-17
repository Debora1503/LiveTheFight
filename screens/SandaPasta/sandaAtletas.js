// ./screens/SandaPasta/SandaAtletas.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const atletas = [
  'Bernardo Estevão',
  'Débora Bandeirinha',
  'Diogo Rodrigues',
  'Tiago Carvalho',
  'Weronika Tatara'
];

const SandaAtletas = ({ navigation }) => {
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

      <Text style={styles.titulo}>Sanda Atletas</Text>
      <ScrollView style={styles.scrollView}>
        {atletas.map((atleta, index) => (
          <TouchableOpacity
            key={index}
            style={styles.atletaButton}
            onPress={() => navigation.navigate('AtletaDetail', { atletaName: atleta })}
          >
            <Text style={styles.atletaText}>{atleta}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    marginTop: 30,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  scrollView: {
    marginTop: 20,
  },
  atletaButton: {
    backgroundColor: '#C8C8C8',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#33FFFF',
  },
  atletaText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#33FFFF',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default SandaAtletas;
