// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "---api-key-----",
  authDomain: "ecommercev1-e0803.firebaseapp.com",
  projectId: "ecommercev1-e0803",
  storageBucket: "ecommercev1-e0803.firebasestorage.app",
  messagingSenderId: "751280464155",
  appId: "-----app-id-------------"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }