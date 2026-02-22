import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const stats = [
    { value: '1+', label: 'Year Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '3', label: 'Core Technologies' },
]

const coreSkills = [
    { name: 'Backend Development (Go)', level: 90, color: 'bg-primary-500', lightColor: 'bg-indigo-500' },
    { name: 'Event-Driven Architecture (Kafka)', level: 85, color: 'bg-indigo-500', lightColor: 'bg-violet-500' },
    { name: 'Professional Monitoring (Prometheus)', level: 80, color: 'bg-violet-500', lightColor: 'bg-purple-500' },
]

const About: React.FC = () => {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <section id="about" className="py-28 relative bg-transparent">
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
                        Professional Overview
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-4xl md:text-5xl font-black mb-16 ${isLight ? 'text-slate-800' : 'text-white'}`}
                >
                    About Me
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left: Bio & Progress Bars */}
                    <div className="w-full lg:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`space-y-6 text-lg leading-relaxed mb-12 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
                        >
                            <p>
                                I am a dedicated{' '}
                                <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>Software Developer</span>{' '}
                                with a demonstrated history of building robust and scalable digital solutions.
                                My expertise lies in architecting high-performance backend systems using{' '}
                                <span className={`font-semibold ${isLight ? 'text-indigo-600' : 'text-primary-300'}`}>Go</span> and
                                designing real-time event-driven data architectures with{' '}
                                <span className={`font-semibold ${isLight ? 'text-violet-600' : 'text-indigo-300'}`}>Kafka</span>.
                            </p>
                            <p>
                                With a focus on{' '}
                                <span className={`font-semibold ${isLight ? 'text-purple-600' : 'text-violet-300'}`}>Observability</span>{' '}
                                and system reliability, I leverage tools like Prometheus and Grafana to ensure that every system I build is not only performant but also measurable and resilient.
                            </p>
                        </motion.div>

                        {/* Animated Progress Bars */}
                        <div className="space-y-8 max-w-xl">
                            {coreSkills.map((skill, i) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className={`text-sm font-bold ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                                            {skill.name}
                                        </span>
                                        <span className={`text-sm font-bold ${isLight ? 'text-indigo-500' : 'text-primary-400'}`}>
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className={`h-2 w-full rounded-full overflow-hidden border ${isLight
                                            ? 'bg-indigo-50 border-indigo-100'
                                            : 'bg-white/5 border-white/5'
                                        }`}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className={`h-full rounded-full relative ${isLight ? skill.lightColor : skill.color}`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Stats & Info Cards */}
                    <div className="w-full lg:w-5/12 space-y-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`rounded-2xl p-5 text-center transition-all duration-300 ${isLight
                                            ? 'bg-white/80 border border-indigo-100 shadow-sm hover:shadow-indigo-100 hover:border-indigo-200'
                                            : 'glass-card border border-white/5 hover:border-primary-500/30'
                                        }`}
                                >
                                    <p className="text-3xl font-black shimmer-text">{s.value}</p>
                                    <p className={`text-[10px] mt-1 font-bold uppercase tracking-tighter ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
                                        {s.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Profile Details Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group lg:mt-6"
                        >
                            <div className={`absolute -inset-px rounded-2xl blur-sm opacity-50 group-hover:opacity-80 transition duration-700 ${isLight
                                    ? 'bg-gradient-to-br from-indigo-300/40 via-violet-200/30 to-purple-300/40'
                                    : 'bg-gradient-to-br from-primary-500/30 via-indigo-500/20 to-violet-500/30'
                                }`} />
                            <div className={`relative rounded-2xl p-8 border ${isLight
                                    ? 'bg-white/85 border-indigo-100 shadow-sm'
                                    : 'glass-card border-white/5'
                                }`}>
                                <h3 className={`font-bold mb-6 text-lg border-l-4 pl-4 ${isLight ? 'text-slate-800 border-indigo-500' : 'text-white border-primary-500'
                                    }`}>
                                    Key Information
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Location', value: 'Chennai, India' },
                                        { label: 'Focus', value: 'Full Stack & AI' },
                                        { label: 'Email', value: 'anna.lakshmi@mine.com' },
                                        { label: 'Availability', value: 'Immediate' },
                                    ].map(item => (
                                        <div
                                            key={item.label}
                                            className={`flex justify-between items-center py-2 border-b last:border-0 ${isLight ? 'border-slate-100' : 'border-white/5'
                                                }`}
                                        >
                                            <span className={`text-xs uppercase tracking-widest font-bold ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                                                {item.label}
                                            </span>
                                            <span className={`font-medium text-sm ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
