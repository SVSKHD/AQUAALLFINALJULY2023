import firebase_app from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

const auth = getAuth(firebase_app);
const handleSignin = async (email, password) => {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};
const handleSignup = async (email, password) => {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

const firebaseOperations = () => {
  return {
    handleSignin,
    handleSignup,
  };
};
export default firebaseOperations;
