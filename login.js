import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
//import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
//import { getFirestore } from "firebase/firestore"; 

const app = initializeApp({
    apiKey: "AIzaSyBpdAmST1s6FD9yAmCrUoPLQ-mg8BGXCac",
    authDomain: "addulting-fc16e.firebaseapp.com",
    projectId: "addulting-fc16e",
    storageBucket: "addulting-fc16e.appspot.com",
    messagingSenderId: "941943380813",
    appId: "1:941943380813:web:dcf31919ed4cdc5c493504",
    measurementId: "G-89VD8JX662"
  });

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user=result;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        })
};

function googleLogin() {
    signInWithGoogle;
}