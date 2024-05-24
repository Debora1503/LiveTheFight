import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react';



const Home = ({navigation}) => { //As telas eu deixo assim como funções pq acho q fica mais facil e o {navigation} é obrigatorio pra ir de uma tela pra outra
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Define headerShown como false para ocultar a barra de navegação
    });
  }, [navigation]);



  return (
    <View style={styles.container}>

      <Image source={require('../img/Logo.png')} style={styles.logo}/>

      <TouchableOpacity style={[styles.button, {backgroundColor:'dimgray'}]} onPress={()=> navigation.navigate("Login")} >
        <Text style={styles.textbutton}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {backgroundColor:'dimgray'}]} onPress={()=> navigation.navigate("Signin")} >
        <Text style={styles.textbutton}>Sign In</Text>
      </TouchableOpacity>

    </View>
  );
  //E aquele "TouchableOpacity" é só um botão e o "onPress" é oq q queres q faça quando ele for precionado
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  logo:{
    width:250,
    height:250,
    resizeMode: 'cover',
  },
  text:{
    fontSize:30,
  },
  button: {
    marginTop: 20,
    width:200,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    shadowColor:"black",
    shadowOffset:{
      width:2,
      height:4
    },
    shadowOpacity:2,
    shadowRadius:4,
    elevation:5,
  },
  textbutton:{
    color:"white",
    fontSize:18,
  },

}); 

export default Home; // Tens q dar export da função pra conseguires importar ela na App.js
