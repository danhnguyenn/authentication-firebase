import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const StudentRoutes = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser.isTeach === false ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default StudentRoutes;
