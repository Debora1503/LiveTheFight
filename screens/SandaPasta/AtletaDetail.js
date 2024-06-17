// ./screens/SandaPasta/AtletaDetail.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AtletaDetail = ({ route, navigation }) => {
  const { atletaName, idade, foto } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image source={foto} style={styles.atletaImage} />
        <View style={styles.textContainer}>
          <Text style={styles.tituloatleta}>Nome:</Text>
          <Text style={styles.atletaName}>{atletaName}</Text>
          <Text style={styles.tituloatleta}>Idade:</Text>
          <Text style={styles.atletaText}> {idade}</Text>
          {/* Adicione mais detalhes aqui */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C8C8C8',
    padding: 10,
    borderRadius: 10,
  },
  atletaImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  atletaName: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,

  },
  atletaText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    // Sem sombra azul
  },
  backButton: {
    marginLeft: 15,
  },
  tituloatleta:{
    color:'white',
    fontSize:20,
    textShadowColor: '#33FFFF',  // Cor da sombra do texto (azul)
    textShadowOffset: { width: -1, height: 1 },  // Deslocamento da sombra do texto
    textShadowRadius: 10,  // Raio da sombra do texto
  }
});

export default AtletaDetail;
