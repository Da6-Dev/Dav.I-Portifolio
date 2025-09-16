// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, runTransaction } from "firebase/firestore";

// As chaves agora são lidas de forma segura a partir das variáveis de ambiente
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Cole o ID do seu documento aqui (isto não é um segredo)
export const countersDocId = "ypyZjn0u4EHWrweBKWbo";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const countersDocRef = doc(db, 'counters', countersDocId);

// Funções de serviço (mantêm-se iguais)
export const incrementView = async () => {
    try {
        await runTransaction(db, async (transaction) => {
            const counterDoc = await transaction.get(countersDocRef);
            if (!counterDoc.exists()) {
                throw "O documento de contadores não existe!";
            }
            const newViews = (counterDoc.data().views || 0) + 1;
            transaction.update(countersDocRef, { views: newViews });
        });
        return true;
    } catch (error) {
        console.error("Firebase Transaction Error: Could not increment view.", error);
        return false;
    }
};

export const incrementLike = async () => {
    try {
        await runTransaction(db, async (transaction) => {
            const counterDoc = await transaction.get(countersDocRef);
            if (!counterDoc.exists()) {
                throw "O documento de contadores não existe!";
            }
            const newLikes = (counterDoc.data().likes || 0) + 1;
            transaction.update(countersDocRef, { likes: newLikes });
        });
        return true;
    } catch (error) {
        console.error("Firebase Transaction Error: Could not increment like.", error);
        return false;
    }
};

export { countersDocRef };