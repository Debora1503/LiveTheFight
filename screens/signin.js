import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, Alert } from 'react-native';
import { firebase_auth } from '../firebase/firebaseconf';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const Signin = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#707070', // Cor de fundo do header
      },
      headerTintColor: 'white', // Cor do texto do header
    });
  }, [navigation]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const auth = firebase_auth;
  const db = getFirestore();

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleNumberChange = (text) => {
    setNumber(text);
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    try {
      if (!firstName || !lastName || !email || !number || !username || !password) {
        alert('Todos os campos devem ser preenchidos.');
        return;
      } else if (!email.includes("@")) {
        alert('Email inválido.');
        return;
      } else if (!/^\d+$/.test(number)) {
        alert('Número de telefone inválido.');
        return;
      } else if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
      } else {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        Alert.alert(
          "Conta criada com sucesso!",
          "Faça login para continuar.",
          [{ text: "OK", onPress: () => navigation.navigate('Login') }],
          { cancelable: false }
        );
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Image source={require('../img/Logo.png')} style={styles.logo} />

          <Text style={styles.label}>Primeiro Nome:</Text>
          <TextInput
            placeholder='Digite seu primeiro nome'
            style={styles.input}
            value={firstName}
            onChangeText={handleFirstNameChange}
          />

          <Text style={styles.label}>Último Nome:</Text>
          <TextInput
            placeholder='Digite seu último nome'
            style={styles.input}
            value={lastName}
            onChangeText={handleLastNameChange}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            placeholder='Digite seu email'
            style={styles.input}
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Número de Telefone:</Text>
          <TextInput
            placeholder='Digite seu número de telefone'
            style={styles.input}
            value={number}
            onChangeText={handleNumberChange}
            keyboardType='numeric'
          />

          <Text style={styles.label}>Username:</Text>
          <TextInput
            placeholder='Digite seu username'
            style={styles.input}
            value={username}
            onChangeText={handleUsernameChange}
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha:</Text>
          <TextInput
            placeholder='Digite sua senha'
            style={styles.input}
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
    backgroundColor: '#1E1E1E',
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
    borderColor: '#ccc', // Cor da borda do input
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Cor de fundo dos inputs (claro)
    color: '#333', // Cor do texto dentro do input (escuro)
    borderColor: '#33FFFF',
    borderRadius: 5,
    borderWidth: 2,
  },
  logo: {
    alignSelf: 'center', // Centralizando o logo horizontalmente
    marginTop: 20, // Margem acima do logo
    marginBottom: 20, // Margem abaixo do logo
    width: 170,
    height: 170,
    resizeMode: 'contain', // Melhor ajuste para o tamanho do logo
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
    color: '#33FFFF',
  },
});

export default Signin;
