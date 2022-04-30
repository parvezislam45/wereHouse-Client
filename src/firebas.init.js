// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,

  apiKey: "AIzaSyDlMaWG7CH9_6M7BBrH-HEDs-U8Rumh82M",
  authDomain: "david-bike-mania.firebaseapp.com",
  projectId: "david-bike-mania",
  storageBucket: "david-bike-mania.appspot.com",
  messagingSenderId: "525367104180",
  appId: "1:525367104180:web:697e0f1b4dc202a667fde1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;