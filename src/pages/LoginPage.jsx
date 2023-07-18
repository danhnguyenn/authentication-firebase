import { GoogleOutlined, FacebookFilled, AppleFilled } from "@ant-design/icons";
import { Button, Divider, Input, Space, Typography, Form } from "antd";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/Auth";
import { handleSignInWithGoogle } from "../utils/func";
const { Title, Paragraph } = Typography;
const { Item } = Form;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      throw new Error(err);
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
      <Space className="container">
        <img src={Logo} alt="" />
        <Title>Đăng nhập</Title>
        <Input
          placeholder="Email"
          size="large"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Mật khẩu"
          size="large"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="" className="nav-link">
          Quên mật khẩu
        </Link>
        <Button
          onClick={handleLogin}
          block
          style={{
            background: "#f80",
            color: "#fff",
          }}
          size="large"
        >
          Đăng nhập
        </Button>
        <Space
          style={{
            width: "100%",
            whiteSpace: "nowrap",
          }}
        >
          <Divider />
          Hoặc đăng nhập bằng
          <Divider />
        </Space>
        <Space style={{ width: "100%" }}>
          <Button type="default" icon={<FacebookFilled />}>
            Facebook
          </Button>
          <Button
            type="default"
            icon={<GoogleOutlined />}
            onClick={handleSignInWithGoogle}
          >
            Google
          </Button>
          <Button type="default" icon={<AppleFilled />}>
            Apple ID
          </Button>
        </Space>
        <Paragraph
          style={{
            textAlign: "center",
            paddingTop: "15px",
          }}
        >
          Chưa có tài khoản <Link to="/register">Đăng ký tài khoản mới</Link>
        </Paragraph>
      </Space>
    </div>
  );
};

export default LoginPage;
