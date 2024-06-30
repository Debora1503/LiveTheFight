// ./screens/UserProfile.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { firebase_auth, db } from '../firebase/firebaseconf';
import { doc, getDoc } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for the hamburger menu icon

const UserProfile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = firebase_auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    fetchUserData();
  }, []);

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const initials = `${userData.firstName[0]}${userData.lastName[0]}`;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={30} color="#FFFFFF" />
      </TouchableOpacity>
      <View style={styles.profileHeader}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileIconText}>{initials}</Text>
        </View>
        <Text style={styles.profileName}>{userData.firstName} {userData.lastName}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userData.email}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Número de Telefone:</Text>
        <Text style={styles.value}>{userData.number}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{userData.username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1E1E1E',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#555555',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileIconText: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#333333',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#BBBBBB',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  loadingText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default UserProfile;
