import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyAKEhQQe4fReR0k2HxgokAHk0zPJmru95s",
  authDomain: "image-app-92378.firebaseapp.com",
  projectId: "image-app-92378",
  storageBucket: "image-app-92378.appspot.com",
  messagingSenderId: "297075593783",
  appId: "1:297075593783:web:5e2de5423fe746c3d665b2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };