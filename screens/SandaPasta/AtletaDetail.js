import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AtletaDetail = ({ route, navigation }) => {
  const { atletaName, idade, foto, associacao, peso, altura, vitorias, derrotas, ko, competicoes, trabalho, artesmarciais, inicio, selecao } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: atletaName,
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
          <Text style={styles.tituloAtleta}>Nome:</Text>
          <Text style={styles.atletaName}>{atletaName}</Text>
          <Text style={styles.tituloAtleta}>Idade:</Text>
          <Text style={styles.atletaText}>{idade} anos</Text>
        </View>
      </View>
      <View style={styles.additionalInfoContainer}>
        <Text style={styles.sectionTitle}>Informação Técnica</Text>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloAtleta}>Associação:</Text>
          <Text style={styles.atletaText}>{associacao}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloAtleta}>Categoria de peso de competição:</Text>
          <Text style={styles.atletaText}>{peso} kg</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloAtleta}>Altura:</Text>
          <Text style={styles.atletaText}>{altura} m</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloAtleta}>Histórico de Vitórias, Derrotas e KO's:</Text>
          <Text style={styles.atletaText}>{vitorias} Vitórias, {derrotas} Derrotas, {ko} KO's</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloAtleta}>Histórico de competições:</Text>
          {competicoes.map((competicao, idx) => (
            <Text key={idx} style={styles.atletaText}>{competicao}</Text>
          ))}
        </View>
        <View style={styles.divider} />
        <Text style={styles.sectionTitle}>Informações Adicionais</Text>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloAtleta}>Ano de início das artes marciais:</Text>
          <Text style={styles.atletaText}>{inicio}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloAtleta}>Ano de entrada para a Seleção:</Text>
          <Text style={styles.atletaText}>{selecao}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloAtleta}>Histórico de artes marciais praticadas:</Text>
          <Text style={styles.atletaText}>{artesmarciais}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloAtleta}>Ocupação:</Text>
          <Text style={styles.atletaText}>{trabalho}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444444',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  atletaImage: {
    width: 120,
    height: 180,
    borderRadius: 5,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#444444',
    padding: 10,
    borderRadius: 10,
  },
  additionalInfoContainer: {
    backgroundColor: '#444444',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 15, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 7,
  },
  atletaName: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  atletaText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  backButton: {
    marginLeft: 15,
  },
  tituloAtleta: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#33FFFF',
    marginBottom: 15,
    textAlign: 'center',
   /* textShadowColor: '#33FFFF',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,*/
  },
  infoBlock: {
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#C8C8C8',
    marginVertical: 20,
  },
});

export default AtletaDetail;
