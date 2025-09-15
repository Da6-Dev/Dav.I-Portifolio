// src/components/Stats.jsx
import React, { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, countersDocId } from '../firebase';
import { EyeIcon, HeartIcon } from '@heroicons/react/24/solid';

function Stats() {
    const [stats, setStats] = useState({ views: 0, likes: 0 });

    useEffect(() => {
        const docRef = doc(db, 'counters', countersDocId);

        // onSnapshot é o listener em tempo real do Firebase
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setStats(docSnap.data());
            } else {
                console.log("Documento de contadores não encontrado!");
            }
        });

        // Limpa o listener quando o componente é desmontado
        return () => unsubscribe();
    }, []);

    return (
        <div className="flex justify-center items-center gap-6 mt-12 text-[var(--color-text-secondary)]">
            <div className="flex items-center gap-2">
                <EyeIcon className="w-6 h-6" />
                <span className="font-semibold text-lg">{stats.views}</span>
            </div>
            <div className="flex items-center gap-2">
                <HeartIcon className="w-6 h-6 text-red-500" />
                <span className="font-semibold text-lg">{stats.likes}</span>
            </div>
        </div>
    );
}

export default Stats;