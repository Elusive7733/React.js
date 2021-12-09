// import firebase from "firebase/app";
// import "firebase/database";
import { initializeApp } from "firebase/app"; // no compat for new SDK
import { getDatabase, ref } from "firebase/database";

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

const app = initializeApp(firebaseConfig);

export default app;
