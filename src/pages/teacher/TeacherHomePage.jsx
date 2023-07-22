import { Button, Space, Typography } from "antd";
import React from "react";
import { handleLogout } from "../../utils/func";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const TeacherHomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "16px" }}>
      <Space
        align="center"
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Title>Teacher Page</Title>
        <Button type="default" onClick={handleLogout}>
          Sign out
        </Button>
      </Space>

      <Title>
        Hello {auth?.currentUser?.displayName || auth?.currentUser?.email}
      </Title>
      <Button onClick={() => navigate("/classroom", { replace: true })}>
        Classroom
      </Button>
    </div>
  );
};

export default TeacherHomePage;
