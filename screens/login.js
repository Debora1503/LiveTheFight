import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, KeyboardAvoidingView} from 'react-native';
import { useState } from 'react';

const Login = ({navigation}) => { 

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#707070', // Define a cor de fundo do header como vermelho
      },
      headerTintColor: 'white', // Define a cor do texto do header como branco
    });
  }, [navigation]);

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    

    

    <View style={styles.container}>
        <View style={styles.form}>

          <Text style={styles.label}>User name:</Text>
          <TextInput style={styles.input} placeholder='Enter your name' value={username} onChangeText={setUsername} />

          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} placeholder='Enter your password' secureTextEntry value={password} onChangeText={setPassword} />
            
          <TouchableOpacity style={[styles.button, {backgroundColor:'#707070'}]} onPress={() => navigation.navigate("Casa")} >
          <Text style={styles.textbutton}>Login</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  }, 
  form:{
    backgroundColor:'#A0A0A0',
    padding:50,
    borderRadius:10,
    shadowColor:"black",
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
    borderRadius:7,
  },
  label:{
    fontSize:16,
    marginBottom: 5,
    fontWeight:"bold",
  },
  input:{
    height:40,
    borderColor:"#ddd",
    borderWidth:1,
    marginBottom:15,
    padding:10,
    borderRadius:5,
  },
  button:{
    marginTop: 5,
    width: 250,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,

  },
  textbutton:{
    fontSize:18,
    color:'white',
  },
});

export default Login; 
