import firebase from "firebase"
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyCjNTnD7IHgjdIVUmkZWeptZPjIJp1Yes8",
    authDomain: "somativa-ralfe-7aa1e.firebaseapp.com",
    projectId: "somativa-ralfe-7aa1e",
    storageBucket: "somativa-ralfe-7aa1e.appspot.com",
    messagingSenderId: "377016847027",
    appId: "1:377016847027:web:fd6b13a94cd9bad3bcbec6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
