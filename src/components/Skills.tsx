import React from 'react'
import { useTheme } from '../context/ThemeContext'

const skillGroups = [
    {
        category: 'Backend & Infrastructure',
        color: 'from-cyan-500 to-blue-600',
        lightAccent: 'from-sky-400 to-blue-500',
        bg: 'bg-cyan-500/10',
        lightBg: 'bg-sky-50',
        border: 'border-cyan-500/20',
        lightBorder: 'border-sky-200',
        skills: [
            { name: 'Go', level: 85, icon: '⚡' },
            { name: 'Kafka', level: 70, icon: '📡' },
            { name: 'Prometheus', level: 68, icon: '📊' },
            { name: 'Grafana', level: 65, icon: '📈' },
        ]
    },
    {
        category: 'Full Stack Technologies',
        color: 'from-violet-500 to-purple-600',
        lightAccent: 'from-violet-400 to-purple-500',
        bg: 'bg-violet-500/10',
        lightBg: 'bg-violet-50',
        border: 'border-violet-500/20',
        lightBorder: 'border-violet-200',
        skills: [
            { name: 'React', level: 88, icon: '⚛️' },
            { name: 'TypeScript', level: 82, icon: '📘' },
            { name: 'Tailwind CSS', level: 85, icon: '🎨' },
            { name: 'Node.js', level: 72, icon: '🟢' },
        ]
    },
    {
        category: 'Databases & Tools',
        color: 'from-pink-500 to-rose-600',
        lightAccent: 'from-pink-400 to-rose-500',
        bg: 'bg-pink-500/10',
        lightBg: 'bg-pink-50',
        border: 'border-pink-500/20',
        lightBorder: 'border-pink-200',
        skills: [
            { name: 'PostgreSQL', level: 70, icon: '🐘' },
            { name: 'MongoDB', level: 72, icon: '🍃' },
            { name: 'Git', level: 88, icon: '🌳' },
            { name: 'Docker', level: 65, icon: '🐳' },
        ]
    }
]

const Skills: React.FC = () => {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section label */}
                <div className="flex items-center gap-4 mb-4">
                    <span className="gradient-line w-12" />
                    <span className={`font-semibold tracking-widest text-xs uppercase ${isLight ? 'text-indigo-500' : 'text-primary-400'}`}>
                        What I Know
                    </span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                    Technical Arsenal
                </h2>
                <p className={`mb-16 max-w-xl ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
                    Technologies and tools I've mastered to build exceptional digital experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillGroups.map((group) => (
                        <div
                            key={group.category}
                            className={`relative group rounded-2xl p-7 border transition-all duration-500 hover:-translate-y-1 ${isLight
                                    ? `${group.lightBg} ${group.lightBorder} bg-opacity-80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-indigo-100/60`
                                    : `glass-card ${group.border} hover:shadow-2xl`
                                }`}
                        >
                            {/* Gradient top bar */}
                            <div className={`h-1 w-full rounded-full mb-6 bg-gradient-to-r ${isLight ? group.lightAccent : group.color}`} />

                            <h3 className={`text-lg font-bold mb-8 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                                {group.category}
                            </h3>
                            <div className="space-y-6">
                                {group.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">{skill.icon}</span>
                                                <span className={`font-semibold text-sm ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className={`text-xs font-bold ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        {/* Progress bar */}
                                        <div className={`h-1.5 w-full rounded-full overflow-hidden ${isLight ? 'bg-white/80 border border-slate-200' : 'bg-slate-800'}`}>
                                            <div
                                                className={`h-full rounded-full transition-all duration-1000 bg-gradient-to-r ${isLight ? group.lightAccent : group.color}`}
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
