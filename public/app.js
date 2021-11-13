import { firebaseConfig } from './new';

const app = initializeApp(firebaseConfig);
//user authentication example
const auth = firebase.auth();

const signedIn = document.getElementById('signedIn');
const signedOut = document.getElementById('signedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        //signed in
        signedIn.hidden = false;
        signedOut.hidden = true;
        userDetails.innerHTML = '<h3>Hello ${user.displayName}!</h3>'
    } else {
        //not signed in
        signedIn.hidden = true;
        signedOut.hidden = false;
        userDetails.innerHTML = '';
    }
})

// firebase example
const db = firebase.firestore();

const createTask = document.getElementById('createTask');
const taskList = document.getElementById('taskList');

let taskRef;
let unsubscribe;

auth.onAuthStateChanged(user => {
    taskRef = db.collection('tasks')
    createTask.onclick = () => {
        const {serverTimestamp} = firebase.firestore.FieldValue;
        thingsRef.add({
            uid: user.uid,
            createdAt: serverTimestamp(),
        })
    }
})