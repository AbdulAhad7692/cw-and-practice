

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB8Hlp5PoKbOK0Ca97jZIvtcj-hyz-d3zo",
    authDomain: "chat-app-via-login-signup.firebaseapp.com",
    databaseURL: "https://chat-app-via-login-signup-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-app-via-login-signup",
    storageBucket: "chat-app-via-login-signup.appspot.com",
    messagingSenderId: "702334443657",
    appId: "1:702334443657:web:9b5ff40ba04db942c32658",
    measurementId: "G-XS6DYW1EE0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export  {
    auth, app, db, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged, signOut, collection, addDoc, doc, setDoc, getDoc
}   