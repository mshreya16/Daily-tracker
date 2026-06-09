import app from "./firebaseConfig";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";

const auth = getAuth(app);

const provider =
  new GoogleAuthProvider();

export const login = () =>
  signInWithPopup(
    auth,
    provider
  );

export const logout = () =>
  signOut(auth);

export { auth };