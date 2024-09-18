// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm7HWZWKOM5JDv34a9ciehNrlQKczvND4",
  authDomain: "react-native-project-3d8a3.firebaseapp.com",
  projectId: "react-native-project-3d8a3",
  storageBucket: "react-native-project-3d8a3.appspot.com",
  messagingSenderId: "318282118321",
  appId: "1:318282118321:web:3cd6844f7f0f8f029ede90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);