import { GoogleOutlined, FacebookFilled, AppleFilled } from "@ant-design/icons";
import { Button, Divider, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { handleSignInWithGoogle } from "../utils/func";
const { Title, Paragraph } = Typography;

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      throw new Error(err);
    }
  };

  console.log(auth.currentUser);

  return (
    <div className="login">
      <Space className="container">
        <img src={Logo} alt="" />
        <Title>Đăng ký</Title>
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
        <Button
          block
          style={{
            background: "#f80",
            color: "#fff",
          }}
          size="large"
          onClick={handleSignUp}
        >
          Đăng ký
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
          Chưa có tài khoản <Link to="">Đăng ký tài khoản mới</Link>
        </Paragraph>
      </Space>
    </div>
  );
};

export default RegisterPage;
