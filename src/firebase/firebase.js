// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrd0FQ832D_XlmvPzBwLIvG3WTJY3JqDU",
  authDomain: "empw-jueves.firebaseapp.com",
  projectId: "empw-jueves",
  storageBucket: "empw-jueves.appspot.com",
  messagingSenderId: "951288893987",
  appId: "1:951288893987:web:aebea3937d52b5b2ef9796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}