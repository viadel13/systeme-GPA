import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDFZYmfD3tZ5UZ-ugLcUJPbFXkhY9P744Q",
  authDomain: "systeme-gp.firebaseapp.com",
  projectId: "systeme-gp",
  storageBucket: "systeme-gp.appspot.com",
  messagingSenderId: "411388894575",
  appId: "1:411388894575:web:4a3a9d1fbffef91c949c9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();