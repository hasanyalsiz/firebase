import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyD94S7gPVOO3rO_UfxNaIbDv7F1zSVZD_4",
  authDomain: "fir-f6789.firebaseapp.com",
  projectId: "fir-f6789",
  storageBucket: "fir-f6789.appspot.com",
  messagingSenderId: "727899445071",
  appId: "1:727899445071:web:6ee09b3616d8dc884e573a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};
export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export default app;
