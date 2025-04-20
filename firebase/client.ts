// Import the functions you need from the SDKs you need
import { getApp,getApps,initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnDDv34bYFMidLxlXpxz2RL5Z9MSjqPd4",
  authDomain: "prepwise-f7814.firebaseapp.com",
  projectId: "prepwise-f7814",
  storageBucket: "prepwise-f7814.firebasestorage.app",
  messagingSenderId: "1025642867517",
  appId: "1:1025642867517:web:41bdd627e7813bffe4b354",
  measurementId: "G-E4EBHZ5K7J"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export  const auth = getAuth(app);
export const db = getFirestore(app);
