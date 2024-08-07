import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LogBox } from 'react-native';

import { LikesProvider } from './screens/data/LikesContext';

import Home from './screens/home';
import Login from './screens/login';
import Signin from './screens/signin';
import HomePage from './screens/casa';
import Competicoes from './screens/competicoes';
import Sanda from './screens/SandaPasta/sanda';
import SandaTreinador from './screens/SandaPasta/sandaTreinador';
import TreinadorDetail from './screens/SandaPasta/TreinadorDetail';
import SandaInfo from './screens/SandaPasta/sandainfo';
import SandaEventos from './screens/SandaPasta/sandaEventos';
import SandaAtletas from './screens/SandaPasta/sandaAtletas';
import AtletaDetail from './screens/SandaPasta/AtletaDetail';
import CustomDrawerContent from './CustomDrawerContent';
import UserProfile from './screens/UserProfile';
import ClothingPage from './screens/ClothingPage';

LogBox.ignoreAllLogs(); // Ignore all log notifications

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
      <Drawer.Screen name="Competicoes" component={Competicoes} />
      <Drawer.Screen name="Sanda" component={Sanda} />
      <Drawer.Screen name="SandaAtletas" component={SandaAtletas} />
      <Drawer.Screen name="SandaTreinador" component={SandaTreinador} />
      <Drawer.Screen name="TreinadorDetail" component={TreinadorDetail} />
      <Drawer.Screen name="SandaInfo" component={SandaInfo} />
      <Drawer.Screen name="SandaEventos" component={SandaEventos} />
      <Drawer.Screen 
        name="UserProfile" 
        component={UserProfile} 
        options={{
          headerShown: false,  // Hide the header for UserProfile
        }} 
      />
      <Drawer.Screen name="Roupa" component={ClothingPage} />
      <Drawer.Screen name="LogOut" component={Home} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <LikesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Casa" component={CasaDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="Sanda" component={Sanda} />
          <Stack.Screen name="SandaTreinador" component={SandaTreinador} options={{ headerShown: false }} />
          <Stack.Screen name="SandaAtletas" component={SandaAtletas} options={{ headerShown: false }} />
          <Stack.Screen name="SandaInfo" component={SandaInfo} options={{ headerShown: false }} />
          <Stack.Screen name="SandaEventos" component={SandaEventos} options={{ headerShown: false }} />
          <Stack.Screen
            name="AtletaDetail"
            component={AtletaDetail}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'gray',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="TreinadorDetail"
            component={TreinadorDetail}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTintColor: 'white',
              headerStyle:{
                backgroundColor: 'gray',
              },
              headerTitleStyle:{
                color: 'white',
              },
            }}
          />
          <Stack.Screen name="Roupa" component={ClothingPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </LikesProvider>
  );
}
