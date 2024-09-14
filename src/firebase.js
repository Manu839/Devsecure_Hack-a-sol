import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrPvdIskXjwDER1yGnYqqxwosQCD_Mnnw",
  authDomain: "hackasol.firebaseapp.com",
  projectId: "hackasol",
  storageBucket: "hackasol.appspot.com",
  messagingSenderId: "868905921023",
  appId: "1:868905921023:web:f8bed84da76712c18d1fca",
  measurementId: "G-MV2NDXYT5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db }; 
