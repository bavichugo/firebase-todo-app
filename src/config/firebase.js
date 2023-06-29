import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWZBmBvHCmm5X_qHEinHUNVnU2gJPNd-g",
  authDomain: "fir-todo-final.firebaseapp.com",
  projectId: "fir-todo-final",
  storageBucket: "fir-todo-final.appspot.com",
  messagingSenderId: "21541668844",
  appId: "1:21541668844:web:83fa0e2c5e702195ec62c9",
  measurementId: "G-9G7E5X0DHJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();