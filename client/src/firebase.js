// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-24145.firebaseapp.com",
  projectId: "mern-auth-24145",
  storageBucket: "mern-auth-24145.appspot.com",
  messagingSenderId: "860743318151",
  appId: "1:860743318151:web:76f9aa0ef898c6f2ed1622"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);