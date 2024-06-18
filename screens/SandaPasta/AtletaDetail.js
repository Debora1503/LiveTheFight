// ./screens/SandaPasta/AtletaDetail.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AtletaDetail = ({ route, navigation }) => {
  const { atletaName, idade, foto, associacao, peso, altura, vitorias, derrotas, ko, competicoes } = route.params;

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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailsContainer}>
        <Image source={foto} style={styles.atletaImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.tituloatleta}>Nome:</Text>
          <Text style={styles.atletaName}>{atletaName}</Text>
          <Text style={styles.tituloatleta}>Idade:</Text>
          <Text style={styles.atletaText}> {idade} anos</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.informacaotecnica}>Informação Tecnica</Text>
        <Text style={styles.tituloatleta}>Associação:</Text>
        <Text style={styles.atletaText}>{associacao}</Text>
        <Text style={styles.tituloatleta}>Categoria de peso de competição:</Text>
        <Text style={styles.atletaText}> {peso} kg</Text>
        <Text style={styles.tituloatleta}>Altura:</Text>
        <Text style={styles.atletaText}> {altura} m </Text>
        <Text style={styles.tituloatleta}>Histórico de Vitórias, Derrotas e KO's:</Text>
        <Text style={styles.atletaText}> {vitorias}, {derrotas}, {ko} </Text>
        <Text style={styles.tituloatleta}>Histórico de competições:</Text>
        <Text style={styles.atletaText}> {competicoes} </Text>
        {/* Adicione mais detalhes aqui */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
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
    marginBottom: 20,
  },
  atletaImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#C8C8C8',
    padding: 10,
    borderRadius:10,
  },
  atletaName: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
  atletaText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 15,
  },
  backButton: {
    marginLeft: 15,
  },
  tituloatleta: {
    color: 'black',
    fontSize: 20,
   /* textShadowColor: '#fff',  // Cor da sombra do texto (azul)
    textShadowOffset: { width: 0, height: 0 },  // Deslocamento da sombra do texto
    textShadowRadius: 5,  // Raio da sombra do texto*/
    marginBottom: 3,
  },
  informacaotecnica: {
    fontSize:20,
    marginBottom:10,
    textShadowColor: '#67e8f9',
    textShadowOffset: {width: -1, height:1},
    textShadowRadius: 5
  },
});

export default AtletaDetail;
