import { createContext, useState } from "react";

export const ClassroomContext = createContext();

export const ClassroomProvider = ({ children }) => {
  const [classrooms, setClassrooms] = useState([]);

  return (
    <ClassroomContext.Provider value={{ classrooms, setClassrooms }}>
      {children}
    </ClassroomContext.Provider>
  );
};
