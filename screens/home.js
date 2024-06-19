import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Oculta a barra de navegação
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../img/Logo.png')} style={styles.logo} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signin")}>
        <Text style={styles.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Cor de fundo escura
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    marginBottom: 60, // Espaço adicional abaixo do logo
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'dimgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20, // Espaçamento entre os botões
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
  },
});

export default Home;
