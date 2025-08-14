// MUDANÇA 1: Importamos o 'useContext' do React e o 'ThemeContext' do nosso arquivo
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function ThemeToggle() {
    // MUDANÇA 2: Usamos o useContext diretamente aqui
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="relative w-16 h-8 flex items-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full p-1"
        >
            <div className="absolute inset-0 flex justify-between items-center px-2">
                <SunIcon className="w-5 h-5 text-yellow-500" />
                <MoonIcon className="w-5 h-5 text-slate-300" />
            </div>
            <div
                className={`absolute bg-[var(--color-bg-input)] border border-[var(--color-border-strong)] w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${theme === 'light' ? 'translate-x-0' : 'translate-x-8'
                    }`}
            ></div>
        </button>
    );
}

export default ThemeToggle;