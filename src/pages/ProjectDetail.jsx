// src/pages/ProjectDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ArrowLeftIcon, EyeIcon } from '@heroicons/react/24/solid';
import { SiGithub } from 'react-icons/si';

// Importe a folha de estilos do GitHub
import 'github-markdown-css/github-markdown.css';

const GITHUB_USERNAME = "Da6-Dev";

function ProjectDetail() {
    const { projectName } = useParams();
    const [project, setProject] = useState(null);
    const [readme, setReadme] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useDocumentTitle(`Davi Passos | ${projectName}`);

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                setLoading(true);
                const repoResponse = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${projectName}`);
                if (!repoResponse.ok) throw new Error('Project not found');
                const repoData = await repoResponse.json();
                setProject(repoData);

                const readmeResponse = await fetch(`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${projectName}/${repoData.default_branch}/README.md`);
                if (!readmeResponse.ok) {
                    setReadme("README.md não encontrado para este projeto.");
                } else {
                    const readmeText = await readmeResponse.text();
                    setReadme(readmeText);
                }

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProjectData();
    }, [projectName]);

    if (loading) { return <div className="min-h-screen flex justify-center items-center"><p>A carregar projeto...</p></div>; }
    if (error) { return <div className="min-h-screen flex justify-center items-center"><p>Erro: {error}</p></div>; }

    return (
        <section className="py-20 px-4 max-w-4xl mx-auto min-h-screen">
            <div className="mb-8 opacity-0 animate-fade-in-up">
                <Link to="/projects" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors font-semibold">
                    <ArrowLeftIcon className="w-5 h-5" />
                    Voltar para projetos
                </Link>
            </div>

            <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6 pb-6 border-b border-[var(--color-border)]">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">{project.name}</h1>
                        <p className="text-[var(--color-text-secondary)] mt-2">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"> <SiGithub className="w-5 h-5" /> GitHub </a>
                        {project.homepage && ( <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:opacity-80 transition-opacity"> <EyeIcon className="w-5 h-5" /> Ver Ao Vivo </a> )}
                    </div>
                </div>

                <article className="markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {readme}
                    </ReactMarkdown>
                </article>
            </div>
        </section>
    );
}

export default ProjectDetail;