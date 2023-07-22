import React from "react";
import { handleLogout } from "../../utils/func";
import { Button, Space, Typography } from "antd";
import { auth } from "../../config/firebase";

const { Title } = Typography;

const StudentHomePage = () => {
  return (
    <div>
      <Space
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Title>Student Page</Title>
        <Button type="default" onClick={handleLogout}>
          Sign out
        </Button>
      </Space>
      <Title>
        Hello {auth?.currentUser?.displayName || auth?.currentUser?.email}
      </Title>
    </div>
  );
};

export default StudentHomePage;
