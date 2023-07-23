import React from "react";
import { handleLogout } from "../../utils/func";
import { Button, Space, Typography } from "antd";
import { auth, db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import useAuth from "../../hooks/useAuth";

const { Title } = Typography;

const StudentHomePage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleJoinClass = () => {
    const classroomRef = collection(db, "classrooms");
    addDoc(classroomRef, { email: currentUser.email })
      .then((res) => {
        navigate("/classroom");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
      <Button type="primary" onClick={handleJoinClass}>
        Tham gia
      </Button>
    </div>
  );
};

export default StudentHomePage;
