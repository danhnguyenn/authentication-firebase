import { Button, Typography } from "antd";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../config/firebase";
import { AuthContext } from "../context/Auth";
import { Navigate } from "react-router-dom";
const { Title } = Typography;

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      throw new Error(err);
    }
  };
  return (
    <div>
      <Title>Home Page</Title>
      <Title>
        Welcome to {auth.currentUser.displayName || auth.currentUser.email}
      </Title>
      <Button type="default" onClick={handleLogout}>
        Sign out
      </Button>
    </div>
  );
};

export default HomePage;
