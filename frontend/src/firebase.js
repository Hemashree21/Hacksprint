import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoxZRtX_6hrWhzXF9-JxrncjDveTEcYrE",
  authDomain: "chat-ea7e3.firebaseapp.com",
  projectId: "chat-ea7e3",
  storageBucket: "chat-ea7e3.appspot.com",
  messagingSenderId: "261478188410",
  appId: "1:261478188410:web:d5a755f5006655110c02c3",
  measurementId: "G-1J5FY3W560"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();