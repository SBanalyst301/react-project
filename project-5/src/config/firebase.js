// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7WmxHDSAORdmyI9tCVgP7HhHytubSl_E",
  authDomain: "vite-contact-39aae.firebaseapp.com",
  projectId: "vite-contact-39aae",
  storageBucket: "vite-contact-39aae.firebasestorage.app",
  messagingSenderId: "386830578417",
  appId: "1:386830578417:web:c200006695a5fcce41ef50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)