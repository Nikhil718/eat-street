// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-J8UeuMUjcBLZNm0tgqUdxNV9C_gWyGU",
  authDomain: "react-auth-4a835.firebaseapp.com",
  projectId: "react-auth-4a835",
  storageBucket: "react-auth-4a835.appspot.com",
  messagingSenderId: "943427561099",
  appId: "1:943427561099:web:fd48085dd0a5dbbc2e168e",
  measurementId: "G-M2ZF1FSJ0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
