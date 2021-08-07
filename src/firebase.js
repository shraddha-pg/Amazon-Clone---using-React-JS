// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8Otj_a30PNA-9YmP8SfbWWEKuX8BOeu8",
  authDomain: "clone-83b52.firebaseapp.com",
  projectId: "clone-83b52",
  storageBucket: "clone-83b52.appspot.com",
  messagingSenderId: "767322597898",
  appId: "1:767322597898:web:ec2599dead676db868cdf3",
  measurementId: "G-TP59ZNZM5P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
  