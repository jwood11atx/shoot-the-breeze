import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAlgX-gBhy3DmWTtPzw91IRWeMneUALOz8",
  authDomain: "shoot-the-breeze-f491b.firebaseapp.com",
  databaseURL: "https://shoot-the-breeze-f491b.firebaseio.com",
  storageBucket: "shoot-the-breeze-f491b.appspot.com",
  messagingSenderId: "527483252809"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database().ref('messages');















//-----------------------------------------------------------------------------
// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyAlgX-gBhy3DmWTtPzw91IRWeMneUALOz8",
//   authDomain: "shoot-the-breeze-f491b.firebaseapp.com",
//   databaseURL: "https://shoot-the-breeze-f491b.firebaseio.com",
//   storageBucket: "shoot-the-breeze-f491b.appspot.com",
//   messagingSenderId: "527483252809"
// };
// firebase.initializeApp(config);
//
// const application = document.getElementById("application");
// const dbRef = firebase.database().ref().child("text");
// dbRef.on("value", snap => application.innerText = snap.val());
