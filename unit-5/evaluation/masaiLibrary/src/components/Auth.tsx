import {useState,useEffect} from 'react';
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBriGvJyEBseY1-VlRa0ySd_VSizFlsPRw",
  authDomain: "sprint-4-804b2.firebaseapp.com",
  projectId: "sprint-4-804b2",
  storageBucket: "sprint-4-804b2.appspot.com",
  messagingSenderId: "43206649984",
  appId: "1:43206649984:web:f95008079b109d4b9e1e65"
};



if (!firebase.app.length){
    firebase.initializeApp(firebaseConfig);

}
const login = async(email:string,password:string)=>{
    await firebase.auth()signInWithEmailAndPassword(email,password);

}
const logout = () => {
    firebase.auth().signOut();
};

