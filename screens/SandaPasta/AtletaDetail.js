// ./screens/SandaPasta/AtletaDetail.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AtletaDetail = ({ route, navigation }) => {
  const { atletaName, idade, foto } = route.params;  // Supondo que 'idade' e 'foto' são passados como parâmetros

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: atletaName,
    });
  }, [navigation, atletaName]);

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image source={foto} style={styles.atletaImage} />
        <View style={styles.textContainer}>
          <Text style={styles.atletaText}>Nome: {atletaName}</Text>
          <Text style={styles.atletaText}>Idade: {idade}</Text>
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
    borderRadius: 50,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  atletaText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    textShadowColor: '#33FFFF',  // Cor da sombra do texto
    textShadowOffset: { width: -1, height: 1 },  // Deslocamento da sombra do texto
    textShadowRadius: 10,  // Raio da sombra do texto
  },
});

export default AtletaDetail;
