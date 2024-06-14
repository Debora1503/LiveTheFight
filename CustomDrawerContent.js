// ./CustomDrawerContent.js
import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function CustomDrawerContent(props) {
  const { navigation } = props;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.header}>
        {/* Aqui você pode adicionar um cabeçalho personalizado se desejar */}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.item}>
        <Text style={styles.label}>HomePage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleDropdown} style={styles.item}>
        <Text style={styles.label}>Artes Marciais</Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View>
          <DrawerItem
            label="Sanda"
            onPress={() => navigation.navigate('Sanda')}
            labelStyle={styles.subItemLabel}
          />
        </View>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Treinadores')} style={styles.item}>
        <Text style={styles.label}>Treinadores</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.item}>
        <Text style={styles.label}>LogOut</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: '#d4d4d4',
    flex: 1,
  },
  header: {
    // Estilos para o cabeçalho, se necessário
  },
  item: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontFamily: 'Roboto', // Troque para a fonte desejada, se necessário
    textAlign: 'center',
  },
  subItemLabel: {
    fontSize: 16,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginLeft: 0, // Ajuste a margem conforme necessário
  },
});

export default CustomDrawerContent;
