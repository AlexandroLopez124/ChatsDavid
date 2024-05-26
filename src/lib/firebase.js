// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLFNp2MUVaMiUloZWsxUvEMr0G5-RNdCo",
  authDomain: "reactchatdavid.firebaseapp.com",
  projectId: "reactchatdavid",
  storageBucket: "reactchatdavid.appspot.com",
  messagingSenderId: "821069324568",
  appId: "1:821069324568:web:319c11eac719edac93fe6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()