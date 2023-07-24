import { Route, Routes } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StudentHomePage from "./pages/student/StudentHomePage";
import ClassPage from "./pages/ClassPage";

import TeacherHomePage from "./pages/teacher/TeacherHomePage";
import useAuth from "./hooks/useAuth";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";

function App() {
  const { userRole, currentUser } = useAuth();

  return (
    <>
      <Routes>
        {userRole === "teacher" && (
          <>
            <Route path="/" element={<TeacherHomePage />} />
          </>
        )}

        {userRole === "student" && (
          <>
            <Route path="/" element={<StudentHomePage />} />
          </>
        )}

        {currentUser && (
          <>
            <Route path="classroom" element={<ClassPage />} />
            <Route path="question" element={<QuestionPage />} />
            <Route path="result" element={<ResultPage />} />
          </>
        )}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
