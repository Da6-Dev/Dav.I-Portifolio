// src/pages/home.jsx
import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="max-w-4xl w-full">

        {/* Animação de entrada para a foto */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <img
            src="img-perfil.jpg" // Mantenha sua foto
            alt="Foto de Perfil"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-[var(--color-border-strong)] shadow-lg object-cover"
          />
        </div>

        {/* Animação de entrada para o nome */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-text-primary)] mb-3">
            Davi Passos
          </h1>
        </div>

        {/* Animação para o subtítulo dinâmico */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
           <TypeAnimation
              sequence={[
                'Desenvolvedor Web', 2000,
                'Entusiasta de UI/UX', 2000,
                'Desenvolvedor Unity', 2000,
                'Transformando Ideias em Realidade', 2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-xl md:text-2xl font-medium text-[var(--color-text-secondary)] mb-6 h-8"
              repeat={Infinity}
            />
        </div>

        {/* Animação para a descrição */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Sou um desenvolvedor apaixonado por criar experiências digitais envolventes e funcionais. Vamos construir algo incrível juntos!
          </p>
        </div>

        {/* Animação para o botão */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <Link
            to="/projects"
            className="inline-flex items-center bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-3 px-8 rounded-full text-lg hover:bg-[var(--color-accent-hover)] transition-transform transform hover:scale-105 shadow-lg"
          >
            Veja meus projetos
            <ArrowRightIcon className="inline-block h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Home;