import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

// Floating technology symbols
const techSymbols = [
    { text: '🐹', top: '8%', left: '82%', delay: '0s', dur: '5s', color: '#38bdf8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.25)' },
    { text: '⚛️', top: '15%', left: '68%', delay: '0.4s', dur: '6s', color: '#f87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.25)' },
    { text: '{ }', top: '7%', left: '60%', delay: '0.8s', dur: '4.5s', color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.25)' },
    { text: '🐋', top: '12%', left: '92%', delay: '1.2s', dur: '5.5s', color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.25)' },
    { text: '🤖', top: '35%', left: '65%', delay: '0.3s', dur: '4s', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.25)' },
    { text: '📡', top: '40%', left: '88%', delay: '1.6s', dur: '6.5s', color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.25)' },
    { text: '⚡', top: '48%', left: '70%', delay: '2s', dur: '5s', color: '#38bdf8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.25)' },
    { text: '📦', top: '45%', left: '80%', delay: '0.6s', dur: '4.8s', color: '#f472b6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.25)' },
    { text: '🧠', top: '65%', left: '62%', delay: '1s', dur: '5.5s', color: '#818cf8', bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.25)' },
    { text: 'Git', top: '60%', left: '90%', delay: '1.8s', dur: '4.5s', color: '#38bdf8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.25)' },
    { text: '⚙️', top: '70%', left: '75%', delay: '2.2s', dur: '5s', color: '#fb923c', bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.25)' },
    { text: 'TS', top: '63%', left: '92%', delay: '0.9s', dur: '6s', color: '#f472b6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.25)' },
    { text: '</>', top: '85%', left: '68%', delay: '1.4s', dur: '5s', color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,146,60,0.2)' },
    { text: '=>', top: '82%', left: '85%', delay: '2.5s', dur: '4.5s', color: '#38bdf8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.25)' },
    { text: '[]', top: '78%', left: '72%', delay: '0.7s', dur: '5s', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.25)' },
    { text: '()', top: '85%', left: '78%', delay: '3s', dur: '6s', color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.25)' },
    { text: '🔥', top: '25%', left: '80%', delay: '1.5s', dur: '5s', color: '#f97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.25)' },
    { text: '🚀', top: '55%', left: '95%', delay: '2.1s', dur: '4s', color: '#ec4899', bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.25)' },
    { text: '++', top: '30%', left: '75%', delay: '1.8s', dur: '4.8s', color: '#38bdf8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.25)' },
    { text: '&&', top: '42%', left: '82%', delay: '2.4s', dur: '5.2s', color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.25)' },
]

const Hero: React.FC = () => {
    const [typedText, setTypedText] = useState('')
    const fullText = "Full Stack Developer | AI Workflow Builder"
    const { theme } = useTheme()
    const isLight = theme === 'light'

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i))
            i++
            if (i > fullText.length) clearInterval(interval)
        }, 80)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-800/5 rounded-full blur-[200px]" />

            {/* Floating AI / Tech Symbols */}
            {techSymbols.map((sym, i) => (
                <div
                    key={i}
                    className="absolute select-none pointer-events-none font-black animate-float px-3 py-1.5 rounded-lg border backdrop-blur-[2px] text-xs transition-all duration-300"
                    style={{
                        top: sym.top,
                        left: sym.left,
                        animationDelay: sym.delay,
                        animationDuration: sym.dur,
                        color: sym.color,
                        backgroundColor: isLight ? sym.bg.replace('0.08', '0.14') : sym.bg,
                        borderColor: isLight ? sym.border.replace('0.25', '0.4') : sym.border,
                        boxShadow: `0 4px 12px ${sym.bg}`,
                        opacity: isLight ? 0.85 : 1,
                    }}
                >
                    {sym.text}
                </div>
            ))}

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl">
                    {/* Greeting */}
                    <p
                        className={`font-semibold tracking-[0.3em] text-sm uppercase mb-6 animate-fade-up ${isLight ? 'text-indigo-500' : 'text-primary-400'}`}
                        style={{ animationDelay: '0.1s' }}
                    >
                        Hello, I'm Anna Lakshmi A
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                        <span className={isLight ? 'text-slate-800' : 'text-white'}>Software</span><br />
                        <span className="shimmer-text">Developer</span><br />
                        <span className={`text-4xl md:text-5xl font-light ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                            &amp; Full Stack Engineer
                        </span>
                    </h1>

                    {/* Typed description */}
                    <p
                        className={`text-xl md:text-2xl font-medium min-h-[3rem] mb-12 leading-relaxed animate-fade-up ${isLight ? 'text-slate-500' : 'text-slate-400'
                            }`}
                        style={{ animationDelay: '0.4s' }}
                    >
                        {typedText}
                        <span className={`w-1 h-6 md:h-8 inline-block align-middle ml-1 animate-pulse ${isLight ? 'bg-indigo-500' : 'bg-primary-500'}`} />
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden
                            bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400
                            transition-all duration-300 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105"
                        >
                            <span className="relative z-10">Get In Touch →</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/anna-lakshmi-a-b69247252"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 ${isLight
                                ? 'bg-white/80 border border-indigo-200 text-indigo-700 hover:border-indigo-400 hover:bg-white shadow-sm hover:shadow-indigo-100'
                                : 'glass-card text-white border border-white/10 hover:border-primary-500/40'
                                }`}
                        >
                            <span>LinkedIn Profile</span>
                        </a>
                        <a
                            href="#"
                            className={`group px-8 py-4 rounded-full font-bold transition-all duration-300 ${isLight
                                ? 'text-slate-600 border border-slate-300 hover:border-slate-500 hover:text-slate-800'
                                : 'text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white'
                                }`}
                        >
                            <span>Download CV</span>
                        </a>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-3 mt-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                        {['Go', 'Kafka', 'React', 'TypeScript', 'Prometheus', 'Docker'].map((tech) => (
                            <span
                                key={tech}
                                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-default ${isLight
                                    ? 'light-pill hover:shadow-sm'
                                    : 'glass-card border border-white/10 text-slate-300 hover:border-primary-500/40 hover:text-primary-300'
                                    }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className={`text-xs uppercase tracking-widest ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>Scroll</span>
                <div className={`w-px h-10 rounded-full bg-gradient-to-b ${isLight ? 'from-indigo-400' : 'from-primary-500'} to-transparent`} />
            </div>
        </section>
    )
}

export default Hero
