// src/pages/about.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
    HeartIcon,
    LightBulbIcon,
    UsersIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    RocketLaunchIcon,
    ChatBubbleLeftRightIcon,
    PuzzlePieceIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';

// Seus valores ou filosofia de trabalho
const philosophyData = [
    {
        icon: <UserCircleIcon className="w-8 h-8 text-teal-500" />, // Ícone mais pessoal
        title: "Pessoas em Primeiro Lugar",
        description: "No fim do dia, a tecnologia é sobre pessoas. Eu gosto de pensar em quem vai usar o que eu crio, imaginar suas necessidades e construir algo que traga um sorriso ou um alívio. Um código bonito é legal, mas um código que ajuda de verdade é o que me move."
    },
    {
        icon: <PuzzlePieceIcon className="w-8 h-8 text-indigo-500" />, // Ícone que remete a encaixar peças
        title: "Solução de Problemas",
        description: "Eu genuinamente amo o processo de desvendar um problema. É como montar um quebra-cabeça complexo. A busca pela solução, os testes, os erros e, finalmente, aquele momento 'a-há!' quando tudo se encaixa e funciona perfeitamente... essa sensação é incrível."
    },
    {
        icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-amber-500" />, // Ícone de diálogo
        title: "Aprendendo Juntos",
        description: "Não tenho todas as respostas, e acho ótimo que seja assim. Acredito em um ambiente onde pedir ajuda é normal e ensinar o que se sabe é um presente. É na troca de ideias, em um 'pair programming' descontraído ou em uma conversa que as melhores soluções nascem."
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

const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;
    return (
        <div className={`relative flex items-start gap-6 md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="flex flex-col items-center flex-shrink-0">
                <div className="grid place-items-center w-12 h-12 rounded-full bg-[var(--color-bg-secondary)] border-2 border-[var(--color-accent)] text-[var(--color-accent)]">
                    {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
                </div>
                <div className="w-px h-full bg-[var(--color-border)]"></div>
            </div>
            <div className="opacity-0 animate-fade-in-up w-full pb-16" style={{ animationDelay: `${400 + index * 200}ms` }}>
                <div className="p-6 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] shadow-md">
                    <p className="text-sm font-semibold text-[var(--color-accent)] mb-1">{item.date}</p>
                    <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{item.title}</h4>
                    <p className="text-[var(--color-text-secondary)]">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

function About() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
            {/* Seção Principal: Foto e Biografia */}
            <div className="md:flex gap-12 items-center">
                {/* ===== NOVA ANIMAÇÃO NA FOTO ===== */}
                <div className="md:w-1/3 mb-8 md:mb-0 opacity-0 animate-fade-in-up perspective-1000" style={{ animationDelay: '150ms' }}>
                    <img
                        src="img-perfil.jpg"
                        alt="Foto de Perfil"
                        className="rounded-3xl shadow-xl w-full h-auto border-4 border-[var(--color-border)] transition-transform duration-500 ease-out transform hover:-rotate-y-6 hover:rotate-x-3 hover:scale-105"
                    />
                </div>
                <div className="md:w-2/3 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Sobre Mim</h2>
                    <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                        Olá! Sou o Davi Passos. Minha paixão é construir pontes entre a lógica e a criatividade para criar soluções digitais. Com uma base em Análise de Sistemas e iniciando uma graduação em Matemática pela UNIFEI, sou fascinado por resolver problemas complexos e transformá-los em experiências intuitivas para as pessoas.
                    </p>
                    <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                        Além dos projetos formais, meu playground criativo é o desenvolvimento de jogos, onde exploro novas mecânicas e narrativas. Também dedico tempo a projetos de código aberto e estou sempre em busca do próximo quebra-cabeça de código para resolver.
                    </p>
                    <Link to="/contact" className="inline-block bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-3 px-8 rounded-full text-lg hover:bg-[var(--color-accent-hover)] transition-transform transform hover:scale-105 shadow-lg">
                        Vamos Conversar
                    </Link>
                </div>
            </div>

            {/* Seção Diferencial: Filosofia de Trabalho com Animação de Fundo */}
            <div className="mt-24 text-center relative rounded-xl overflow-hidden">
                <div className="aurora-background">
                    <div className="aurora-blob bg-blue-400"></div>
                    <div className="aurora-blob bg-purple-400"></div>
                    <div className="aurora-blob bg-pink-400"></div>
                </div>
                <div className="relative z-10 p-8 md:p-12">
                    <h3 className="opacity-0 animate-fade-in-up text-3xl font-bold text-[var(--color-text-primary)] mb-12" style={{ animationDelay: '400ms' }}>Minha Filosofia</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {philosophyData.map((item, index) => (
                            <div
                                key={item.title}
                                className="opacity-0 animate-fade-in-up p-8 bg-[var(--color-bg-card)] backdrop-blur-md border border-[var(--color-border)] rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
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
            </div>

            {/* Seção Linha do Tempo */}
            <div className="mt-24">
                <h3 className="opacity-0 animate-fade-in-up text-3xl font-bold text-[var(--color-text-primary)] text-center mb-12" style={{ animationDelay: '300ms' }}>Minha Jornada</h3>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-[var(--color-border-strong)] hidden md:block"></div>
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;