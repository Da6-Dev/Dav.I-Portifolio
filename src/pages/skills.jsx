// src/pages/skills.jsx
import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiPython, SiReact, SiNodedotjs, 
  SiMysql, SiMongodb, SiGithub, SiUnity, SiGodotengine, // Corrigido: SiGodotengine -> SiGodot
  SiLinux, SiBootstrap, SiTailwindcss, SiArduino, SiFlutter
} from 'react-icons/si';
import { PiFileCSharp } from "react-icons/pi";

const skillsData = {
  "Front-end": [
    { name: "HTML", icon: <SiHtml5 size={32} className="text-orange-500" />, description: "Estruturação de páginas web semânticas e acessíveis." },
    { name: "CSS", icon: <SiCss3 size={32} className="text-blue-500" />, description: "Estilização e criação de layouts modernos e responsivos." },
    { name: "JavaScript (ES6+)", icon: <SiJavascript size={32} className="text-yellow-400" />, description: "Manipulação do DOM, assincronicidade e lógica de programação." },
    { name: "React", icon: <SiReact size={32} className="text-cyan-400" />, description: "Criação de interfaces de usuário reativas e componentizadas." },
    { name: "Flutter", icon: <SiFlutter size={32} className="text-sky-500" />, description: "Desenvolvimento de aplicações nativas para múltiplas plataformas." },
    { name: "Bootstrap", icon: <SiBootstrap size={32} className="text-purple-600" />, description: "Criação de designs responsivos com um framework consolidado." },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-teal-400" />, description: "Estilização rápida e customizável com classes utilitárias." },
  ],
  "Back-end & Databases": [
    { name: "Node.js", icon: <SiNodedotjs size={32} className="text-green-500" />, description: "Construção de APIs RESTful eficientes com o ecossistema JavaScript." },
    { name: "PHP", icon: <SiPhp size={32} className="text-indigo-400" />, description: "Desenvolvimento de aplicações web dinâmicas do lado do servidor." },
    { name: "Python", icon: <SiPython size={32} className="text-blue-400" />, description: "Utilização em scripts, automação e desenvolvimento de back-end com frameworks." },
    { name: "MySQL", icon: <SiMysql size={32} className="text-blue-600" />, description: "Modelagem e gerenciamento de bancos de dados relacionais." },
    { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-400" />, description: "Utilização de bancos de dados NoSQL para flexibilidade e escalabilidade." },
  ],
  "Game Development": [
    { name: "Unity", icon: <SiUnity size={32} className="text-neutral-300" />, description: "Desenvolvimento de jogos 2D e 3D para múltiplas plataformas." },
    { name: "Godot", icon: <SiGodotengine size={32} className="text-sky-400" />, description: "Criação de jogos com uma engine de código aberto e versátil." }, // Corrigido aqui também
    { name: "C#", icon: <PiFileCSharp size={32} className="text-purple-500" />, description: "Linguagem principal para scripting de jogos na Unity." },
  ],
  "Ferramentas & Sistemas": [
    { name: "Git/GitHub", icon: <SiGithub size={32} className="text-neutral-400" />, description: "Versionamento de código, colaboração e gerenciamento de projetos." },
    { name: "Linux", icon: <SiLinux size={32} className="text-yellow-300" />, description: "Uso como ambiente de desenvolvimento e para deploy de servidores." },
    { name: "Arduino", icon: <SiArduino size={32} className="text-teal-500" />, description: "Prototipagem de projetos de hardware e automação." },
  ]
};


// O restante do seu componente continua aqui...

// O novo componente de Card para cada habilidade
const SkillCard = ({ skill, index }) => {
  return (
    <div
      className="relative group p-6 text-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl transition-all duration-300 ease-out opacity-0 animate-fade-in-up hover:!opacity-100"
      style={{ animationDelay: `${index * 100}ms`, transformStyle: 'preserve-3d' }}
    >
      {/* Efeito de brilho radial que aparece no hover */}
      <div className="absolute inset-0 bg-radial-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Container do conteúdo com efeito 3D */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full transform transition-transform duration-300 group-hover:-translate-y-2">
        <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
          {skill.icon}
        </div>
        <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{skill.name}</h4>
        <p className="text-sm text-[var(--color-text-secondary)]">{skill.description}</p>
      </div>
    </div>
  );
};


function Skills() {
  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da página */}
        <div className="text-center mb-16">
          <h2 className="opacity-0 animate-fade-in-up text-4xl font-bold text-[var(--color-text-primary)]">Painel de Habilidades</h2>
          <p className="opacity-0 animate-fade-in-up text-[var(--color-text-secondary)] mt-2" style={{ animationDelay: '150ms' }}>
            As tecnologias e ferramentas que utilizo para transformar ideias em realidade.
          </p>
        </div>

        {/* Mapeamento das categorias e skills */}
        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div key={category}>
              <h3 
                className="text-2xl font-bold text-[var(--color-text-primary)] border-b-2 border-[var(--color-border)] pb-3 mb-8 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${300 + categoryIndex * 200}ms` }}
              >
                {category}
              </h3>
              {/* Adicionamos a classe perspective para o efeito 3D funcionar nos cards filhos */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 perspective-1000">
                {skills.map((skill, skillIndex) => (
                  <SkillCard key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;