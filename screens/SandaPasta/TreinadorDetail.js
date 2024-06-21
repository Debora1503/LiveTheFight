import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const TreinadorDetail = ({ route }) => {
  const { treinador } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image source={treinador.foto} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.tituloinfo}>Nome:</Text>
          <Text style={styles.textinfo}>{treinador.nome}</Text>
          <Text style={styles.tituloinfo}>Idade:</Text>
          <Text style={styles.textinfo}>{treinador.idade}</Text>
        </View>
      </View>

      <View style={[ styles.centeredCard]}>
        <Text style={styles.sectionTitle}>Informações Tecnicas:</Text>
        <Text style={styles.tituloinfo}>Associação:</Text>
        <Text style={styles.textinfo}>{treinador.associacao}</Text>
        <Text style={styles.tituloinfo}>Ano de Entrada:</Text>
        <Text style={styles.textinfo}>{treinador.anoentrada}</Text>
        <Text style={styles.sectionTitle}>Informações Adicionais</Text>
        <Text style={styles.tituloinfo}>Artes Marciais:</Text>
        <Text style={styles.textinfo}>{treinador.artesmarciais}</Text>
        <Text style={styles.tituloinfo}>Formações:</Text>
        <Text style={styles.textinfo}>{treinador.formacoes}</Text>
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
  card: {
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#33FFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
  },
  centeredCard: {
   // alignItems: 'center', // Center align all items in the card
    backgroundColor:'#333333',
    borderRadius:10,
    padding:20,
    marginVertical:10,
    borderWidth:2,
    borderColor:'#33FFFF',
    shadowColor:'#000',
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.8,
    shadowRadius:5,
    elevation:5,
    width:'100%',
},
  image: {
    width: 120,
    height: 180,
    borderRadius: 5,
    marginRight: 20,
  },
  infoContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  textinfo: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
  },
  tituloinfo: {
    color: '#33FFFF',
    fontSize: 20,
    marginBottom: 5,
    //fontWeight: 'bold',
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 22,
    color: '#33FFFF',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight:'bold',
  },
});

export default TreinadorDetail;
