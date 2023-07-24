/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useClassroom from "../hooks/useClassroom";
import Classroom from "../components/Classroom";
import { Button, Typography } from "antd";
import useSession from "../hooks/useSession";

const { Paragraph } = Typography;

const ClassPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { classrooms } = useClassroom();
  const { sessionData, handleStart } = useSession();

  useEffect(() => {
    if (sessionData && sessionData?.started) {
      navigate("/question");
    } else {
      navigate("/classroom");
    }
  }, [sessionData]);

  return (
    <div style={{ padding: "24px" }}>
      <h1>Classroom Page</h1>

      {currentUser.role === "teacher" && (
        <Button
          type={classrooms.length === 0 ? "default" : "primary"}
          style={{ marginBottom: "12px", marginTop: "12px" }}
          onClick={handleStart}
          disabled={classrooms.length === 0}
        >
          Bắt đầu
        </Button>
      )}

      <Paragraph
        style={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Có {classrooms.length} người tham gia
      </Paragraph>

      {!sessionData?.started && currentUser.role === "student" && (
        <Paragraph>Đang chờ giáo viên bắt đầu</Paragraph>
      )}

      <Classroom />
    </div>
  );
};

export default ClassPage;
