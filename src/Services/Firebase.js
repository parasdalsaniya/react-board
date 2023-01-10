import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

export const getAllCards = async () => {
    const result = [];
    const querySnapshot = await getDocs(collection(db, "cards"));
    querySnapshot.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
    });
    return result;
}

export const addNewCard = async (data) => {
    const docRef = await addDoc(collection(db, "cards"), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
}

export const editCard = async (uid, data) => {
    const docRef = doc(db, "cards", uid);
    await updateDoc(docRef, data);
}

export const deleteCard = async (uid) => {
    await deleteDoc(doc(db, "cards", uid));
}