// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_BLocGHtA25LQIJz15HngYwUhhj-8CB8",
  authDomain: "pokestore-60755.firebaseapp.com",
  projectId: "pokestore-60755",
  storageBucket: "pokestore-60755.appspot.com",
  messagingSenderId: "771509019126",
  appId: "1:771509019126:web:de0117df0d0b68d58427d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
