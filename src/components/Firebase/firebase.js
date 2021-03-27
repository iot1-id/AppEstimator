import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHnLX7Ml2X8tQ80pyaCURDduq2QlmHcaY",
  authDomain: "estimator-dddc9.firebaseapp.com",
  projectId: "estimator-dddc9",
  storageBucket: "estimator-dddc9.appspot.com",
  messagingSenderId: "155101884892",
  appId: "1:155101884892:web:eda842136ad8894b615f19",
  measurementId: "G-N20GXVW95B",
});

var db = firebaseApp.firestore();
export { db };
