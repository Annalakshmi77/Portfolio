import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Linkedin, Github, Mail, MapPin, ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Contact: React.FC = () => {
    const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')
    const { theme } = useTheme()
    const isLight = theme === 'light'

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFormState('sending')
        setTimeout(() => setFormState('sent'), 1500)
        setTimeout(() => setFormState('idle'), 4000)
    }

    const contactInfo = [
        { icon: <Mail size={20} />, label: 'Email', value: 'annalakshmi772002@gmail.com', href: 'mailto:annalakshmi772002@gmail.com' },
        { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'Anna Lakshmi A', href: 'https://linkedin.com/in/anna-lakshmi-a-b69247252', external: true },
        { icon: <Github size={20} />, label: 'GitHub', value: 'annalakshmi77', href: 'https://github.com/Annalakshmi77', external: true },
        { icon: <MapPin size={20} />, label: 'Location', value: 'Chennai, India' },
    ]

    return (
        <section id="contact" className="py-24 relative bg-transparent overflow-hidden">
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
                        Get In Touch
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left side: Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-4xl md:text-5xl font-black mb-6 leading-tight ${isLight ? 'text-slate-800' : 'text-white'}`}>
                            Let's build <span className="shimmer-text">something amazing</span> together.
                        </h2>
                        <p className={`text-lg leading-relaxed mb-12 max-w-lg ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                            Whether you're looking to discuss a new project, microservices architecture, or just want to connect — my inbox is always open.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, idx) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-5 group"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isLight
                                            ? 'bg-indigo-50 border border-indigo-100 text-indigo-500 group-hover:bg-indigo-100 group-hover:border-indigo-200'
                                            : 'bg-white/5 border border-white/10 text-primary-400 group-hover:bg-primary-500/10 group-hover:border-primary-500/30'
                                        }`}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                                            {info.label}
                                        </p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                target={info.external ? '_blank' : undefined}
                                                rel={info.external ? 'noopener noreferrer' : undefined}
                                                className={`font-bold flex items-center gap-1 transition-colors ${isLight
                                                        ? 'text-slate-700 hover:text-indigo-600'
                                                        : 'text-slate-200 hover:text-primary-400'
                                                    }`}
                                            >
                                                {info.value}
                                                {info.external && <ExternalLink size={12} className="opacity-50" />}
                                            </a>
                                        ) : (
                                            <p className={`font-bold ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>{info.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`rounded-3xl p-8 md:p-10 border relative ${isLight
                                ? 'bg-white/90 border-slate-200 shadow-xl shadow-indigo-100/50 backdrop-blur-sm'
                                : 'glass-card border-white/5'
                            }`}
                    >
                        {/* Decorative bloom */}
                        <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] pointer-events-none ${isLight ? 'bg-indigo-200/40' : 'bg-primary-500/10'
                            }`} />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className={`text-xs font-bold uppercase tracking-widest ml-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className={`w-full rounded-xl px-4 py-3 transition-all duration-200 outline-none ${isLight
                                                ? 'bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100'
                                                : 'bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-primary-500/50'
                                            }`}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className={`text-xs font-bold uppercase tracking-widest ml-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        className={`w-full rounded-xl px-4 py-3 transition-all duration-200 outline-none ${isLight
                                                ? 'bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100'
                                                : 'bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-primary-500/50'
                                            }`}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className={`text-xs font-bold uppercase tracking-widest ml-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    required
                                    placeholder="Project Inquiry"
                                    className={`w-full rounded-xl px-4 py-3 transition-all duration-200 outline-none ${isLight
                                            ? 'bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100'
                                            : 'bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-primary-500/50'
                                        }`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className={`text-xs font-bold uppercase tracking-widest ml-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className={`w-full rounded-xl px-4 py-3 resize-none transition-all duration-200 outline-none ${isLight
                                            ? 'bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100'
                                            : 'bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-primary-500/50'
                                        }`}
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={formState !== 'idle'}
                                type="submit"
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg ${formState === 'sent'
                                        ? 'bg-emerald-500 text-white'
                                        : isLight
                                            ? 'bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white shadow-indigo-200'
                                            : 'bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white shadow-primary-500/20'
                                    }`}
                            >
                                {formState === 'idle' && (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </>
                                )}
                                {formState === 'sending' && (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                )}
                                {formState === 'sent' && <span>Message Sent!</span>}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
