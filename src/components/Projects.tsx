import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, Code, Bot, Stethoscope, Bell } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const projects = [
    {
        title: 'Course Registration System',
        category: 'Backend Development',
        desc: 'A robust educational management system built for scalability and performance.',
        longDesc: 'Engineered a comprehensive backend for course management using Spring Boot and JPA. Features include student enrollment, course scheduling, and grade tracking with automated validation logic.',
        icon: <Code size={30} />,
        tech: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL'],
        github: '#',
        demo: '#',
        color: 'from-blue-500 to-cyan-500',
        lightGlow: 'rgba(59,130,246,0.12)',
    },
    {
        title: 'Telegram Document Q&A Bot',
        category: 'Workflow Automation',
        desc: 'An AI-powered bot that extracts and answers questions from user documents.',
        longDesc: 'Developed a seamless document processing pipeline using n8n. Integrates Telegram API, Google Sheets for logging, and LLM nodes to provide instant answers from uploaded PDFs.',
        icon: <Bot size={30} />,
        tech: ['n8n', 'Telegram API', 'Google Sheets', 'OpenAI'],
        github: '#',
        demo: '#',
        color: 'from-purple-500 to-indigo-500',
        lightGlow: 'rgba(139,92,246,0.12)',
    },
    {
        title: 'WhatsApp AI Medical Chatbot',
        category: 'AI / LLM',
        desc: 'Specialized healthcare assistant using RAG for accurate medical information.',
        longDesc: 'Built a production-grade medical assistant using LlamaIndex and Pinecone. Employs Retrieval-Augmented Generation (RAG) to ground the model on verified medical data, delivered via WhatsApp.',
        icon: <Stethoscope size={30} />,
        tech: ['LlamaIndex', 'Pinecone', 'Gemini', 'Flask'],
        github: '#',
        demo: '#',
        color: 'from-emerald-500 to-teal-500',
        lightGlow: 'rgba(16,185,129,0.12)',
    },
    {
        title: 'WhatsApp Reminder Workflow',
        category: 'Automation',
        desc: 'Automated notification system for enterprise reminders and follow-ups.',
        longDesc: 'Designed a highly reliable automation workflow that triggers time-sensitive reminders. Built with n8n, it handles multi-channel delivery and retry logic for mission-critical notifications.',
        icon: <Bell size={30} />,
        tech: ['n8n', 'WhatsApp API', 'CRON', 'Redis'],
        github: '#',
        demo: '#',
        color: 'from-orange-500 to-pink-500',
        lightGlow: 'rgba(249,115,22,0.12)',
    }
]

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <section id="projects" className="py-24 relative bg-transparent">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-5xl font-black mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}
                    >
                        Featured <span className="shimmer-text">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`max-w-2xl mx-auto ${isLight ? 'text-slate-500' : 'text-slate-400'}`}
                    >
                        A collection of technical solutions ranging from enterprise backend systems to cutting-edge AI automation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer relative"
                        >
                            <div
                                className={`rounded-3xl p-8 border h-full flex flex-col items-start gap-6 transition-all duration-500 ${isLight
                                        ? 'bg-white/85 border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 backdrop-blur-sm'
                                        : 'glass-card border-white/5'
                                    }`}
                                style={isLight ? {
                                    boxShadow: `0 4px 24px ${project.lightGlow}`,
                                } : undefined}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg`}>
                                    {project.icon}
                                </div>
                                <div>
                                    <span className={`text-xs font-bold tracking-widest uppercase mb-2 block ${isLight ? 'text-indigo-500' : 'text-indigo-400'}`}>
                                        {project.category}
                                    </span>
                                    <h3 className={`text-2xl font-bold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                                        {project.title}
                                    </h3>
                                    <p className={`line-clamp-2 text-sm leading-relaxed mb-6 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                                        {project.desc}
                                    </p>
                                </div>
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map(t => (
                                        <span
                                            key={t}
                                            className={`text-[10px] font-bold px-3 py-1 rounded-full border ${isLight
                                                    ? 'bg-indigo-50 text-indigo-600 border-indigo-100'
                                                    : 'bg-white/5 text-slate-400 border-white/5'
                                                }`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${isLight ? 'bg-slate-100 text-slate-500' : 'bg-white/5 text-slate-400'}`}>
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl ${isLight ? 'bg-slate-900/30' : 'bg-black/60'
                            }`}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className={`rounded-3xl p-8 md:p-12 max-w-3xl w-full relative shadow-2xl border ${isLight
                                    ? 'bg-white border-slate-200 shadow-indigo-100'
                                    : 'bg-[#0a0f1e] border-white/10'
                                }`}
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${isLight ? 'hover:bg-slate-100 text-slate-500' : 'hover:bg-white/5 text-slate-400'
                                    }`}
                            >
                                <X size={24} />
                            </button>

                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center text-white shadow-lg mb-8`}>
                                {selectedProject.icon}
                            </div>

                            <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${isLight ? 'text-indigo-500' : 'text-indigo-400'}`}>
                                {selectedProject.category}
                            </span>
                            <h3 className={`text-3xl md:text-4xl font-black mb-6 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                                {selectedProject.title}
                            </h3>

                            <p className={`text-lg leading-relaxed mb-8 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                                {selectedProject.longDesc}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-10">
                                {selectedProject.tech.map(t => (
                                    <span
                                        key={t}
                                        className={`px-4 py-2 rounded-full font-medium text-sm border ${isLight
                                                ? 'bg-indigo-50 border-indigo-100 text-indigo-700'
                                                : 'bg-white/5 border-white/5 text-slate-300'
                                            }`}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={selectedProject.github}
                                    className={`flex-1 min-w-[160px] flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold border transition-all ${isLight
                                            ? 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                                            : 'bg-white/5 hover:bg-white/10 text-white border-white/5'
                                        }`}
                                >
                                    <Github size={20} />
                                    View Code
                                </a>
                                <a
                                    href={selectedProject.demo}
                                    className="flex-1 min-w-[160px] flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-600/20"
                                >
                                    <ExternalLink size={20} />
                                    Live Demo
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Projects
