import { collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const classroomCollectionRef = collection(db, "classrooms");
