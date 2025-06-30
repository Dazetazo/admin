// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAotgPbRuJT-64glrOaKUNuuCT3HW9Mos",
  authDomain: "admin-2180b.firebaseapp.com",
  projectId: "admin-2180b",
  storageBucket: "admin-2180b.firebasestorage.app",
  messagingSenderId: "1059983812310",
  appId: "1:1059983812310:web:5ee3c56fda845ce802cb77",
  measurementId: "G-2XEFS0X971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { firebaseConfig, app, analytics };