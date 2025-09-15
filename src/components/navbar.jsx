// src/components/navbar.jsx
import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import {
    HomeIcon as HomeOutline,
    UserIcon as InfoOutline,
    RectangleStackIcon as ProjectsOutline,
    WrenchScrewdriverIcon as SkillsOutline,
    EnvelopeIcon as ContactOutline,
    StarIcon
} from '@heroicons/react/24/outline';
import {
    HomeIcon as HomeSolid,
    UserIcon as InfoSolid,
    RectangleStackIcon as ProjectsSolid,
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

const ITEM_HEIGHT_REM = 3.5; // h-14

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();

    const activeIndex = useMemo(() =>
        navItems.findIndex(item => location.pathname === item.path),
        [location.pathname]
    );

    return (
        <aside
            className={`fixed top-0 left-0 h-screen z-50 bg-[var(--color-bg-secondary)] border-r border-[var(--color-border)] transition-all duration-300 ease-in-out ${isExpanded ? 'w-56' : 'w-24'}`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="flex items-center justify-center h-24">
                    <StarIcon className="h-8 w-8 text-[var(--color-accent)] flex-shrink-0 transition-transform duration-300 animate-pulse-slow" />
                    <span className={`text-xl font-bold text-[var(--color-text-primary)] whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'w-28 ml-3 opacity-100' : 'w-0 ml-0 opacity-0'}`}>
                        Dav.i
                    </span>
                </div>

                {/* Navegação */}
                <nav className="flex-1 flex items-center justify-center px-4">
                    <ul className="w-full space-y-2">
                        {navItems.map((item, index) => {
                            const isActive = activeIndex === index;
                            const Icon = isActive ? item.IconSolid : item.IconOutline;

                            const linkClasses = `
                                flex items-center h-14 w-full rounded-lg transition-colors duration-200 group
                                ${isActive
                                    ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] shadow-lg'
                                    : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)] hover:text-[var(--color-text-primary)]'
                                }
                            `;

                            return (
                                <li key={item.name}>
                                    <Link to={item.path} className={linkClasses}>
                                        <div className={`flex items-center transition-all duration-300 ease-in-out ${isExpanded ? 'w-full pl-5' : 'w-full justify-center'}`}>
                                            <Icon className="h-6 w-6 flex-shrink-0" />
                                            <span className={`text-md whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'w-auto ml-4 opacity-100' : 'w-0 ml-0 opacity-0'}`}>
                                                {item.name}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Rodapé */}
                <div className="flex justify-center p-4">
                    <ThemeToggle />
                </div>
            </div>
        </aside>
    );
}

export default Navbar;