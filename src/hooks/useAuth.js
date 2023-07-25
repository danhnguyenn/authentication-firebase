import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth, db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getRoleString } from "../utils/func";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [userRole, setUserRole] = useState(null);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuthStateChange = useCallback(
    async (user) => {
      console.log({ user });
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
            setUserRole(newData.role);
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
    [setCurrentUser, navigate]
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChange);

    return () => unsubscribe;
  }, [handleAuthStateChange]);

  return { currentUser, userRole };
};

export default useAuth;
