// src/pages/skills.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
// 1. Importe a biblioteca de Tooltip
import { Tooltip } from 'react-tooltip';
import {
    SiHtml5, SiCss3, SiJavascript, SiPhp, SiPython, SiReact, SiNodedotjs,
    SiMysql, SiMongodb, SiGithub, SiUnity, SiGodotengine,
    SiLinux, SiBootstrap, SiTailwindcss, SiArduino, SiFlutter
} from 'react-icons/si';
import { PiFileCSharp } from "react-icons/pi";
import useMetaTags from '../hooks/useMetaTags';

// O SkillCard agora terá atributos 'data-tooltip-id' e 'data-tooltip-content'
const SkillCard = ({ skill, index }) => (
    <div
        // 2. Adicione os atributos para conectar ao tooltip
        data-tooltip-id="skill-tooltip"
        data-tooltip-content={skill.description}
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
    const { t } = useTranslation();
    useMetaTags(
        `Davi Passos | ${t('titles.skills')}`,
        t('siteDescription'),
        'https://github.com/Da6-Dev/Dav.I-Portifolio/blob/master/cover.png?raw=true' // Link para a sua imagem de preview
    );

    const skillsData = {
        [t('skills.frontend')]: [
            { name: "HTML", icon: <SiHtml5 size={28} className="text-orange-500" />, description: t('skills.frontendHtmlDesc') },
            { name: "CSS", icon: <SiCss3 size={28} className="text-blue-500" />, description: t('skills.frontendCssDesc') },
            { name: "JavaScript (ES6+)", icon: <SiJavascript size={28} className="text-yellow-400" />, description: t('skills.frontendJsDesc') },
            { name: "React", icon: <SiReact size={28} className="text-cyan-400" />, description: t('skills.frontendReactDesc') },
            { name: "Flutter", icon: <SiFlutter size={28} className="text-sky-500" />, description: t('skills.frontendFlutterDesc') },
            { name: "Bootstrap", icon: <SiBootstrap size={28} className="text-purple-600" />, description: t('skills.frontendBootstrapDesc') },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-teal-400" />, description: t('skills.frontendTailwindDesc') },
        ],
        [t('skills.backend')]: [
            { name: "Node.js", icon: <SiNodedotjs size={28} className="text-green-500" />, description: t('skills.backendNodeDesc') },
            { name: "PHP", icon: <SiPhp size={28} className="text-indigo-400" />, description: t('skills.backendPhpDesc') },
            { name: "Python", icon: <SiPython size={28} className="text-blue-400" />, description: t('skills.backendPythonDesc') },
            { name: "MySQL", icon: <SiMysql size={28} className="text-blue-600" />, description: t('skills.backendMysqlDesc') },
            { name: "MongoDB", icon: <SiMongodb size={28} className="text-green-400" />, description: t('skills.backendMongoDesc') },
        ],
        [t('skills.gamedev')]: [
            { name: "Unity", icon: <SiUnity size={28} className="text-neutral-300" />, description: t('skills.gamedevUnityDesc') },
            { name: "Godot", icon: <SiGodotengine size={28} className="text-sky-400" />, description: t('skills.gamedevGodotDesc') },
            { name: "C#", icon: <PiFileCSharp size={28} className="text-purple-500" />, description: t('skills.gamedevCsharpDesc') },
        ],
        [t('skills.tools')]: [
            { name: "Git/GitHub", icon: <SiGithub size={28} className="text-neutral-400" />, description: t('skills.toolsGitDesc') },
            { name: "Linux", icon: <SiLinux size={28} className="text-yellow-300" />, description: t('skills.toolsLinuxDesc') },
            { name: "Arduino", icon: <SiArduino size={28} className="text-teal-500" />, description: t('skills.toolsArduinoDesc') },
        ]
    };

    return (
        <section className="py-20 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="opacity-0 animate-fade-in-up text-4xl font-bold text-[var(--color-text-primary)]">{t('skills.title')}</h2>
                    <p className="opacity-0 animate-fade-in-up text-[var(--color-text-secondary)] mt-2 text-lg" style={{ animationDelay: '150ms' }}>
                        {t('skills.subtitle')}
                    </p>
                </div>
                <div className="space-y-12">
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                        <div key={category} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${300 + categoryIndex * 200}ms` }}>
                            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">{category}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {skills.map((skill, skillIndex) => (
                                    <SkillCard key={skill.name} skill={skill} index={skillIndex} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* 3. Renderize o componente Tooltip na página */}
            <Tooltip
                id="skill-tooltip"
                place="bottom"
                style={{
                    backgroundColor: "var(--color-bg-secondary)",
                    color: "var(--color-text-primary)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    maxWidth: "250px",
                    textAlign: "center",
                    fontSize: "14px",
                    padding: "8px 12px",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.1)"
                }}
            />
        </section>
    );
}

export default Skills;