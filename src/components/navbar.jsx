import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

// Ícones (nenhuma alteração necessária aqui)
import {
    HomeIcon as HomeOutline,
    InformationCircleIcon as InfoOutline,
    CodeBracketSquareIcon as ProjectsOutline,
    WrenchScrewdriverIcon as SkillsOutline,
    EnvelopeIcon as ContactOutline,
    StarIcon
} from '@heroicons/react/24/outline';

import {
    HomeIcon as HomeSolid,
    InformationCircleIcon as InfoSolid,
    CodeBracketSquareIcon as ProjectsSolid,
    WrenchScrewdriverIcon as SkillsSolid,
    EnvelopeIcon as ContactSolid,
} from '@heroicons/react/24/solid';


const navItems = [
    { name: 'Home', path: '/', IconOutline: HomeOutline, IconSolid: HomeSolid },
    { name: 'Sobre', path: '/about', IconOutline: InfoOutline, IconSolid: InfoSolid },
    { name: 'Projetos', path: '/projects', IconOutline: ProjectsOutline, IconSolid: ProjectsSolid },
    { name: 'Habilidades', path: '/skills', IconOutline: SkillsOutline, IconSolid: SkillsSolid },
    { name: 'Contato', path: '/contact', IconOutline: ContactOutline, IconSolid: ContactSolid },
];

const ITEM_HEIGHT_REM = 3.5; // Corresponde à classe h-14 (14 * 0.25rem)

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const location = useLocation();

    // Encontra o índice do item ativo com base na rota atual
    const activeIndex = useMemo(() =>
        navItems.findIndex(item => location.pathname === item.path),
        [location.pathname]
    );

    // Calcula a posição da "pílula" de fundo
    const pillTransform = useMemo(() => {
        // Usa o índice do item com hover, ou o ativo como fallback
        const index = hoveredIndex !== null ? hoveredIndex : activeIndex;
        // Se nenhum item estiver ativo ou com hover, esconde a pílula
        if (index === -1) return 'scale(0)';
        // Move a pílula para a posição correta
        return `translateY(${index * ITEM_HEIGHT_REM}rem)`;
    }, [hoveredIndex, activeIndex]);

    return (
        <aside
            className={`fixed top-0 left-0 h-screen z-50 bg-[var(--color-bg-secondary)] transition-all duration-300 ease-in-out ${isExpanded ? 'w-56' : 'w-24'}`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => {
                setIsExpanded(false);
                setHoveredIndex(null); // Limpa o hover ao sair
            }}
        >
            <div className="flex flex-col h-full">
                {/* Cabeçalho com Logo e Nome */}
                <div className="flex items-center justify-center h-24 border-b border-[var(--color-border)]">
                    <StarIcon
                        className="h-8 w-8 text-[var(--color-accent)] flex-shrink-0 transition-transform duration-300 animate-pulse-slow drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]"
                    />
                    <span
                        className={`text-lg font-bold text-[var(--color-text-primary)] whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'w-28 ml-3 opacity-100' : 'w-0 ml-0 opacity-0'}`}
                    >
                        Dav.I
                    </span>
                </div>

                {/* Navegação Principal */}
                <nav className="flex-1 flex items-center px-4">
                    <ul className="relative w-full" onMouseLeave={() => setHoveredIndex(null)}>
                        {/* Pílula de fundo animada */}
                        <div
                            className="absolute left-0 w-full h-14 bg-[var(--color-bg)] rounded-lg transition-transform duration-300 ease-in-out"
                            style={{ transform: pillTransform }}
                        />

                        {/* Itens do Menu */}
                        {navItems.map((item, index) => {
                            const isActive = activeIndex === index;
                            const isHovered = hoveredIndex === index;
                            const Icon = isActive ? item.IconSolid : item.IconOutline;
                            
                            // Define a cor do texto: acentuada se ativa ou com hover, senão secundária
                            const textColorClass = isActive || isHovered
                                ? 'text-[var(--color-accent)]'
                                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]';

                            return (
                                <li
                                    key={item.name}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                >
                                    <Link
                                        to={item.path}
                                        className={`relative flex items-center h-14 w-full rounded-lg transition-colors duration-200 ${textColorClass}`}
                                    >
                                        <div className={`flex items-center transition-all duration-300 ease-in-out ${isExpanded ? 'w-full' : 'w-full justify-center'}`}>
                                            <Icon className="h-6 w-6 flex-shrink-0" />
                                            <span
                                                className={`text-md whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'w-auto ml-4 opacity-100' : 'w-0 ml-0 opacity-0'}`}
                                            >
                                                {item.name}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Rodapé com Seletor de Tema */}
                <div className="flex justify-center p-4 border-t border-[var(--color-border)]">
                    <ThemeToggle />
                </div>
            </div>
        </aside>
    );
}

export default Navbar;