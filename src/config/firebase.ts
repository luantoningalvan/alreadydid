import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCZFDXMTL7L-5skdmdhYJSSSwxf7dspY1M",
  authDomain: "alreadydid-63dde.firebaseapp.com",
  projectId: "alreadydid-63dde",
  storageBucket: "alreadydid-63dde.appspot.com",
  messagingSenderId: "435424410233",
  appId: "1:435424410233:web:024dde57f8d263cdd572a8",
});

export const auth = app.auth();
export const firestore = app.firestore();
