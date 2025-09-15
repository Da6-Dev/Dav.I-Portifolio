// src/pages/projects.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { EyeIcon } from '@heroicons/react/24/solid';
import { SiGithub } from 'react-icons/si';

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

const ProjectCard = ({ project, index }) => {
    const { t } = useTranslation();

    // **A CORREÇÃO ESTÁ AQUI**
    // Usamos `project.default_branch` para pegar o nome da branch principal (main, master, etc.)
    const imageUrl = `https://raw.githubusercontent.com/${project.owner.login}/${project.name}/${project.default_branch}/cover.png`;
    
    // Tentamos também com .jpg como alternativa
    const fallbackImageUrl = `https://raw.githubusercontent.com/${project.owner.login}/${project.name}/${project.default_branch}/cover.jpg`;

    const handleImageError = (e) => {
        // Se cover.png falhar, tenta cover.jpg
        if (e.target.src !== fallbackImageUrl) {
            e.target.src = fallbackImageUrl;
        } else {
            // Se ambos falharem, mostra a imagem genérica
            e.target.style.backgroundColor = 'var(--color-border)';
            e.target.src = "https://via.placeholder.com/600x315.png?text=Image+Not+Found";
        }
    };

    return (
        <div
            className="opacity-0 animate-fade-in-up flex flex-col bg-[var(--color-bg-card)] backdrop-blur-sm border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className="relative h-56 w-full overflow-hidden">
                <img
                    src={imageUrl}
                    alt={`Capa do projeto ${project.name}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={handleImageError}
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">{project.name}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4 flex-grow">{project.description || t('projects.noDescription')}</p>

                <div className="flex flex-wrap gap-2 my-4">
                    {project.topics.map(tag => (
                        <span key={tag} className="bg-[var(--color-bg-secondary)] text-xs text-[var(--color-text-secondary)] px-3 py-1 rounded-full border border-[var(--color-border)]">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-[var(--color-border)]">
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors font-semibold">
                        <SiGithub className="h-5 w-5" /> {t('projects.githubButton')}
                    </a>
                    {project.homepage && (
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-accent)] hover:opacity-80 transition-opacity font-semibold">
                            <EyeIcon className="h-5 w-5" /> {t('projects.liveButton')}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

// ... O resto do componente (Projects) continua o mesmo

function Projects() {
    const { t } = useTranslation();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+topic:portfolio&sort=updated&per_page=6`);
                if (!response.ok) {
                    throw new Error('Failed to fetch projects from GitHub.');
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
                    <h2 className="opacity-0 animate-fade-in-up text-4xl font-bold text-[var(--color-text-primary)]">{t('projects.title')}</h2>
                    <p className="opacity-0 animate-fade-in-up text-[var(--color-text-secondary)] mt-2" style={{ animationDelay: '150ms' }}>
                        {t('projects.subtitle')}
                    </p>
                </div>

                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {[...Array(4)].map((_, i) => <ProjectCardSkeleton key={i} />)}
                    </div>
                )}

                {error && (
                    <div className="text-center mt-16 text-red-400">
                        <p>{t('projects.errorTitle')}</p>
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
                                {t('projects.noProjects')}
                            </p>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}

export default Projects;