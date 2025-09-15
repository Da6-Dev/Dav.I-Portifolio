import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB-QkWHhcbJQVL6ohdmqC7RqNC2O5VzVRM",
    authDomain: "meu-portfolio-stats.firebaseapp.com",
    projectId: "meu-portfolio-stats",
    storageBucket: "meu-portfolio-stats.firebasestorage.app",
    messagingSenderId: "73774267213",
    appId: "1:73774267213:web:f88f55d5838fb9b90c1504",
    measurementId: "G-01LX7HBSLG"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const countersDocId = "ypyZjn0u4EHWrweBKWbo";