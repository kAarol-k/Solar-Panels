import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBt-NSm84dCeUoczepn_8pXzFtNGLr4tEY",
    authDomain: "fotovoltaic-8b728.firebaseapp.com",
    projectId: "fotovoltaic-8b728",
    storageBucket: "fotovoltaic-8b728.appspot.com",
    messagingSenderId: "576555839601",
    appId: "1:576555839601:web:94fae06ab23f6b890f6bd0"
  };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore()
    export default db;
