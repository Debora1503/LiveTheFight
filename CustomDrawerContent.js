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
        {/* Cabeçalho personalizado */}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.item}>
        <Text style={styles.label}>HomePage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleDropdown} style={[styles.item, isDropdownOpen && styles.activeItem]}>
        <Text style={styles.label}>Artes Marciais</Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdown}>
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
    backgroundColor: '#1E1E1E', // Cor de fundo mais escura para um visual moderno
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  item: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#333333', // Cor de fundo do item
    alignItems: 'center',
  },
  activeItem: {
    backgroundColor: '#555555', // Cor de fundo quando o item está ativo (dropdown aberto)
  },
  label: {
    fontSize: 18,
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: '#FFFFFF', // Cor do texto
  },
  dropdown: {
    marginLeft: 20,
    marginTop: -10,
    borderLeftWidth: 2,
    borderLeftColor: '#33FFFF',
  },
  subItemLabel: {
    fontSize: 16,
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: '#FFFFFF', // Cor do texto
  },
});

export default CustomDrawerContent;
