import { createContext, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState({});

  return (
    <SessionContext.Provider
      value={{
        sessionData,
        setSessionData,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
