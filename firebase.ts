import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0h1gcC5njK4y4L8cPMWBO-F37j9EzurY",
    authDomain: "real-time-translation-chat-app.firebaseapp.com",
    projectId: "real-time-translation-chat-app",
    storageBucket: "real-time-translation-chat-app.appspot.com",
    messagingSenderId: "350916461847",
    appId: "1:350916461847:web:cab925fb743451aac0a352",
    measurementId: "G-XKN3GTW5ZL"
  };


  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const functions = getFunctions(app);

  export { app, auth, db, functions}