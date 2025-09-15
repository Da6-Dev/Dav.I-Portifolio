// src/pages/about.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    UserCircleIcon,
    PuzzlePieceIcon,
    ChatBubbleLeftRightIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    RocketLaunchIcon
} from '@heroicons/react/24/outline';

const TimelineItem = ({ item }) => (
    <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[var(--color-border)] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--color-accent)] after:border-4 after:box-content after:border-[var(--color-border)] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)] rounded-full">{item.date}</time>
            <div className="text-xl font-bold text-[var(--color-text-primary)]">{item.title}</div>
        </div>
        <div className="text-[var(--color-text-secondary)]">{item.description}</div>
    </div>
);

function About() {
    const { t } = useTranslation();

    // Dados da filosofia de trabalho traduzidos
    const philosophyData = [
        {
            icon: <UserCircleIcon className="w-8 h-8 text-[var(--color-accent)]" />,
            title: t('about.philosophy1Title'),
            description: t('about.philosophy1Desc')
        },
        {
            icon: <PuzzlePieceIcon className="w-8 h-8 text-[var(--color-accent)]" />,
            title: t('about.philosophy2Title'),
            description: t('about.philosophy2Desc')
        },
        {
            icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-[var(--color-accent)]" />,
            title: t('about.philosophy3Title'),
            description: t('about.philosophy3Desc')
        }
    ];

    // Dados da jornada profissional traduzidos
    const timelineData = [
        {
            icon: <AcademicCapIcon />,
            date: t('about.journey1Date'),
            title: t('about.journey1Title'),
            description: t('about.journey1Desc')
        },
        {
            icon: <AcademicCapIcon />,
            date: t('about.journey2Date'),
            title: t('about.journey2Title'),
            description: t('about.journey2Desc')
        },
        {
            icon: <RocketLaunchIcon />,
            date: t('about.journey3Date'),
            title: t('about.journey3Title'),
            description: t('about.journey3Desc')
        },
        {
            icon: <BriefcaseIcon />,
            date: t('about.journey4Date'),
            title: t('about.journey4Title'),
            description: t('about.journey4Desc')
        }
    ];

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
            {/* Seção Principal: Foto e Biografia */}
            <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                    <img
                        src="img-perfil.jpg"
                        alt="Foto de Perfil"
                        className="rounded-3xl shadow-xl w-full h-auto border-4 border-[var(--color-border)]"
                    />
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
                        <div
                            key={item.title}
                            className="opacity-0 animate-fade-in-up p-8 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg shadow-lg"
                            style={{ animationDelay: `${500 + index * 150}ms` }}
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
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
                        <TimelineItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;