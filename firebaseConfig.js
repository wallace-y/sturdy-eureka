// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7uDhuV7j3Q9GVuhZQEKCRMjcR9I_ugR0",
  authDomain: "url-shortener-c6db8.firebaseapp.com",
  projectId: "url-shortener-c6db8",
  storageBucket: "url-shortener-c6db8.appspot.com",
  messagingSenderId: "849434538175",
  appId: "1:849434538175:web:54a095a15d7e462169d60a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
