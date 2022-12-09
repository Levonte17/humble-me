// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
         signOut, 
         signInWithPopup, 
         GoogleAuthProvider
    } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMwxMW02soMWWF1EW1IXoqNlUtiHE6wCg",
  authDomain: "digitalinvestorshub.firebaseapp.com",
  projectId: "digitalinvestorshub",
  storageBucket: "digitalinvestorshub.appspot.com",
  messagingSenderId: "58550040092",
  appId: "1:58550040092:web:1430ede772e86c9510d1d9",
  measurementId: "G-BQCLD20082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

//CONFIG AUTH PROVIDER
const provider = new GoogleAuthProvider();

//LOGIN FUNCTION
function login() {
    return(
        signInWithPopup(auth, provider)
    )
};

//LOGOUT
function logout(){
    return(
        signOut(auth)
    )
};

export { auth, login, logout, analytics }