import { initializeApp } from "firebase/app";
import { getFirestore, doc, runTransaction} from "firebase/firestore";

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

export const countersDocId = "ypyZjn0u4EHWrweBKWbo";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const countersDocRef = doc(db, 'counters', countersDocId);

// **FUNÇÕES DE SERVIÇO ATUALIZADAS COM TRANSAÇÕES**

export const incrementView = async () => {
    try {
        await runTransaction(db, async (transaction) => {
            const counterDoc = await transaction.get(countersDocRef);
            if (!counterDoc.exists()) {
                throw "O documento de contadores não existe!";
            }
            // Lê o valor atual e soma 1
            const newViews = (counterDoc.data().views || 0) + 1;
            // Envia o objeto completo para atualização
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
            // Lê o valor atual e soma 1
            const newLikes = (counterDoc.data().likes || 0) + 1;
            // Envia o objeto completo para atualização
            transaction.update(countersDocRef, { likes: newLikes });
        });
        return true;
    } catch (error) {
        console.error("Firebase Transaction Error: Could not increment like.", error);
        return false;
    }
};

export { countersDocRef };