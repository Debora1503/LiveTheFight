import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const treinador = [
  {
    nome: 'John Doe',
    idade: '50',
    foto: require('../../img/mestre.jpg'),
    associacao: 'Associação XYZ',
    anoentrada: '2010',
    artesmarciais: 'Kung Fu, Sanda',
    formacoes: 'Formação em Educação Física, Faixa preta em Kung Fu',
  },
];

const SandaTreinador = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.titulo}>Sanda Treinador</Text>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {treinador.map((treinador, index) => (
          <TouchableOpacity
            key={index}
            style={styles.treinadorButton}
            onPress={() => navigation.navigate('TreinadorDetail', { 
              nome: treinador.nome,
              idade: treinador.idade,
              foto: treinador.foto,
              associacao: treinador.associacao,
              anoentrada: treinador.anoentrada,
              artesmarciais: treinador.artesmarciais,
              formacoes: treinador.formacoes,
            })}
          >
            <View style={styles.treinadorContent}>
              <Image source={treinador.foto} style={styles.treinadorImage} />
              <Text style={styles.textinfo}>{treinador.nome}</Text>
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
    padding: 60,
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 26,
    marginTop: 30,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  listContainer: {
    marginTop: 50,
  },
  treinadorButton: {
    backgroundColor: '#444444',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  treinadorContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  treinadorImage: {
    width: 50,
    height: 75,
    borderRadius: 5,
    marginRight: 20,
  },
  textinfo: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SandaTreinador;
