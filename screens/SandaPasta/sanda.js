// ./screens/Sanda.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

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
          <Image source={require('../../img/lutar.png')} style={styles.squareImage} />
          <Text style={styles.squareText}>Atletas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('SandaTreinador')}>
          <Image source={require('../../img/treinador.png')} style={styles.squareImage} />
          <Text style={styles.squareText}>Treinador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('SandaInfo')}>
          <Image source={require('../../img/boxe.png')} style={styles.squareImage} />
          <Text style={styles.squareText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('SandaEventos')}>
          <Image source={require('../../img/julho.png')} style={styles.squareImage} />
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
    justifyContent:'center',
    color: 'white',
    fontSize: 25,
    marginTop: -15,
    textShadowColor: '#33FFFF',  // Cor da sombra do texto
    textShadowOffset: { width: -1, height: 1 },  // Deslocamento da sombra do texto
    textShadowRadius: 10,  // Raio da sombra do texto
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  gridContainer: {
    flex: 1,
    marginTop: 170,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  square: {
    marginLeft: -15,
    marginRight:-10,
    width: '50%',
    height: 170,
    backgroundColor: '#C8C8C8',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,  // Adicionado para a borda
    borderColor: '#33FFFF',  // Cor da borda
  },
  squareImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  squareText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#33FFFF',  // Cor da sombra do texto
    textShadowOffset: { width: -1, height: 1 },  // Deslocamento da sombra do texto
    textShadowRadius: 10,  // Raio da sombra do texto
  },
});

export default Sanda;
