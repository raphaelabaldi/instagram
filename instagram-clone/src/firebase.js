import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqOd0cCB9DlQFMsONcW40gFz39YjxgJdU",
    authDomain: "instagram-clone-bb8c9.firebaseapp.com",
    databaseURL: "https://instagram-clone-bb8c9-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-bb8c9",
    storageBucket: "instagram-clone-bb8c9.appspot.com",
    messagingSenderId: "857954674578",
    appId: "1:857954674578:web:9bba3d36da1cf16aed834b",
    measurementId: "G-3862L9RSQ6"
})

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export {db, auth, storage};