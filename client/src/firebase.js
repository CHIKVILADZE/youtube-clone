import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fir-806f0.firebaseapp.com",
  projectId: "fir-806f0",
  storageBucket: "fir-806f0.appspot.com",
  messagingSenderId: "1067746254994",
  appId: "1:1067746254994:web:045858ba15f3e99648464b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
