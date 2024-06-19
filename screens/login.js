import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { firebase_auth } from '../firebase/firebaseconf';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#707070', // Cor de fundo do header
      },
      headerTintColor: 'white', // Cor do texto do header
    });
  }, [navigation]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = firebase_auth;

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('Casa');
    } catch (error) {
      console.error(error);
      alert("Dados incorretos! Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Cor de fundo escura
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  form: {
    backgroundColor: '#333333', // Cor de fundo do formulário (claro)
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    maxWidth: 400, // Largura máxima do formulário
    borderColor: '#33FFFF',
    borderRadius: 10,
    borderWidth: 2,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#fff', // Cor do texto dos labels (escuro)
  },
  input: {
    height: 40,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Cor de fundo dos inputs (claro)
    color: '#333', // Cor do texto dentro do input (escuro)
    borderColor: '#33FFFF',
    borderRadius: 10,
    borderWidth: 2,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#333', // Cor de fundo do botão (escuro)
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: '#33FFFF',
    borderRadius: 10,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 18,
    color: '#33FFFF', // Cor do texto do botão
  },
});

export default Login;
