import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAHq7AmbJ2ZUrShXX3DMONELK2V_y6ueio",
  authDomain: "wedding-ce5d5.firebaseapp.com",
  projectId: "wedding-ce5d5",
  storageBucket: "wedding-ce5d5.firebasestorage.app",
  messagingSenderId: "808798755487",
  appId: "1:808798755487:web:59b196f99327ab6d0860aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, collection, addDoc, getDocs, storage};
