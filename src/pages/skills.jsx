// src/pages/skills.jsx
import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiPython, SiReact, SiNodedotjs,
  SiMysql, SiMongodb, SiGithub, SiUnity, SiGodotengine,
  SiLinux, SiBootstrap, SiTailwindcss, SiArduino, SiFlutter
} from 'react-icons/si';
import { PiFileCSharp } from "react-icons/pi";

const skillsData = {
    "Front-end": [
        { name: "HTML", icon: <SiHtml5 size={28} className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 size={28} className="text-blue-500" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript size={28} className="text-yellow-400" /> },
        { name: "React", icon: <SiReact size={28} className="text-cyan-400" /> },
        { name: "Flutter", icon: <SiFlutter size={28} className="text-sky-500" /> },
        { name: "Bootstrap", icon: <SiBootstrap size={28} className="text-purple-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-teal-400" /> },
    ],
    "Back-end & Databases": [
        { name: "Node.js", icon: <SiNodedotjs size={28} className="text-green-500" /> },
        { name: "PHP", icon: <SiPhp size={28} className="text-indigo-400" /> },
        { name: "Python", icon: <SiPython size={28} className="text-blue-400" /> },
        { name: "MySQL", icon: <SiMysql size={28} className="text-blue-600" /> },
        { name: "MongoDB", icon: <SiMongodb size={28} className="text-green-400" /> },
    ],
    "Game Development": [
        { name: "Unity", icon: <SiUnity size={28} className="text-neutral-300" /> },
        { name: "Godot", icon: <SiGodotengine size={28} className="text-sky-400" /> },
        { name: "C#", icon: <PiFileCSharp size={28} className="text-purple-500" /> },
    ],
    "Ferramentas & Sistemas": [
        { name: "Git/GitHub", icon: <SiGithub size={28} className="text-neutral-400" /> },
        { name: "Linux", icon: <SiLinux size={28} className="text-yellow-300" /> },
        { name: "Arduino", icon: <SiArduino size={28} className="text-teal-500" /> },
    ]
};

// Novo Card de Habilidade
const SkillCard = ({ skill, index }) => (
  <div
    className="opacity-0 animate-fade-in-up bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl flex items-center gap-4 p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <div className="flex-shrink-0">
        {skill.icon}
    </div>
    <h4 className="font-semibold text-[var(--color-text-primary)]">{skill.name}</h4>
  </div>
);

function Skills() {
  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="opacity-0 animate-fade-in-up text-4xl font-bold text-[var(--color-text-primary)]">Painel de Habilidades</h2>
          <p className="opacity-0 animate-fade-in-up text-[var(--color-text-secondary)] mt-2 text-lg" style={{ animationDelay: '150ms' }}>
            As tecnologias e ferramentas que utilizo para transformar ideias em realidade.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div key={category} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${300 + categoryIndex * 200}ms` }}>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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