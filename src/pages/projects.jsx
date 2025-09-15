// src/pages/projects.jsx
import React, { useState, useEffect } from 'react';
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/solid';
import { SiGithub } from 'react-icons/si';

// SEU NOME DE USUÁRIO DO GITHUB AQUI
const GITHUB_USERNAME = "Da6-Dev";

// Componente para o estado de "carregando"
const ProjectCardSkeleton = () => (
  <div className="bg-[var(--color-bg-card)] backdrop-blur-sm border border-[var(--color-border)] rounded-2xl p-6 flex flex-col gap-4 animate-pulse">
    <div className="h-48 bg-[var(--color-border)] rounded-lg"></div>
    <div className="h-6 w-3/4 bg-[var(--color-border)] rounded-md"></div>
    <div className="h-4 w-full bg-[var(--color-border)] rounded-md"></div>
    <div className="h-4 w-5/6 bg-[var(--color-border)] rounded-md"></div>
    <div className="flex-grow"></div>
    <div className="h-10 w-full bg-[var(--color-border)] rounded-md mt-4"></div>
  </div>
);


const ProjectCard = ({ project, index }) => (
    <div
      className="opacity-0 animate-fade-in-up flex flex-col bg-[var(--color-bg-card)] backdrop-blur-sm border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
      style={{ animationDelay: `${index * 150}ms` }}
    >
        {/* Imagem do Projeto */}
        <div className="relative h-56 w-full overflow-hidden">
            <img
                src={`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${project.name}/main/cover.png`}
                alt={`Capa do projeto ${project.name}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                // Em caso de erro na imagem principal, mostra uma alternativa ou cor de fundo
                onError={(e) => { e.target.onerror = null; e.target.src='fallback-image-url.jpg'; e.target.style.backgroundColor = 'var(--color-border)'; }}
            />
        </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">{project.name}</h3>
        <p className="text-[var(--color-text-secondary)] text-sm mb-4 flex-grow">{project.description || "Sem descrição fornecida."}</p>

        {/* Tags (Tópicos do GitHub) */}
        <div className="flex flex-wrap gap-2 my-4">
          {project.topics.map(tag => (
            <span key={tag} className="bg-[var(--color-bg-secondary)] text-xs text-[var(--color-text-secondary)] px-3 py-1 rounded-full border border-[var(--color-border)]">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-[var(--color-border)]">
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors font-semibold">
            <SiGithub className="h-5 w-5" /> Ver no GitHub
          </a>
          {project.homepage && (
            <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-accent)] hover:opacity-80 transition-opacity font-semibold">
              <EyeIcon className="h-5 w-5" /> Ver Ao Vivo
            </a>
          )}
        </div>
      </div>
    </div>
);


function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Busca repositórios que tenham o tópico 'portfolio'
                const response = await fetch(`https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+topic:portfolio&sort=updated&per_page=6`);
                if (!response.ok) {
                    throw new Error('Falha ao buscar os projetos do GitHub.');
                }
                const data = await response.json();
                setProjects(data.items);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);


    return (
        <section className="py-20 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="opacity-0 animate-fade-in-up text-4xl font-bold text-[var(--color-text-primary)]">Meus Projetos</h2>
                    <p className="opacity-0 animate-fade-in-up text-[var(--color-text-secondary)] mt-2" style={{ animationDelay: '150ms' }}>
                        Uma coleção de trabalhos que demonstram minhas habilidades e paixão pelo desenvolvimento.
                    </p>
                </div>

                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {[...Array(4)].map((_, i) => <ProjectCardSkeleton key={i} />)}
                    </div>
                )}

                {error && (
                    <div className="text-center mt-16 text-red-400">
                        <p>Oops! Algo deu errado.</p>
                        <p>{error}</p>
                    </div>
                )}

                {!loading && !error && (
                    projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                            {projects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center mt-16">
                            <p className="text-[var(--color-text-secondary)] text-lg">
                                Nenhum projeto com o tópico "portfolio" encontrado no meu GitHub.
                            </p>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}

export default Projects;
