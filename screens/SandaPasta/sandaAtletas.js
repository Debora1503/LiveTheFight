// ./screens/Sanda.js
import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const SandaAtletas = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);
  
  return (
    <View style= {styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>

      <Text style = {styles.titulo}>Sanda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding:60,
  },
  titulo:{
    textAlign:'center',
    color:'white',
    fontSize:22,
    marginTop:-15,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
});

export default SandaAtletas;
