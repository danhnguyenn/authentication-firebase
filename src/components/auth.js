import { Button, Input, Space } from "antd";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { GoogleOutlined } from "@ant-design/icons";
export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  console.log(auth?.currentUser?.phoneNumber);
  console.log(auth?.currentUser?.photoURL);

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <>
      <Space direction="vertical" className="form">
        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
      </Space>
      <Space className="action">
        <Button type="primary" onClick={handleSignIn} block>
          Sign In with Email
        </Button>

        <Button
          type="primary"
          icon={<GoogleOutlined />}
          onClick={handleSignInWithGoogle}
          block
        >
          Sign In with Google
        </Button>
        <Button type="primary" onClick={handleLogout} block>
          Logout
        </Button>
      </Space>
    </>
  );
};
