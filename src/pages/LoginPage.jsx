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
  const handleLogin = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="login">
      <Space className="container">
        <img src={Logo} alt="" />
        <Title>Đăng nhập</Title>
        <Form onFinish={handleLogin} name="login">
          <Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" size="large" />
          </Item>
          <Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" placeholder="Mật khẩu" size="large" />
          </Item>
          <Link to="" className="nav-link">
            Quên mật khẩu
          </Link>
          <Button
            htmlType="submit"
            block
            style={{
              background: "#f80",
              color: "#fff",
            }}
            size="large"
          >
            Đăng nhập
          </Button>
        </Form>

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
