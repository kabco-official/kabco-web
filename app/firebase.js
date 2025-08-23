
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "kabco-5b721.firebaseapp.com",
  projectId: "kabco-5b721",
  storageBucket: "kabco-5b721.firebasestorage.app",
  messagingSenderId: "140632859448",
  appId: "1:140632859448:web:9c9b652f2286913dc597cd"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };