import { axios } from "../libs/axios";
import { signInWithPopup } from "firebase/auth";
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
  const { data: user } = await axios.post<User>("/auth/signup", {
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
  const { data: user } = await axios.get<User>("/auth/login", {
    params: { uid },
  });
  return user;

  // SAME AS LINES ABOVE WITHOUT RENAMING/DESTRUCTURING

  //   const response = await axios.get<User>("/auth/login", { params: { uid } });
  //   return response.data
}
