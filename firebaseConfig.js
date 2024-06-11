/*import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  getReactNativePersistence, initializeAuth  } from 'firebase/auth/react/native';*/

import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
        apiKey: "AIzaSyCUex1G__bl9yscF7MHDWbyOp_cxw0eVqk",
        authDomain: "livethefight-6ddae.firebaseapp.com",
        projectId: "livethefight-6ddae",        
        storageBucket: "livethefight-6ddae.appspot.com",
        messagingSenderId: "1012143236610",
        appId: "1:1012143236610:web:d0b9cbc63a5e3a95faa91b",
        measurementId: "G-WW61500BPJ"
};

//iniciar a firebase
const app = initializeApp(firebaseConfig);

//configurar o AsyncStorage para a presistencia da autenticação 
const auth = initializeAuth(app,{
        persistence: getReactNativePersistence(AsyncStorage)
});


//iniciar os  serviços da firebase
const db = getFirestore(app);

export {auth, db};