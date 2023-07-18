import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo3UYhYwjnQxXMUQ0XHfbTTlbMY5xSAxU",
  authDomain: "fir-128df.firebaseapp.com",
  projectId: "fir-128df",
  storageBucket: "fir-128df.appspot.com",
  messagingSenderId: "183402504706",
  appId: "1:183402504706:web:e5f6df53d31ef75a5a3d1b",
  measurementId: "G-20KKPFEJ8S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
