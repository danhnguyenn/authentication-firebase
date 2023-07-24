import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../context/SessionContext";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import useCountdown from "./useCountdown";

const useSession = () => {
  const navigate = useNavigate();
  const { sessionData, setSessionData } = useContext(SessionContext);
  const sessionDocRef = doc(db, "sessions", "TkzEoP8NV141qkiwOLVS");
  const { handleStartCountdown, countdown } = useCountdown();
  const [activecountdown, setActiveCountdown] = useState(false);

  const handleStart = async () => {
    try {
      await setDoc(sessionDocRef, { started: true });
    } catch (error) {
      console.error("Error setting document:", error);
    }
  };

  const handleFinish = async () => {
    try {
      await updateDoc(sessionDocRef, { started: false })
        .then((res) => {
          handleStartCountdown();
          setActiveCountdown(true);
          setSessionData(res);
        })
        .catch((error) => {
          console.error("Error updating document:", error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(sessionDocRef, (snapshot) => {
      const data = snapshot.data();
      setSessionData(data);
    });

    return () => unsubscribe();
  }, [sessionDocRef, setSessionData]);
  return { sessionData, handleStart, handleFinish, activecountdown };
};

export default useSession;
