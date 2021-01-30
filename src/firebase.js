

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATjnORl0EV6c-wgALURTq2abm2Igc_e3w",
    authDomain: "instagram-clone-62338.firebaseapp.com",
    databaseURL: "https://instagram-clone-62338-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-62338",
    storageBucket: "instagram-clone-62338.appspot.com",
    messagingSenderId: "537154982693",
    appId: "1:537154982693:web:da74ece7ce648f139600cc",
    measurementId: "G-C1TWEWFC7V"

});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage();

export { db, auth, storage };