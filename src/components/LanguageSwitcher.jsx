// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const langButtonClasses = (lang) => `
    font-bold text-sm px-3 py-1 rounded-md transition-colors
    ${i18n.language === lang
            ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)]'
            : 'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)]'
        }
    `;

    return (
        <div className="flex items-center gap-1 p-1 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg">
            <button onClick={() => changeLanguage('pt')} className={langButtonClasses('pt')}>
                PT
            </button>
            <button onClick={() => changeLanguage('en')} className={langButtonClasses('en')}>
                EN
            </button>
        </div>
    );
}

export default LanguageSwitcher;