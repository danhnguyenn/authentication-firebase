import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

export const handleSignInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    throw new Error(err);
  }
};
