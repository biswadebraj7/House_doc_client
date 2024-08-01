// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrA0deHy0zmKO3bYTcZDQM5cmRN1QIhsw",
  authDomain: "houes-f0605.firebaseapp.com",
  projectId: "houes-f0605",
  storageBucket: "houes-f0605.appspot.com",
  messagingSenderId: "1085123245511",
  appId: "1:1085123245511:web:8c1fb7fc76ef36fb2555e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)