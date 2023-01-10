import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8urNP1OfLvwq-RgLoPXqwj_R1HhAjY50",
    authDomain: "react-board-b0c4a.firebaseapp.com",
    projectId: "react-board-b0c4a",
    storageBucket: "react-board-b0c4a.appspot.com",
    messagingSenderId: "1033819941116",
    appId: "1:1033819941116:web:d4a2b9dd378e3ffb62cf79",
    measurementId: "G-6HKRKWCQRX"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);