import firebase from 'firebase'

let config = {
  apiKey: "AIzaSyB5m5iZthyRwxJqgKu5qEimCDAaOOiIgD0",
  authDomain: "weel-messenger-20610.firebaseapp.com",
  databaseURL: "https://weel-messenger-20610.firebaseio.com",
  projectId: "weel-messenger-20610",
  storageBucket: "weel-messenger-20610.appspot.com",
  messagingSenderId: "324596156690"
};
let init = firebase.initializeApp(config);
export const timestamp = firebase.database.ServerValue.TIMESTAMP
export const db = init.database()
export const auth = init.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
