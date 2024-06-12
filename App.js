import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; //Import de merdas q é obrigatorio tmb
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from './screens/home';
import Login from './screens/login';
import Signin from './screens/signin';
import Casa from './screens/casa';
import Atletas from './screens/atletas';
import Treinadores from './screens/treinadores';
import CustomDrawerContent from './CustomDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CasaDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Casa"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: true, // Esconde o cabeçalho padrão
      drawerLabelStyle: {
        color: '#4b5563', // Cor do texto dos itens do drawer
        textAlign: 'center',
      },
      drawerActiveTintColor: '#000', // Cor do item ativo no drawer
      drawerInactiveTintColor: '#67e8f9', // Cor do item inativo no drawer
    }}
    >
      <Drawer.Screen name="Casa" component={Casa} />
      <Drawer.Screen name="Atletas" component={Atletas} />
      <Drawer.Screen name="Treinadores" component={Treinadores} />
    </Drawer.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Casa" component={CasaDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

