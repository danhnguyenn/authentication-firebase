import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ClassroomProvider } from "./context/ClassroomContext";
import { SessionProvider } from "./context/SessionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ClassroomProvider>
          <SessionProvider>
            <App />
          </SessionProvider>
        </ClassroomProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
