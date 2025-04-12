// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdnhhbzLaCqTWdtPw4sYwVM1WCrO1JRz0",
  authDomain: "mern-book-inventory-d491f.firebaseapp.com",
  projectId: "mern-book-inventory-d491f",
  storageBucket: "mern-book-inventory-d491f.firebasestorage.app",
  messagingSenderId: "272213556841",
  appId: "1:272213556841:web:06e427b44796bce3476cf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;