import React from "react";
import useClassroom from "../hooks/useClassroom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Typography } from "antd";
import useAuth from "../hooks/useAuth";
const { Title } = Typography;

const Classroom = () => {
  const { classrooms } = useClassroom();
  const { currentUser } = useAuth();

  const renderConditional = () => {
    if (classrooms?.length === 0) {
      return (
        <div style={{ padding: "15px 0", fontSize: "18px" }}>
          {currentUser.role === "teacher"
            ? "Đang chờ người chơi tham gia"
            : "Đang chờ máy chủ khởi động"}
        </div>
      );
    } else if (classrooms) {
      return classrooms.map((item, index) => {
        const { data } = item;
        const { email } = data;
        return (
          <Card
            key={index}
            title={<Title level={3}>{email}</Title>}
            extra={<Avatar size={"default"} icon={<UserOutlined />} />}
            style={{ width: 300, padding: "10px" }}
            className="custom-card"
          />
        );
      });
    }
  };
  return <div>{renderConditional()}</div>;
};

export default Classroom;
