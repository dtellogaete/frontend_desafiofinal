// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkrtRCieyRyvrChfW2FlByiGcOsHCm3ME",
  authDomain: "desafiolatam-6c0ba.firebaseapp.com",
  projectId: "desafiolatam-6c0ba",
  storageBucket: "desafiolatam-6c0ba.appspot.com",
  messagingSenderId: "285566477241",
  appId: "1:285566477241:web:c2d5aa4198b581f3504c68",
  measurementId: "G-8YD92YFNX7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const authenticate = getAuth(app);

export {db, authenticate};
