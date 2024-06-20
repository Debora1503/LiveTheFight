import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const TreinadorDetail = ({ route }) => {
  const { treinador } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailsContainer}>
        <Image source={treinador.foto} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.tituloinfo}>Nome:</Text>
          <Text style={styles.textinfo}>{treinador.nome}</Text>
          <Text style={styles.tituloinfo}>Idade:</Text>
          <Text style={styles.textinfo}>{treinador.idade}</Text>
        </View>
      </View>
      <View style={styles.additionalInfoContainer}>
        <Text style={styles.sectionTitle}>Informações Adicionais</Text>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloinfo}>Associação:</Text>
          <Text style={styles.textinfo}>{treinador.associacao}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloinfo}>Ano de Entrada:</Text>
          <Text style={styles.textinfo}>{treinador.anoentrada}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloinfo}>Artes Marciais:</Text>
          <Text style={styles.textinfo}>{treinador.artesmarciais}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.tituloinfo}>Formações:</Text>
          <Text style={styles.textinfo}>{treinador.formacoes}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#1E1E1E',
    padding: 20,
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444444',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#001',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 5,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#444444',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 15, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 7,
  },
  textinfo: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  tituloinfo: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoBlock: {
    marginBottom: 15,
  },
});

export default TreinadorDetail;
