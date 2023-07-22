import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ClassPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "24px" }}>
      <h1>Classroom Page</h1>
      <Button onClick={() => navigate("/")} type="default">
        Trở lại màn hình chính
      </Button>
    </div>
  );
};

export default ClassPage;
