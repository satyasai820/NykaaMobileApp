// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import firebase from 'firebase/compat/app'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA2D9fKHO-rm2SIZwptOn6vE3u9SKvxdEo",
  authDomain: "nykaawebsite.firebaseapp.com",
  projectId: "nykaawebsite",
  storageBucket: "nykaawebsite.appspot.com",
  messagingSenderId: "886082312426",
  appId: "1:886082312426:web:cd8a4d9a241b1a43439f93"
};

// Initialize Firebase
// if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig)
// }
// export {firebase};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export {firebase}
