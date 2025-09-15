// src/components/Stats.jsx
import React, { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { countersDocRef } from '../firebase'; // Importa a referência direta
import { EyeIcon, HeartIcon } from '@heroicons/react/24/solid';

function Stats() {
    // Comece com null para sabermos que ainda não carregou
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(countersDocRef, (docSnap) => {
            if (docSnap.exists()) {
                setStats(docSnap.data());
            } else {
                console.error("Firebase Error: Counters document not found!");
                setStats({ views: '?', likes: '?' }); // Mostra um erro na UI
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="flex justify-center items-center gap-6 mt-12 text-[var(--color-text-secondary)]">
            <div className="flex items-center gap-2">
                <EyeIcon className="w-6 h-6" />
                {/* Mostra um '...' enquanto carrega */}
                <span className="font-semibold text-lg">{stats ? stats.views : '...'}</span>
            </div>
            <div className="flex items-center gap-2">
                <HeartIcon className="w-6 h-6 text-red-500" />
                <span className="font-semibold text-lg">{stats ? stats.likes : '...'}</span>
            </div>
        </div>
    );
}

export default Stats;