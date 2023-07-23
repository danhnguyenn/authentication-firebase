import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Typography } from "antd";
import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import useAuth from "../../hooks/useAuth";
import { classroomCollectionRef } from "../../lib/firestore.collection";
const { Title } = Typography;

const ClassPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(classroomCollectionRef, (snapshot) => {
      setClassrooms(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const renderConditional = () => {
    if (classrooms?.length === 0) {
      return (
        <div style={{ padding: "15px 0", fontSize: "18px" }}>
          Đang chờ người chơi tham gia
        </div>
      );
    } else if (classrooms) {
      return classrooms.map((item, index) => (
        <Card
          key={index}
          title={
            <Title level={3}>
              {auth?.currentUser?.displayName || auth?.currentUser?.email}
            </Title>
          }
          extra={<Avatar size={"default"} icon={<UserOutlined />} />}
          style={{ width: 300, padding: "10px" }}
          className="custom-card"
        />
      ));
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Classroom Page</h1>

      {currentUser.role === "teacher" && (
        <Button
          type={classrooms.length === 0 ? "default" : "primary"}
          style={{ marginBottom: "12px", marginTop: "12px" }}
        >
          Bắt đầu
        </Button>
      )}

      {renderConditional()}

      <br />
      <Button onClick={() => navigate("/")} type="default">
        Trở lại màn hình chính
      </Button>
    </div>
  );
};

export default ClassPage;
