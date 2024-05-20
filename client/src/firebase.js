// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog2-77b14.firebaseapp.com",
  projectId: "mern-blog2-77b14",
  storageBucket: "mern-blog2-77b14.appspot.com",
  messagingSenderId: "887374281842",
  appId: "1:887374281842:web:3ba411edbcfe8391c456eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);