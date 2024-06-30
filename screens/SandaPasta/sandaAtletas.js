import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const atletas = [
  { name: 'Bernardo Estevão',
    idade: 33, 
    foto: require('../../img/bernardoprincipal.jpg'),
    associacao: 'YMAA',
    peso: '75/80',
    altura: 1.79,
    vitorias: 15,
    derrotas: 15,
    ko: 0,
    competicoes: [
      'Campeonato Internacional de Shuai Jiao 2023 (em França)',
      'Campeonato Mundial 2023 (no Texas)',
      'Campeonato Europeu 2024 (na Suécia)'
    ],
    trabalho:'Programador',
    artesmarciais:'Sanda e Shuai Jiao',
    inicio: '2012',
    selecao: '2022',
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
    competicoes: [
      'Campeonato Europeu 2022 (na Grecia), medalha de prata.',
      'Campeonato Internacional de Shuai Jiao 2023 (em França), medalha de bronze.',
      'Campeonato Europeu 2024 (na Suecia), medalha de bronze.'
    ],
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
    competicoes: [
      'Campeonato Europeu 2022 (na Grecia), medalha de prata.',
      'Campeonato Internacional de Shuai Jiao 2023 (em França), medalha de bronze.',
      'Campeonato Europeu 2024 (na Suecia), medalha de bronze.'
    ],
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
    competicoes: [
      'Campeonato Europeu 2022 (na Grecia), medalha de prata.',
      'Campeonato Internacional de Shuai Jiao 2023 (em França), medalha de bronze.',
      'Campeonato Europeu 2024 (na Suecia), medalha de bronze.'
    ],
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
    competicoes: [
      'Campeonato Europeu 2022 (na Grecia), medalha de prata.',
      'Campeonato Internacional de Shuai Jiao 2023 (em França), medalha de bronze.',
      'Campeonato Europeu 2024 (na Suecia), medalha de bronze.'
    ],
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
            <View style={styles.atletaContent}>
              <Image source={atleta.foto} style={styles.atletaImage} />
              <Text style={styles.atletaText}>{atleta.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  titulo: {
    textAlign: 'center',
    color: '#33FFFF',
    fontSize: 26,
    marginTop: 30,
   /* fontWeight: 'bold',
   textShadowColor: '#33FFFF',  
    textShadowOffset: { width: -1, height: 1 },  
    textShadowRadius: 10,  */
  },
  listContainer: {
    marginTop: 50,
  },
  atletaButton: {
    backgroundColor: '#444444',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  atletaContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  atletaImage: {
    width: 50,
    height: 75,
    borderRadius: 5,
    marginRight: 20,
  },
  atletaText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SandaAtletas;
