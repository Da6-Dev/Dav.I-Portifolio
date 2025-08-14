// src/context/ThemeProvider.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
    // Tenta obter o tema do localStorage ou usa 'dark' como padrão
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'dark';
    });

    // Efeito que é executado sempre que o 'theme' muda
    useEffect(() => {
        const root = window.document.documentElement;

        // Remove a classe antiga e adiciona a nova
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);

        // Salva a preferência do usuário no localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Função para alternar o tema
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // useMemo para evitar recriações desnecessárias do objeto de valor
    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}