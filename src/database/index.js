import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD42RQPn8KRuYqqHXMDoPeZ57uL5X5bdrw",
  authDomain: "stackr-1c9e5.firebaseapp.com",
  databaseURL: "https://stackr-1c9e5.firebaseio.com",
  storageBucket: "stackr-1c9e5.appspot.com",
  messagingSenderId: "947477585871"
};
firebase.initializeApp(config);

// Authentication
firebase.auth().signInAnonymously().catch(function(error) {
  // TODO specific action
  console.error(error.code, error.message);
});

export default firebase.database();
