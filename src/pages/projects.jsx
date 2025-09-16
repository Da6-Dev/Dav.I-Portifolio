// src/pages/projects.jsx
import React, { useState, useEffect, useMemo, useRef } from 'react'; // 1. Importe o useRef
import { useTranslation } from 'react-i18next';
import { EyeIcon } from '@heroicons/react/24/solid';
import { SiGithub } from 'react-icons/si';
import useMetaTags from '../hooks/useMetaTags';
import { Link } from 'react-router-dom';

const GITHUB_USERNAME = "Da6-Dev";

// --- Componentes internos (mantêm-se iguais) ---
const ProjectCardSkeleton = () => (<div className="bg-[var(--color-bg-card)] backdrop-blur-sm border border-[var(--color-border)] rounded-2xl p-6 flex flex-col gap-4 animate-pulse"> <div className="h-48 bg-[var(--color-border)] rounded-lg"></div> <div className="h-6 w-3/4 bg-[var(--color-border)] rounded-md"></div> <div className="h-4 w-full bg-[var(--color-border)] rounded-md"></div> <div className="h-4 w-5/6 bg-[var(--color-border)] rounded-md"></div> <div className="flex-grow"></div> <div className="h-10 w-full bg-[var(--color-border)] rounded-md mt-4"></div> </div>);
const ProjectCard = ({ project }) => {
  const { t, i18n } = useTranslation();
  const [description, setDescription] = useState(project.description || '');

  useEffect(() => {
    setDescription(project.description || '');
    const descriptionUrl = `https://raw.githubusercontent.com/${project.owner.login}/${project.name}/${project.default_branch}/description.json`;
    fetch(descriptionUrl).then(response => { if (response.ok) return response.json(); return null; }).then(descriptions => { if (descriptions) { const translated = descriptions[i18n.language] || descriptions['en']; if (translated) setDescription(translated); } }).catch(error => console.error(`Could not fetch description.json for ${project.name}:`, error));
  }, [project, i18n.language]);

  const imageUrl = `https://raw.githubusercontent.com/${project.owner.login}/${project.name}/${project.default_branch}/cover.png`;
  const fallbackImageUrl = `https://raw.githubusercontent.com/${project.owner.login}/${project.name}/${project.default_branch}/cover.jpg`;
  const handleImageError = (e) => { if (e.target.src !== fallbackImageUrl) e.target.src = fallbackImageUrl; else { e.target.style.backgroundColor = 'var(--color-border)'; e.target.src = "https://via.placeholder.com/600x315.png?text=Image+Not+Found"; } };

  return (
    // 2. Envolva todo o 'div' com um componente Link
    <Link to={`/projects/${project.name}`} className="flex flex-col bg-[var(--color-bg-card)] backdrop-blur-sm border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl h-full">
      <div className="relative h-56 w-full overflow-hidden flex-shrink-0"> <img src={imageUrl} alt={`Capa do projeto ${project.name}`} className="w-full h-full object-cover" onError={handleImageError} /> </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">{project.name}</h3>
        <p className="text-[var(--color-text-secondary)] text-sm mb-4 flex-grow">{description || t('projects.noDescription')}</p>
        <div className="flex flex-wrap gap-2 my-4">{project.topics.map(tag => (<span key={tag} className="bg-[var(--color-bg-secondary)] text-xs text-[var(--color-text-secondary)] px-3 py-1 rounded-full border border-[var(--color-border)]">{tag}</span>))}</div>
        {/* 3. A navegação interna (links para GitHub/Live) continua a funcionar normalmente */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-[var(--color-border)]">
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors font-semibold z-10"> <SiGithub className="h-5 w-5" /> {t('projects.githubButton')} </a>
          {project.homepage && (<a href={project.homepage} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-[var(--color-accent)] hover:opacity-80 transition-opacity font-semibold z-10"> <EyeIcon className="h-5 w-5" /> {t('projects.liveButton')} </a>)}
        </div>
      </div>
    </Link>
  );
};


// --- Componente principal da página ---
function Projects() {
  const { t } = useTranslation();
  useMetaTags(
    `Davi Passos | ${t('titles.projects')}`, 
    t('siteDescription'),
    'https://github.com/Da6-Dev/Dav.I-Portifolio/blob/master/cover.png?raw=true' // Link para a sua imagem de preview
  );

  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // 2. Lógica para controlar os gradientes do scroll
  const scrollContainerRef = useRef(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const isAtStart = el.scrollLeft < 10;
      const isAtEnd = el.scrollWidth - el.scrollLeft - el.clientWidth < 10;
      setShowLeftFade(!isAtStart);
      setShowRightFade(!isAtEnd);
    }
  };

  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+topic:portfolio&sort=updated&per_page=12`)
      .then(res => { if (!res.ok) throw new Error('Failed to fetch projects'); return res.json(); })
      .then(data => { setAllProjects(data.items); setLoading(false); setTimeout(handleScroll, 100); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  const filterTags = useMemo(() => { if (allProjects.length === 0) return []; const tags = new Set(); allProjects.forEach(p => p.topics.forEach(t => t.toLowerCase() !== 'portfolio' && tags.add(t))); return ['All', ...Array.from(tags).sort()]; }, [allProjects]);
  const filteredProjects = useMemo(() => activeFilter === 'All' ? allProjects : allProjects.filter(p => p.topics.includes(activeFilter)), [activeFilter, allProjects]);

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-[var(--color-text-primary)]">{t('projects.title')}</h2>
          <p className="text-[var(--color-text-secondary)] mt-2">{t('projects.subtitle')}</p>
        </div>

        {/* Secção de Filtros com Scroll Horizontal Inteligente */}
        {!loading && allProjects.length > 0 && (
          <div className={`scroll-fade-container mb-12 opacity-0 animate-fade-in-up ${showLeftFade ? 'show-fade-left' : ''} ${showRightFade ? 'show-fade-right' : ''}`} style={{ animationDelay: '200ms' }}>
            <div ref={scrollContainerRef} onScroll={handleScroll} className="flex items-center gap-3 overflow-x-auto pb-4 hide-scrollbar">
              {filterTags.map(tag => {
                const isActive = tag === activeFilter;
                const buttonClasses = `px-5 py-2 text-sm font-bold rounded-full border transition-colors whitespace-nowrap ${isActive ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] border-transparent' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:bg-[var(--color-bg)] hover:border-[var(--color-border-strong)]'}`;
                return <button key={tag} className={buttonClasses} onClick={() => setActiveFilter(tag)}>{tag}</button>;
              })}
            </div>
          </div>
        )}

        {/* Grelha de Projetos */}
        {loading && (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{[...Array(3)].map((_, i) => <ProjectCardSkeleton key={i} />)}</div>)}
        {error && <div className="text-center mt-16 text-red-400"><p>{t('projects.errorTitle')}</p><p>{error}</p></div>}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;