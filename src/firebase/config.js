import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAGsLSSNF4yDUcfaYKEs_SYMBefJHxSGns",
    authDomain: "sudofy-capstone.firebaseapp.com",
    projectId: "sudofy-capstone",
    storageBucket: "sudofy-capstone.appspot.com",
    messagingSenderId: "597636209914",
    appId: "1:597636209914:web:44503282ac0485eb45bd43"
  };

// init firebase
firebase.initializeApp(firebaseConfig);
 
// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export {projectFirestore, projectAuth, timestamp}