import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

export const handleSignInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    throw new Error(err);
  }
};

export const handleLogout = async () => {
  try {
    await signOut(auth);
    localStorage.clear();
  } catch (err) {
    throw new Error(err);
  }
};

export const getRoleString = (role) => (role === 0 ? "teacher" : "student");
