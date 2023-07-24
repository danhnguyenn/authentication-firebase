import { Button, Typography } from "antd";
import React, { useEffect } from "react";
import Classroom from "../components/Classroom";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useSession from "../hooks/useSession";
import useCountdown from "../hooks/useCountdown";
const { Title } = Typography;

const QuestionPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { handleFinish, sessionData, activecountdown } = useSession();
  const { countdown } = useCountdown(5);

  useEffect(() => {
    if (!sessionData?.started) {
      navigate("/result");
    }
  }, [sessionData, navigate]);

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Title>Question Page</Title>
        {currentUser.role === "teacher" && (
          <Button onClick={handleFinish}>Kết thúc</Button>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Classroom />
        {!activecountdown && (
          <div
            style={{
              background: "#f2f2f2",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
            }}
          >
            {countdown}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
