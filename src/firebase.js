import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVCrbULWDRVH7d8Ug6hGWWQOVbb5ofzeQ",
  authDomain: "airline-6c9a5.firebaseapp.com",
  projectId: "airline-6c9a5",
  storageBucket: "airline-6c9a5.appspot.com",
  messagingSenderId: "194465479543",
  appId: "1:194465479543:web:6acf650f91dc61b3eebf72",
  measurementId: "G-KGV6PGRJ5K",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
