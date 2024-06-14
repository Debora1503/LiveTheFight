import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screens/home';
import Login from './screens/login';
import Signin from './screens/signin';
import HomePage from './screens/casa';
import Treinadores from './screens/treinadores';
import Sanda from './screens/SandaPasta/sanda';
import CustomDrawerContent from './CustomDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CasaDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomePage"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerLabelStyle: {
          color: '#4b5563',
          textAlign: 'center',
        },
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#67e8f9',
      }}
    >
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="Treinadores" component={Treinadores} />
      <Drawer.Screen name="Sanda" component={Sanda} />
      <Drawer.Screen name="LogOut" component={Home} />
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
        <Stack.Screen name="Sanda" component={Sanda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
