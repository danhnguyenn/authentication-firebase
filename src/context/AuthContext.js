import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const storedUser = localStorage.getItem("currentUser");
  const navigate = useNavigate();

  useEffect(() => {
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, [storedUser]);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
