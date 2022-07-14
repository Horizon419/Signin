// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC0DOjoEUzD7-btSQFtWa2HIatL4g_2hw",
  authDomain: "react-authentication-e6aeb.firebaseapp.com",
  projectId: "react-authentication-e6aeb",
  storageBucket: "react-authentication-e6aeb.appspot.com",
  messagingSenderId: "63081553546",
  appId: "1:63081553546:web:d9c6f82ada28eab1669773",
  measurementId: "G-1RNQC41N91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;