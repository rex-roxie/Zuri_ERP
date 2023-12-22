// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG3jU1svpiybKykY8HnJ3kZnL8J-pT_MM",
  authDomain: "zuri-erp.firebaseapp.com",
  projectId: "zuri-erp",
  storageBucket: "zuri-erp.appspot.com",
  messagingSenderId: "682392835677",
  appId: "1:682392835677:web:e3d8deedc2557fef071fb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
