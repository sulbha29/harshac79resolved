import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAizdrDeLIa6SY_37MVVp0SjqvoHbnU0NU",
  authDomain: "hrshabooksanta.firebaseapp.com",
  databaseURL: "https://hrshabooksanta.firebaseio.com",
  projectId: "hrshabooksanta",
  storageBucket: "hrshabooksanta.appspot.com",
  messagingSenderId: "960069947858",
  appId: "1:960069947858:web:4b042c3e2e3a650b71780b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();