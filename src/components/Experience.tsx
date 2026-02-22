import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const experiences = [
    {
        role: 'Software Developer',
        company: 'SkillMine Technology',
        period: '2025 – Present',
        type: 'Full-time',
        description: 'Architecting and scaling backend microservices using Go. Leading the implementation of high-throughput data pipelines using Kafka and enhancing system reliability through comprehensive Prometheus and Grafana monitoring stacks.',
        highlights: [
            { name: 'Go Microservices', icon: '⚡' },
            { name: 'Kafka Streams', icon: '📡' },
            { name: 'Observability Stacks', icon: '📊' },
            { name: 'Enterprise APIs', icon: '🔗' }
        ],
        color: 'from-cyan-500 to-blue-500',
        lightColor: 'from-sky-400 to-blue-500',
        dot: 'bg-cyan-500',
        lightDot: 'bg-sky-500',
    },
    {
        role: 'Full Stack Developer',
        company: 'Technical Internships',
        period: '2024 – 2025',
        type: 'Internship',
        description: 'Engineered responsive full-stack applications with React & TypeScript. Specialized in developing performance-optimized frontend architectures and integrating complex RESTful services with modern authentication protocols.',
        highlights: [
            { name: 'Frontend Architecture', icon: '⚛️' },
            { name: 'TypeScript Integration', icon: '📘' },
            { name: 'API Orchestration', icon: '🌐' },
            { name: 'UI/UX Design', icon: '🎨' }
        ],
        color: 'from-violet-500 to-purple-500',
        lightColor: 'from-violet-400 to-purple-500',
        dot: 'bg-violet-500',
        lightDot: 'bg-violet-500',
    }
]

const Experience: React.FC = () => {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <section id="experience" className="py-28 relative bg-transparent">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-4"
                >
                    <span className="gradient-line w-12" />
                    <span className={`font-semibold tracking-widest text-xs uppercase ${isLight ? 'text-indigo-500' : 'text-primary-400'}`}>
                        Career Path
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-4xl md:text-5xl font-black mb-16 ${isLight ? 'text-slate-800' : 'text-white'}`}
                >
                    My Journey
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className={`absolute left-6 md:left-1/2 top-0 w-px -translate-x-1/2 origin-top ${isLight
                                    ? 'bg-gradient-to-b from-indigo-400 via-violet-400 to-transparent'
                                    : 'bg-gradient-to-b from-primary-500 via-indigo-500 to-transparent'
                                }`}
                        />

                        <div className="space-y-16">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-7 z-10">
                                        <div className={`w-4 h-4 rounded-full border-4 shadow-lg ${isLight
                                                ? `${exp.lightDot} border-white`
                                                : `${exp.dot} border-slate-950`
                                            }`} />
                                        <div className={`absolute inset-0 rounded-full opacity-30 animate-ping ${isLight ? exp.lightDot : exp.dot}`} />
                                    </div>

                                    {/* Empty spacer */}
                                    <div className="hidden md:block w-full" />

                                    {/* Card */}
                                    <div className={`w-full md:w-full pl-14 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className={`relative group rounded-2xl p-7 border transition-all duration-500 hover:-translate-y-1 ${isLight
                                                ? 'bg-white/85 border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-100/60 hover:border-indigo-200 backdrop-blur-sm'
                                                : 'glass-card border-white/5 hover:border-primary-500/20 hover:shadow-2xl'
                                            }`}>
                                            {/* Top gradient line */}
                                            <div className={`h-0.5 w-16 rounded-full mb-5 bg-gradient-to-r ${isLight ? exp.lightColor : exp.color}`} />

                                            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                                <div>
                                                    <h3 className={`text-xl font-black ${isLight ? 'text-slate-800' : 'text-white'}`}>{exp.role}</h3>
                                                    <p className={`font-medium mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{exp.company}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className={`text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${isLight ? exp.lightColor : exp.color}`}>
                                                        {exp.type}
                                                    </span>
                                                    <p className={`text-xs mt-1 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>{exp.period}</p>
                                                </div>
                                            </div>

                                            <p className={`text-sm leading-relaxed mb-5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                                                {exp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.highlights.map(h => (
                                                    <span
                                                        key={h.name}
                                                        className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 ${isLight
                                                                ? 'bg-indigo-50 border-indigo-100 text-indigo-700 hover:bg-indigo-100 hover:border-indigo-200'
                                                                : 'glass-card border-white/10 text-slate-300 hover:border-primary-500/30 hover:text-primary-300'
                                                            }`}
                                                    >
                                                        <span>{h.icon}</span>
                                                        <span>{h.name}</span>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
