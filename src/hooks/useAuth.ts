import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { firebaseAuth } from "../libs/firebase";
import { getLoginUser } from "../services/auth.service";

export function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubcribe = firebaseAuth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser && !user) {
        const user = await getLoginUser(firebaseUser.uid);
        console.log(user);
        setUser(user);
      } else {
        if (!firebaseUser) {
          navigate("/login");
        }
      }
    });

    return () => unsubcribe();
  }, [navigate, setUser, user]);

  return user;
}
