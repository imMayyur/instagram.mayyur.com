// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCHAW1Ij1XubYOv5YMzNbFn0MJgKwy7GE8',
  authDomain: 'instagram-mayyur-com.firebaseapp.com',
  projectId: 'instagram-mayyur-com',
  storageBucket: 'instagram-mayyur-com.appspot.com',
  messagingSenderId: '294199195768',
  appId: '1:294199195768:web:af78f90ff86b9ae317558d',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
