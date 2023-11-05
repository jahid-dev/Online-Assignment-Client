// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC0weh7T3z-4K0odLkJrctfB2I-zGU3GSs",
  authDomain: "online-assignment-client.firebaseapp.com",
  projectId: "online-assignment-client",
  storageBucket: "online-assignment-client.appspot.com",
  messagingSenderId: "233641695704",
  appId: "1:233641695704:web:46ed860e35af2bbf63baad"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;