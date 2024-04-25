// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7vCAs_FCEVwFejk7kGSG52cg5OHdXKBw",
  authDomain: "sp-tourists.firebaseapp.com",
  projectId: "sp-tourists",
  storageBucket: "sp-tourists.appspot.com",
  messagingSenderId: "1083649415859",
  appId: "1:1083649415859:web:4fa1016e7d9c288aac2ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
