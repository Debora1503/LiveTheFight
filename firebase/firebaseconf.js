// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKSpAKzbhbPLzIeK1JvveCAEGSDf-i9KM",
  authDomain: "livethefight-33942.firebaseapp.com",
  projectId: "livethefight-33942",
  storageBucket: "livethefight-33942.appspot.com",
  messagingSenderId: "379114863326",
  appId: "1:379114863326:web:4b42c571b96da3c980e04f", 
  measurementId: "G-M4CRF7SWX0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(app);
export const db = getFirestore(app);
