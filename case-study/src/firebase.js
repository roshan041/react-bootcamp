///import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



  const firebaseConfig = {
    apiKey: "AIzaSyDClPEhfTlwS_5N_rVutCyQjs8A02E0jhc",
    authDomain: "case-study-2500f.firebaseapp.com",
    projectId: "case-study-2500f",
    storageBucket: "case-study-2500f.appspot.com",
    messagingSenderId: "188970096167",
    appId: "1:188970096167:web:2d980b6f38dfc906bb6002",
    measurementId: "G-NSSVBG9ZPS"
  };
  
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth, firebaseApp}