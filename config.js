import * as firebase from 'firebase'
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyALEr1ldbl3RUwZDCERZW2B9uPeh6jAylU",
    authDomain: "willy-app-ea472.firebaseapp.com",
    databaseURL: "https://willy-app-ea472.firebaseio.com",
    projectId: "willy-app-ea472",
    storageBucket: "willy-app-ea472.appspot.com",
    messagingSenderId: "234403080173",
    appId: "1:234403080173:web:75a01a068b4f1e063029e4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
