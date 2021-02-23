import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlJXLft6aIomwjxGf0A1q4RN5xar8IYMM",
  authDomain: "slack-clone-6815b.firebaseapp.com",
  projectId: "slack-clone-6815b",
  storageBucket: "slack-clone-6815b.appspot.com",
  messagingSenderId: "305443621801",
  appId: "1:305443621801:web:46b10e900480c7f8e912b8",
  measurementId: "G-PW6ETGX0Y6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
