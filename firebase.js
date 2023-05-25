import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBmH5cMvXv1RpOipB5LO1gqLpyie0C08CQ",
  authDomain: "notes-app-11a8f.firebaseapp.com",
  projectId: "notes-app-11a8f",
  storageBucket: "notes-app-11a8f.appspot.com",
  messagingSenderId: "532818962896",
  appId: "1:532818962896:web:05d6a59bc47224d5c271d5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")
