// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLfF1RlrGiC92MrS9uMbwkOSdgwiwFtaY",
  authDomain: "scissor-ce6e2.firebaseapp.com",
  projectId: "scissor-ce6e2",
  storageBucket: "scissor-ce6e2.appspot.com",
  messagingSenderId: "16932075327",
  appId: "1:16932075327:web:787344bb10f33f2cc9858a",
  measurementId: "G-FKTLK6MGLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics, app };