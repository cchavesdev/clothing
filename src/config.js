// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAeX6l5VDl04QnqpBknHkAypX1Mu4VV7DI",
  authDomain: "clothing-be929.firebaseapp.com",
  projectId: "clothing-be929",
  storageBucket: "clothing-be929.appspot.com",
  messagingSenderId: "366800238368",
  appId: "1:366800238368:web:d8c0d1d8c4f45cb54ac945",
  measurementId: "G-QWRKLX9WF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
export {auth, provider};