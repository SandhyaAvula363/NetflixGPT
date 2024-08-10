// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS8Px9AEUluAmRgyL6LgtaP12gYTqzaog",
  authDomain: "netflixgpt-4be7c.firebaseapp.com",
  projectId: "netflixgpt-4be7c",
  storageBucket: "netflixgpt-4be7c.appspot.com",
  messagingSenderId: "943152553695",
  appId: "1:943152553695:web:74cf6eed376c72f389536a",
  measurementId: "G-XKRSZPBCT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
