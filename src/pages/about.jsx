// src/pages/about.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
    UserCircleIcon,
    PuzzlePieceIcon,
    ChatBubbleLeftRightIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    RocketLaunchIcon
} from '@heroicons/react/24/outline';

// Seus valores ou filosofia de trabalho
const philosophyData = [
    {
        icon: <UserCircleIcon className="w-8 h-8 text-[var(--color-accent)]" />,
        title: "Pessoas em Primeiro Lugar",
        description: "No fim do dia, a tecnologia é sobre pessoas. Eu gosto de pensar em quem vai usar o que eu crio, imaginar suas necessidades e construir algo que traga um sorriso ou um alívio. Um código bonito é legal, mas um código que ajuda de verdade é o que me move."
    },
    {
        icon: <PuzzlePieceIcon className="w-8 h-8 text-[var(--color-accent)]" />,
        title: "Solução de Problemas",
        description: "Eu genuinamente amo o processo de desvendar um problema. É como montar um quebra-cabeça complexo. A busca pela solução, os testes, os erros e, finalmente, aquele momento 'a-há!' quando tudo se encaixa e funciona perfeitamente... essa sensação é incrível."
    },
    {
        icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-[var(--color-accent)]" />,
        title: "Aprendendo Juntos",
        description: "Não tenho todas as respostas, e acho ótimo que seja assim. Acredito em um ambiente onde pedir ajuda é normal e ensinar o que se sabe é um presente. É na troca de ideias que as melhores soluções nascem."
    }
];

// Sua jornada profissional e de aprendizado
const timelineData = [
    {
        icon: <AcademicCapIcon />,
        date: "2024 - Base Técnica",
        title: "Ensino Médio Focado em TI",
        description: "Concluí o ensino médio com uma formação integrada, que me proporcionou a base em programação, web design e hardware (Arduino), despertando minha paixão pela área de tecnologia."
    },
    {
        icon: <AcademicCapIcon />,
        date: "2025 - Aprofundamento Acadêmico",
        title: "Técnico pelo SENAI e Graduando na UNIFEI",
        description: "Formei-me Técnico em Análise e Desenvolvimento de Sistemas pelo SENAI, enquanto iniciava a graduação em Matemática na UNIFEI, combinando a prática do desenvolvimento de software com uma base teórica sólida em lógica."
    },
    {
        icon: <RocketLaunchIcon />,
        date: "Atualmente",
        title: "Desenvolvedor de Jogos - DEV-U",
        description: "Aplico e expando minhas habilidades de programação como desenvolvedor em um projeto de extensão da UNIFEI focado na criação de jogos, trabalhando de forma colaborativa para transformar ideias em realidade."
    },
    {
        icon: <BriefcaseIcon />,
        date: "Futuro",
        title: "Em Busca de Oportunidades",
        description: "Com uma base técnica e acadêmica sólida, estou preparado e em busca de oportunidades para atuar em projetos desafiadores e inovadores no mercado de desenvolvimento de software."
    }
];

const TimelineItem = ({item}) => (
    <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[var(--color-border)] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--color-accent)] after:border-4 after:box-content after:border-[var(--color-border)] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)] rounded-full">{item.date}</time>
            <div className="text-xl font-bold text-[var(--color-text-primary)]">{item.title}</div>
        </div>
        <div className="text-[var(--color-text-secondary)]">{item.description}</div>
    </div>
);


function About() {
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
                    <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Sobre Mim</h2>
                    <div className="text-lg text-[var(--color-text-secondary)] space-y-4 leading-relaxed">
                        <p>
                            Olá! Sou o Davi Passos. Minha paixão é construir pontes entre a lógica e a criatividade para criar soluções digitais. Com uma base em Análise de Sistemas e iniciando uma graduação em Matemática pela UNIFEI, sou fascinado por resolver problemas complexos e transformá-los em experiências intuitivas para as pessoas.
                        </p>
                        <p>
                            Além dos projetos formais, meu playground criativo é o desenvolvimento de jogos, onde exploro novas mecânicas e narrativas. Também dedico tempo a projetos de código aberto e estou sempre em busca do próximo quebra-cabeça de código para resolver.
                        </p>
                    </div>
                     <Link to="/contact" className="mt-8 inline-block bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-3 px-8 rounded-full text-lg hover:bg-[var(--color-accent-hover)] transition-transform transform hover:scale-105 shadow-lg">
                        Vamos Conversar
                    </Link>
                </div>
            </div>

            {/* Seção Diferencial: Filosofia de Trabalho */}
            <div className="mt-24 text-center">
                <h3 className="opacity-0 animate-fade-in-up text-3xl font-bold text-[var(--color-text-primary)] mb-12" style={{ animationDelay: '400ms' }}>Minha Filosofia</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {philosophyData.map((item, index) => (
                        <div
                            key={item.title}
                            className="opacity-0 animate-fade-in-up p-8 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg shadow-lg"
                            style={{ animationDelay: `${500 + index * 150}ms` }}
                        >
                            <div className="flex justify-center mb-4">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</h4>
                            <p className="text-[var(--color-text-secondary)]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Seção Linha do Tempo */}
            <div className="mt-24">
                <h3 className="opacity-0 animate-fade-in-up text-3xl font-bold text-[var(--color-text-primary)] text-center mb-12" style={{ animationDelay: '300ms' }}>Minha Jornada</h3>
                <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;