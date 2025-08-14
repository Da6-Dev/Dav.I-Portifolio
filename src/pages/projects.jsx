// src/pages/projects.jsx
import React from 'react';
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/solid';

// Dados de exemplo dos projetos (use suas próprias imagens e links)
const projectsData = [
  {
    id: 1,
    title: "Roomflow",
    description: "Um sistema de reservas para pousadas, com interface intuitiva e funcionalidades de gerenciamento de quartos, clientes e pagamentos. Desenvolvido com foco em usabilidade e design moderno.",
    imageUrl: "../public/roomflow.png",
    codeUrl: "https://github.com/Da6-Dev/RoomFlow",
    tags: ["MaterialUI", "PHP", "JavaScript", "MySQL"]
  },
  {
    id: 2,
    title: "Ringo Fighter",
    description: "Um jogo desenvolvido para a BabyJam de 2025 da DEV-U.",
    imageUrl: "../public/Ringo.png",
    liveUrl: "https://mateus475.itch.io/ringo-fighter-devu",
    tags: ["Unity", "C#"]
  },
  {
    id: 3,
    title: "Shattered Mine",
    description: "Jogo desenvolvido para Game Dev Toolkit 2025, onde os jogadores exploram uma mina misteriosa, enfrentando desafios para descobrir seus segredos.  ",
    imageUrl: "../public/ShatteredMine.png",
    liveUrl: "https://heartyxpunk.itch.io/shattered-mine",
    tags: ["Unity", "C#"]
  }
];

const ProjectCard = ({ project, index }) => (
  <div
    className="opacity-0 animate-fade-in-up flex flex-col bg-[var(--color-bg-card)] backdrop-blur-sm border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">{project.title}</h3>
      <p className="text-[var(--color-text-secondary)] text-sm mb-4 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 my-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] text-xs px-3 py-1 rounded-full border border-[var(--color-border)]">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-[var(--color-border)]">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-accent)] hover:opacity-80 transition-opacity font-semibold">
          <EyeIcon className="h-5 w-5" /> Ver Ao Vivo
        </a>
        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
          <CodeBracketIcon className="h-5 w-5" /> Código
        </a>
      </div>
    </div>
  </div>
);

function Projects() {
  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="opacity-0 animate-fade-in-up text-4xl font-bold text-[var(--color-text-primary)]">Meus Projetos</h2>
          <p className="opacity-0 animate-fade-in-up text-[var(--color-text-secondary)] mt-2" style={{ animationDelay: '150ms' }}>
            Uma coleção de trabalhos que demonstram minhas habilidades e paixão pelo desenvolvimento.
          </p>
        </div>
        
        {projectsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projectsData.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
            </div>
        ) : (
          <div className="text-center mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <p className="text-[var(--color-text-secondary)] text-lg">
              Nenhum projeto para exibir no momento. Estou trabalhando em coisas novas!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;