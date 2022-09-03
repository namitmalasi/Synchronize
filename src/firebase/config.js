import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBtyqZevNtxFx1VGxisnk6fXcr3CZ2rTM",
  authDomain: "synchronize-ad0fe.firebaseapp.com",
  projectId: "synchronize-ad0fe",
  storageBucket: "synchronize-ad0fe.appspot.com",
  messagingSenderId: "917109669637",
  appId: "1:917109669637:web:3d074a22eac41b3e30816c",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp };
