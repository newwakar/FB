// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVItin8lFq7XN7II55Fp4_GD2T_ec9gXA",
  authDomain: "wakarfb-84dfb.firebaseapp.com",
  projectId: "wakarfb-84dfb",
  storageBucket: "wakarfb-84dfb.appspot.com",
  messagingSenderId: "39272730214",
  appId: "1:39272730214:web:2c8da0349c056b538a27a7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
