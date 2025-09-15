// src/pages/home.jsx
import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

function Home() {
  // 1. Pegamos o objeto `i18n` para saber o idioma atual
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="max-w-4xl w-full">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <img
            src="img-perfil.jpg" // Sua foto de perfil
            alt="Foto de Perfil"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-[var(--color-border-strong)] shadow-lg object-cover"
          />
        </div>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-text-primary)] mb-3">
            {t('home.greeting')}
          </h1>
        </div>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <TypeAnimation
            // 2. Adicionamos a `key` com o idioma atual.
            // Isso força a recriação do componente quando o idioma muda.
            key={currentLanguage}
            sequence={[
              t('home.subheading1'), 2000,
              t('home.subheading2'), 2000,
              t('home.subheading3'), 2000,
              t('home.subheading4'), 2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-xl md:text-2xl font-medium text-[var(--color-text-secondary)] mb-6 h-8"
            repeat={Infinity}
          />
        </div>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            {t('home.description')}
          </p>
        </div>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <Link
            to="/projects"
            className="inline-flex items-center bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-3 px-8 rounded-full text-lg hover:bg-[var(--color-accent-hover)] transition-transform transform hover:scale-105 shadow-lg"
          >
            {t('home.button')}
            <ArrowRightIcon className="inline-block h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;