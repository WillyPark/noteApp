import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwwbpXuMWyyWcri3KpVWIR3rQu4HkTgB8",
  authDomain: "react-journalapp-5447e.firebaseapp.com",
  projectId: "react-journalapp-5447e",
  storageBucket: "react-journalapp-5447e.appspot.com",
  messagingSenderId: "1090091779233",
  appId: "1:1090091779233:web:ab4cdb55396ff7fbea5ce0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
