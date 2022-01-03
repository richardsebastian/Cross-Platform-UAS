// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi7THL-7isMdoZ8DfnyxKvbxV6rzMNEjE",
  authDomain: "uas-cross-4f9b5.firebaseapp.com",
  projectId: "uas-cross-4f9b5",
  storageBucket: "uas-cross-4f9b5.appspot.com",
  messagingSenderId: "72136518829",
  appId: "1:72136518829:web:d42c02bf479a7bfcd62a24",
  measurementId: "G-FCSR9YKN87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;