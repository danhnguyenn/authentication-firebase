import { useContext, useEffect } from "react";
import { ClassroomContext } from "../context/ClassroomContext";
import { onSnapshot } from "firebase/firestore";
import { classroomCollectionRef } from "../lib/firestore.collection";

const useClassroom = () => {
  const { classrooms, setClassrooms } = useContext(ClassroomContext);

  useEffect(() => {
    const unsubscribe = onSnapshot(classroomCollectionRef, (snapshot) => {
      setClassrooms(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return { classrooms };
};

export default useClassroom;
