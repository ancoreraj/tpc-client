// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "thecompleteproject-cbacb.firebaseapp.com",
  projectId: "thecompleteproject-cbacb",
  storageBucket: "thecompleteproject-cbacb.appspot.com",
  messagingSenderId: "812375143817",
  appId: "1:812375143817:web:779925b211c8f18d019d58"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };