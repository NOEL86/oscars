import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAtg0NSuBaqJr6ln-I_uB12V01NzraTgr4",
  authDomain: "oscars-4eadc.firebaseapp.com",
  databaseURL: "https://oscars-4eadc.firebaseio.com",
  projectId: "oscars-4eadc",
  storageBucket: "oscars-4eadc.appspot.com",
  messagingSenderId: "721559200848",
  appId: "1:721559200848:web:d45bd89f88514c1421dd55",
  measurementId: "G-9JP6LL5F7H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
