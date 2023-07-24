import React from "react";
import { Button, Typography } from "antd";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const ResultPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  return (
    <div style={{ padding: "24px" }}>
      <Title>ResultPage</Title>
      {currentUser.role === "teacher" ? (
        <div
          style={{
            border: "solid 1px #f2f2f2",
            padding: "16px",
            backgroundColor: "#000",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Hiển thị kết quả ở màn hình Giáo viên
        </div>
      ) : (
        <div
          style={{
            border: "solid 1px #f2f2f2",
            padding: "16px",
            backgroundColor: "#000",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Hiển thị kết quả ở màn hình học sinh
        </div>
      )}

      <Button
        type="primary"
        style={{ marginTop: "15px" }}
        onClick={() => navigate("/")}
      >
        Quay về trang chủ
      </Button>
    </div>
  );
};

export default ResultPage;
