import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Add this line to resolve 'getAuth'

const firebaseConfig = {
  apiKey: "AIzaSyD-iITdPF8hTeuW9S6kESpLqpeJ90TUaf0",
  authDomain: "nops-login.firebaseapp.com",
  projectId: "nops-login",
  storageBucket: "nops-login.appspot.com",
  messagingSenderId: "914239112461",
  appId: "1:914239112461:web:4cb2801adb800549969c44",
  measurementId: "G-5DECRZ0H67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
