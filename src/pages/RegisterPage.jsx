import { GoogleOutlined, FacebookFilled, AppleFilled } from "@ant-design/icons";
import { Button, Divider, Input, Space, Typography, Form } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { handleSignInWithGoogle } from "../utils/func";
const { Title, Paragraph } = Typography;
const { Item } = Form;

const RegisterPage = () => {
  const handleSignUp = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="login">
      <Space className="container">
        <img src={Logo} alt="" />
        <Title>Đăng ký</Title>
        <Form onFinish={handleSignUp} name="signup">
          <Item
            name="email"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="Email" size="large" />
          </Item>
          <Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" placeholder="Mật khẩu" size="large" />
          </Item>
          <Button
            htmlType="submit"
            block
            style={{
              background: "#f80",
              color: "#fff",
            }}
            size="large"
          >
            Đăng ký
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
          Chưa có tài khoản <Link to="">Đăng ký tài khoản mới</Link>
        </Paragraph>
      </Space>
    </div>
  );
};

export default RegisterPage;
