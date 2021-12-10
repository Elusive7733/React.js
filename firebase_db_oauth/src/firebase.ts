// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWP4MEpLjRIpphJzT92UAlJgZKUqzesRE",
  authDomain: "fine-fitness-83c83.firebaseapp.com",
  databaseURL:
    "https://fine-fitness-83c83-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fine-fitness-83c83",
  storageBucket: "fine-fitness-83c83.appspot.com",
  messagingSenderId: "408468786875",
  appId: "1:408468786875:web:aa7f2ca262267f1325e39e",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
