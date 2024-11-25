// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChEWlgobOb5wfTulPHdVsd77TZTrZRBUo",
  authDomain: "projeto-de-tcc-50c46.firebaseapp.com",
  projectId: "projeto-de-tcc-50c46",
  storageBucket: "projeto-de-tcc-50c46.firebasestorage.app",
  messagingSenderId: "993919445518",
  appId: "1:993919445518:web:cd17568a52d51f88ebea5f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}


const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()
export { auth, firestore, storage };