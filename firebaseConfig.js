// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4jXXuliyw-iD-ecKtU8dyJuzBql2lF-Q",
  authDomain: "fir-rtc-8bf2b.firebaseapp.com",
  projectId: "fir-rtc-8bf2b",
  storageBucket: "fir-rtc-8bf2b.appspot.com",
  messagingSenderId: "982073111773",
  appId: "1:982073111773:web:e1044fa135e172a681d734"
};
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const database = getDatabase(app);
  export const auth = getAuth();

  
