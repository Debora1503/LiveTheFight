// ./screens/SandaPasta/SandaAtletas.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const atletas = [
  { name: 'Bernardo Estevão',
    idade: 25, 
    foto: require('../../img/bernardo.jpg'),
    associacao: 'YMAA',
    peso: 80,
    altura: 1.80,
    vitorias: 5,
    derrotas: 7,
    ko: 0,
    competicoes: '----------',
    trabalho:'---',
    artesmarciais:'-----',
    inicio: '--',
    selecao: '--',

  },
  { name: 'Débora Bandeirinha',
    idade: 18, 
    foto: require('../../img/debora.jpg'),
    associacao: 'YMAA',
    peso: '60/65',
    altura: 1.59,
    vitorias: 5,
    derrotas: 7,
    ko: 0,
    competicoes: '2x Europeus (medalha de prata na Grecia em 2022 e medalha de bronze na Suécia em 2024)',
    trabalho:'Estudante',
    artesmarciais:'Kenpo, Kung Fu e Sanda',
    inicio: 2014,
    selecao: 2022,
  },
  { name: 'Diogo Rodrigues', 
    idade: 27, 
    foto: require('../../img/diogo.jpg'),
    associacao: 'YMAA',
    peso: 78,
    altura: 1.75,
    vitorias: 15,
    derrotas: 2,
    ko: 3,
    competicoes: '1x Campeao Nacional, participou os Mundiais',
    trabalho:'Estudante',
    artesmarciais:'Kenpo, Kung Fu e Sanda',
    inicio: 2014,
    selecao: 2022,
  },
  { name: 'Tiago Carvalho', 
    idade: 24, 
    foto: require('../../img/tiago.jpg'),
    associacao: 'YMAA',
    peso: 82,
    altura: 1.82,
    vitorias: 18,
    derrotas: 1,
    ko: 4,
    competicoes: '2x Campeao Nacional, participou os Europeus',
    trabalho:'Estudante',
    artesmarciais:'Kenpo, Kung Fu e Sanda',
    inicio: 2014,
    selecao: 2022,
  },
  { name: 'Weronika Tatara', 
    idade: 23, 
    foto: require('../../img/weronika.jpg'),
    associacao: 'YMAA',
    peso: 70,
    altura: 1.68,
    vitorias: 12,
    derrotas: 3,
    ko: 2,
    competicoes: '1x Campeao Nacional, participou os Europeus',
    trabalho:'Estudante',
    artesmarciais:'Kenpo, Kung Fu e Sanda',
    inicio: 2014,
    selecao: 2022,
  },
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
              competicoes: atleta.competicoes,
              trabalho: atleta.trabalho,
              artesmarciais: atleta.artesmarciais,
              inicio: atleta.inicio,
              selecao: atleta.selecao,
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
    textShadowColor: '#33FFFF',  // Cor da sombra do texto (azul)
    textShadowOffset: { width: -1, height: 1 },  // Deslocamento da sombra do texto
    textShadowRadius: 10,  // Raio da sombra do texto
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
  },
});

export default SandaAtletas;
