// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMk-HtwP4zP7WIKVitiphffJ2i8ZdDzrc",
  authDomain: "netflixgpt-a932e.firebaseapp.com",
  projectId: "netflixgpt-a932e",
  storageBucket: "netflixgpt-a932e.appspot.com",
  messagingSenderId: "397438282195",
  appId: "1:397438282195:web:2f461fec65ba744c86a726",
  measurementId: "G-9ZQKN0KRX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth=getAuth();