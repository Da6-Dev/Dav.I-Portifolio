// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageIcon } from '@heroicons/react/24/outline';

// Lista de idiomas disponíveis
const languages = ['pt', 'en'];

function LanguageSwitcher({ isExpanded }) {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        const currentLanguageIndex = languages.indexOf(i18n.language);
        const nextLanguageIndex = (currentLanguageIndex + 1) % languages.length;
        const nextLanguage = languages[nextLanguageIndex];
        i18n.changeLanguage(nextLanguage);
    };

    // Estilo para os botões quando a navbar está expandida
    const langButtonClasses = (lang) => `
    font-bold text-sm px-3 py-1 rounded-md transition-colors
    ${i18n.language === lang
            ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)]'
            : 'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)]'
        }
  `;

    // Renderização condicional: botões ou ícone
    if (isExpanded) {
        return (
            <div className="flex items-center gap-1 p-1 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg">
                <button onClick={() => i18n.changeLanguage('pt')} className={langButtonClasses('pt')}>
                    PT
                </button>
                <button onClick={() => i18n.changeLanguage('en')} className={langButtonClasses('en')}>
                    EN
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={changeLanguage}
            className="relative w-16 h-8 flex items-center justify-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full p-1 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        >
            <LanguageIcon className="w-5 h-5" />
        </button>
    );
}

export default LanguageSwitcher;