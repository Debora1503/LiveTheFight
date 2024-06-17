// ./screens/SandaPasta/SandaAtletas.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const atletas = [
  { name: 'Bernardo Estevão',
     idade: 25, 
     foto: require('../../img/bernardo.jpg'),
     associacao:'YMAA',
     
     peso:80,
     altura:1.80,
     vitorias:20,
     derrotas:0,
     ko:5,

     competicoes:'2x Campeao Nacional, 1x Campeao europeu e participou os Mundiais '
    },

  { name: 'Débora Bandeirinha',
     idade: 22, 
     foto: require('../../img/debora.jpg'),
     associacao: 'YMAA',

     peso: 80,
     altura: 1.80,
     vitorias: 20,
     derrotas: 0,
     ko: 5,

     competicoes:'2x Campeao Nacional, 1x Campeao europeu e participou os Mundiais '
    },
  { name: 'Diogo Rodrigues', 
    idade: 27, 
    foto: require('../../img/diogo.jpg') 
  },
  { name: 'Tiago Carvalho', 
    idade: 24, 
    foto: require('../../img/tiago.jpg') 
  },
  { name: 'Weronika Tatara', 
    idade: 23, 
    foto: require('../../img/weronika.jpg') },
];

const SandaAtletas = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.titulo}>Sanda Atletas</Text>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {atletas.map((atleta, index) => (
          <TouchableOpacity
            key={index}
            style={styles.atletaButton}
            onPress={() => navigation.navigate('AtletaDetail', { 
              atletaName: atleta.name, 
              idade: atleta.idade,
              foto: atleta.foto, 
              associacao: atleta.associacao,
              peso: atleta.peso,
              altura: atleta.altura,
              vitorias: atleta.vitorias,
              derrotas: atleta.derrotas,
              ko: atleta.ko,
              competicoes: atleta.competicoes

            })}
          >
            <Text style={styles.atletaText}>{atleta.name}</Text>
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
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    marginTop: 30,
  },
  listContainer: {
    marginTop: 50,
  },
  atletaButton: {
    backgroundColor: '#C8C8C8',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  atletaText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    textShadowColor: '#33FFFF',  // Cor da sombra do texto (azul)
    textShadowOffset: { width: -1, height: 1 },  // Deslocamento da sombra do texto
    textShadowRadius: 10,  // Raio da sombra do texto
  },
});

export default SandaAtletas;
