import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const Sanda = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const treinador = {
    nome: 'Pedro Rodrigues',
    idade: '54',
    foto: require('../../img/mestre.jpg'),
    associacao: 'Associação YMAA',
    anoentrada: '1985',
    artesmarciais: 'Kung Fu, Sanda',
    formacoes: 'Formação em Educação Física, e mestre de Kung Fu',
    biografia: 'Pedro Rodrigues é mestre de artes marciais com mais de 30 anos de experiência. Começou a sua jornada no Kung Fu aos 15 anos e desde então dedicou a sua vida ao ensino e prática de artes marciais.',
    conquistas: [
      'Campeão Nacional de Kung Fu (2005, 2008)',
      'Treinador do Ano (2012, 2016)',
      'Medalha de Ouro no Campeonato Internacional de Sanda (2014)',
    ],
    alunosNotaveis: [
      { nome: 'Diogo Rodrigues', descricao: 'Campeão Nacional de Sanda, Campeão Europeu e treinador de Sanda' },
    ],
    contato: {
      email: 'pedro.rodrigues@associacaoymaa.com',
    },
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.titulo}>Sanda</Text>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('SandaAtletas')}>
          <Image source={require('../../img/lutar (2).png')} style={styles.squareImage} />
          <Text style={styles.squareText}>Atletas</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.square} 
          onPress={() => navigation.navigate('TreinadorDetail', { treinador })}
        >
          <Image source={require('../../img/treinador (1).png')} style={styles.squareImage} />
          <Text style={styles.squareText}>Treinador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('SandaInfo')}>
          <Image source={require('../../img/luvas-de-boxe.png')} style={styles.squareImage} />
          <Text style={styles.squareText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('SandaEventos')}>
          <Image source={require('../../img/julho (1).png')} style={styles.squareImage} />
          <Text style={styles.squareText}>Eventos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
    paddingTop: 60,
  },
  titulo: {
    textAlign: 'center',
    color: '#33FFFF',
    fontSize: 30,
    marginBottom: 30,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  gridContainer: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  square: {
    width: '48%',
    height: 170,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#33FFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  squareImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  squareText: {
    color: '#33FFFF',
    fontSize: 18,
  },
});

export default Sanda;
