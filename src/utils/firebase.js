// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnG2yFMFth2TWjGuKosN7HiYAGA_Yb6Rc",
  authDomain: "netflix-gpt-310b0.firebaseapp.com",
  projectId: "netflix-gpt-310b0",
  storageBucket: "netflix-gpt-310b0.appspot.com",
  messagingSenderId: "1095814929577",
  appId: "1:1095814929577:web:a58f284f67ddbec5a0ddb8",
  measurementId: "G-6LM5T0PJVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();