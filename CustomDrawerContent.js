import React, { useEffect, useState } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { firebase_auth, db } from './firebase/firebaseconf';
import { doc, getDoc } from 'firebase/firestore';

function CustomDrawerContent(props) {
  const { navigation } = props;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = firebase_auth.currentUser;
        if (user) {
          console.log('Current user ID:', user.uid);
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            console.log('User data:', userDoc.data());
            setUserData(userDoc.data());
          } else {
            console.log('No user data found');
          }
        } else {
          console.log('No authenticated user found');
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.header}>
        {userData ? (
          <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
            <Text style={styles.userName}>{userData.firstName} {userData.lastName}</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.userName}>Loading...</Text>
        )}
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
      <TouchableOpacity onPress={() => navigation.navigate('Competicoes')} style={styles.item}>
        <Text style={styles.label}>Competicoes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Roupa')} style={styles.item}>
        <Text style={styles.label}>Roupa</Text>
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
  userName: {
    fontSize: 18,
    color: '#FFFFFF',
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
