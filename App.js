import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; //Import de merdas q é obrigatorio tmb



import Home from './screens/home';
import Login from './screens/login';
import Signin from './screens/signin';
import Casa from './screens/casa';


export default function App() {

  const Stack = createStackNavigator(); //Isto daqui é obrigatorio ter pra ir de uma tela pra outra ( Não me pergunte o porque pq n sei so sei q é preciso kkk)
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Casa' component={Casa}/>
      </Stack.Navigator>

    </NavigationContainer>


  );
}

