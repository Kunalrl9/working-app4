

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection,getDocs } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBx7RdYlqDaHjcn7DNd6aPiaR0MDEFAXo",
  authDomain: "agontales-e51c7.firebaseapp.com",
  databaseURL: "https://agontales-e51c7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agontales-e51c7",
  storageBucket: "agontales-e51c7.appspot.com",
  messagingSenderId: "988262485455",
  appId: "1:988262485455:web:db2947e547afa6413716ba",
  measurementId: "G-E4L04ES722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

const analytics = getAnalytics(app);
export {app,db,getFirestore,collection,getDocs}
