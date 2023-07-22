import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Auth";
import { auth, db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { getRoleString } from "../utils/func";

const useAuth = () => {
  const [userRole, setUserRole] = useState(null);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname;
  const navigate = useNavigate();

  const handleAuthStateChange = useCallback(
    async (user) => {
      if (user) {
        try {
          const userRef = collection(db, "users");
          const queryUser = query(userRef, where("email", "==", user.email));
          const querySnapshot = await getDocs(queryUser);

          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            const newData = {
              ...userData,
              role: getRoleString(userData.role),
            };
            localStorage.setItem("currentUser", JSON.stringify(newData));
            const storedUser = localStorage.getItem("currentUser");
            setCurrentUser(JSON.parse(storedUser));
            setUserRole(newData.role);
            if (from !== location.pathname) {
              navigate(from, { replace: true });
            }
          } else {
            console.log("User data not found in Firestore");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setCurrentUser(null);
      }
    },
    [from, navigate, setCurrentUser, location.pathname]
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChange);

    return () => unsubscribe;
  }, [handleAuthStateChange]);

  return { currentUser, userRole };
};

export default useAuth;
