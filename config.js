import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBvlTqPRoJgvR8Ef2hh6_sNSEDzw_w2Elc",
    authDomain: "willy-c9942.firebaseapp.com",
    projectId: "willy-c9942",
    storageBucket: "willy-c9942.appspot.com",
    messagingSenderId: "233293381376",
    appId: "1:233293381376:web:12827dd7a95db48173bde5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();