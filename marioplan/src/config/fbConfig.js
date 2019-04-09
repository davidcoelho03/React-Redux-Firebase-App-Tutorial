import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCOAg7-2S6bkkRHcZTQN3vPv0LTW8M58z8",
    authDomain: "net-ninja-marioplan-b4596.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-b4596.firebaseio.com",
    projectId: "net-ninja-marioplan-b4596",
    storageBucket: "net-ninja-marioplan-b4596.appspot.com",
    messagingSenderId: "771915527751"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;