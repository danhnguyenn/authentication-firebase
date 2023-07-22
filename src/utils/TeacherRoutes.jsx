import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const TeacherRoutes = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser?.isTeacher ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default TeacherRoutes;
