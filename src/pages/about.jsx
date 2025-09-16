// src/pages/about.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useMetaTags from '../hooks/useMetaTags';
import {
    UserCircleIcon,
    PuzzlePieceIcon,
    ChatBubbleLeftRightIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    RocketLaunchIcon
} from '@heroicons/react/24/outline';

const TimelineItem = ({ item, isLast }) => (
    <div className="relative flex gap-x-6">
        {/* Coluna da Esquerda: Ícone e Linha Vertical */}
        <div className="flex h-full w-12 flex-col items-center">
            <div className="grid place-items-center w-12 h-12 rounded-full bg-[var(--color-bg-secondary)] border-2 border-[var(--color-accent)] text-[var(--color-accent)]">
                {/* Clona o ícone para aplicar novas classes */}
                {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
            </div>
            {/* Renderiza a linha apenas se não for o último item */}
            {!isLast && <div className="w-px flex-1 bg-[var(--color-border)]" />}
        </div>

        {/* Coluna da Direita: Conteúdo de Texto */}
        {/* A classe `min-w-0` é crucial para forçar a quebra de texto em contêineres flex */}
        <div className="flex-1 min-w-0 pb-12">
            <p className="text-sm font-semibold text-[var(--color-accent)]">{item.date}</p>
            <h4 className="text-xl font-bold text-[var(--color-text-primary)] mt-1 break-words">{item.title}</h4>
            <p className="text-[var(--color-text-secondary)] mt-2">{item.description}</p>
        </div>
    </div>
);

function About() {
    const { t } = useTranslation();
    useMetaTags(
        `Davi Passos | ${t('titles.about')}`,
        t('siteDescription'),
        'https://github.com/Da6-Dev/Dav.I-Portifolio/blob/master/cover.png?raw=true' // Link para a sua imagem de preview
    );

    const philosophyData = [
        { icon: <UserCircleIcon />, title: t('about.philosophy1Title'), description: t('about.philosophy1Desc') },
        { icon: <PuzzlePieceIcon />, title: t('about.philosophy2Title'), description: t('about.philosophy2Desc') },
        { icon: <ChatBubbleLeftRightIcon />, title: t('about.philosophy3Title'), description: t('about.philosophy3Desc') },
    ];

    const timelineData = [
        { icon: <AcademicCapIcon />, date: t('about.journey1Date'), title: t('about.journey1Title'), description: t('about.journey1Desc') },
        { icon: <AcademicCapIcon />, date: t('about.journey2Date'), title: t('about.journey2Title'), description: t('about.journey2Desc') },
        { icon: <RocketLaunchIcon />, date: t('about.journey3Date'), title: t('about.journey3Title'), description: t('about.journey3Desc') },
        { icon: <BriefcaseIcon />, date: t('about.journey4Date'), title: t('about.journey4Title'), description: t('about.journey4Desc') },
    ];

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
            {/* Seção Principal: Foto e Biografia */}
            <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                    <img src="img-perfil.jpg" alt="Foto de Perfil" className="rounded-3xl shadow-xl w-full h-auto border-4 border-[var(--color-border)]" />
                </div>
                <div className="md:col-span-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">{t('about.title')}</h2>
                    <div className="text-lg text-[var(--color-text-secondary)] space-y-4 leading-relaxed">
                        <p>{t('about.bio1')}</p>
                        <p>{t('about.bio2')}</p>
                    </div>
                    <Link to="/contact" className="mt-8 inline-block bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-3 px-8 rounded-full text-lg hover:bg-[var(--color-accent-hover)] transition-transform transform hover:scale-105 shadow-lg">
                        {t('about.button')}
                    </Link>
                </div>
            </div>

            {/* Seção Diferencial: Filosofia de Trabalho */}
            <div className="mt-24 text-center">
                <h3 className="opacity-0 animate-fade-in-up text-3xl font-bold text-[var(--color-text-primary)] mb-12" style={{ animationDelay: '400ms' }}>{t('about.philosophyTitle')}</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {philosophyData.map((item, index) => (
                        <div key={item.title} className="opacity-0 animate-fade-in-up p-8 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg shadow-lg" style={{ animationDelay: `${500 + index * 150}ms` }}>
                            <div className="flex justify-center mb-4 text-[var(--color-accent)]">{React.cloneElement(item.icon, { className: 'w-8 h-8' })}</div>
                            <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</h4>
                            <p className="text-[var(--color-text-secondary)]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Seção Linha do Tempo */}
            <div className="mt-24">
                <h3 className="opacity-0 animate-fade-in-up text-3xl font-bold text-[var(--color-text-primary)] text-center mb-12" style={{ animationDelay: '300ms' }}>{t('about.journeyTitle')}</h3>
                <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} item={item} isLast={index === timelineData.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;