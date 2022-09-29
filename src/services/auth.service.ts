import { expressAPI } from "../libs/axios";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth, googleAuthProvider } from "../libs/firebase";
import { queryClient } from "../libs/react-query";
import { User } from "../types/user.types";

export async function logout() {
  queryClient.clear();
  return await firebaseAuth.signOut();
}

export async function authenticateWithGoogle() {
  const authCredential = await signInWithPopup(
    firebaseAuth,
    googleAuthProvider
  );
  return authCredential.user;
}

export async function signUpWithGoogle() {
  const firebaseUser = await authenticateWithGoogle();
  const { data: user } = await expressAPI.post<User>("/auth/signup", {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    displayName: firebaseUser.displayName,
    photoURL: firebaseUser.photoURL,
  });
  return user;
}

export async function loginWithGoogle() {
  const firebaseUser = await authenticateWithGoogle();
  const user = await getLoginUser(firebaseUser.uid);
  return user;
}

export async function getLoginUser(uid: string) {
  const { data: user } = await expressAPI.get<User>("/auth/login", {
    params: { uid },
  });
  return user;
}

export async function signUp(email: string, password: string) {
  // created the firebaseUser with firebaseAuth
  const firebaseUser = await createUserWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );
  // make a request to the auth/signup route and create a new mongo user

  // return the user from the auth/signup api request
}

export async function logIn(email: string, password: string) {
  // login the firebaseUser with firebaseAuth
  const firebaseUser = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );
  // use the getLoginUser function to get the logged in mongodb user

  // return the user from the getLoginUser function
}

// FORM CALLS FOR FUNCTIONS on Signup and Login PAGE
