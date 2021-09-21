import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQemdxK-onza6rVzdPaEkdF6EzWYGn0EQ",
  authDomain: "clown-b18e1.firebaseapp.com",
  projectId: "clown-b18e1",
  storageBucket: "clown-b18e1.appspot.com",
  messagingSenderId: "870327915550",
  appId: "1:870327915550:web:b7a5ae1fbddc2cc4df0a0f",
  measurementId: "G-F0JT67NM7Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };