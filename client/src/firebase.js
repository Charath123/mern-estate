// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7d1f6.firebaseapp.com",
  projectId: "mern-estate-7d1f6",
  storageBucket: "mern-estate-7d1f6.appspot.com",
  messagingSenderId: "883745936462",
  appId: "1:883745936462:web:77405ea7db438068f49f1f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
