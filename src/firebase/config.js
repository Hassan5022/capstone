import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAGsLSSNF4yDUcfaYKEs_SYMBefJHxSGns",
    authDomain: "sudofy-capstone.firebaseapp.com",
    projectId: "sudofy-capstone",
    storageBucket: "sudofy-capstone.appspot.com",
    // storageBucket: "gs://sudofy-capstone.appspot.com",
    messagingSenderId: "597636209914",
    appId: "1:597636209914:web:44503282ac0485eb45bd43"
  };

// init firebase
firebase.initializeApp(firebaseConfig);

// // Initialize Cloud Storage and get a reference to the service
const storage = firebase.storage();
const storageRef = storage.ref();
 
// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export {projectFirestore, storageRef, storage, projectAuth, timestamp}