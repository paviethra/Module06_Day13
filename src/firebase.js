import { getDatabase } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9pOK-bv-Lj6_uy_u0BTYfNU0R8mcCuUQ",
  authDomain: "registrationform-6855a.firebaseapp.com",
  databaseURL: "https://registrationform-6855a-default-rtdb.firebaseio.com",
  projectId: "registrationform-6855a",
  storageBucket: "registrationform-6855a.appspot.com",
  messagingSenderId: "413066945319",
  appId: "1:413066945319:web:5c561f77ac689e35f73f02",
  measurementId: "G-RVRWYYL6MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);