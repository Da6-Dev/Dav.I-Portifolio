import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    // Usa a variável para o fundo principal da página
    <section className="bg-[var(--color-bg)] min-h-screen flex items-center justify-center text-center overflow-hidden perspective-1000">
      
      <div className="transition-transform duration-500 ease-out hover:transform hover:-rotate-y-3 hover:-rotate-x-1">
        {/* Usa a variável para o fundo do card e a borda */}
        <div className="bg-[var(--color-bg-card)] backdrop-blur-md p-8 md:p-10 rounded-2xl border border-[var(--color-border)] shadow-2xl">
          <div className="opacity-0 animate-fade-in-up">
            <img 
              src="img-perfil.jpg" // SUBSTITUA PELA SUA FOTO
              alt="Foto de Perfil"
              // Usa a variável para a cor da borda da imagem
              // AQUI ESTÁ A CORREÇÃO: adicionado "object-cover"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-[var(--color-border-strong)] shadow-lg object-cover"
            />
            {/* Usa a variável para a cor do texto principal */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-text-primary)] mb-4">
              Davi Passos
            </h1>
            
            <TypeAnimation
              sequence={[
                'Desenvolvedor Web', 2000,
                'Entusiasta de UI/UX', 2000,
                'Desenvolvedor Unity', 2000,
                'Transformando Ideias em Realidade', 2000,
              ]}
              wrapper="p"
              speed={50}
              // Usa as variáveis para as cores do gradiente
              className="text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] text-transparent bg-clip-text h-16 md:h-auto"
              repeat={Infinity}
            />
            
            {/* Usa a variável para a cor do texto secundário */}
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8 mt-4 md:mt-0">
              Sou um desenvolvedor apaixonado por criar experiências digitais envolventes e funcionais. Vamos construir algo incrível juntos!
            </p>
            <Link 
              to="/projects"
              // Usa as variáveis para o botão de ação
              className="inline-block bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-3 px-8 rounded-full text-lg hover:bg-[var(--color-accent-hover)] transition-transform transform hover:scale-105 shadow-lg"
            >
              Veja meus projetos
              <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;