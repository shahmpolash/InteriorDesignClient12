// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrE1e3Wg8_Lqqg_TPewWABl96ugQgg1Z4",
  authDomain: "interiordesignclone.firebaseapp.com",
  projectId: "interiordesignclone",
  storageBucket: "interiordesignclone.appspot.com",
  messagingSenderId: "398213440454",
  appId: "1:398213440454:web:c42fe99d2b4e384f6388c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;