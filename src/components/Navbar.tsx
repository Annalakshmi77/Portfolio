import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
)

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
    </svg>
)

const MenuIcon = ({ open }: { open: boolean }) => (
    <div className="w-5 flex flex-col gap-[5px] transition-all duration-300">
        <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-[6.5px]' : ''} bg-current`} />
        <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''} bg-current`} />
        <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''} bg-current`} />
    </div>
)

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    /* ── scroll + active section ── */
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20)
            const sections = navLinks.map(l => l.href.slice(1))
            let current = ''
            for (const id of sections) {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= 150) {
                    current = id
                }
            }
            setActiveSection(current)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? `py-3 backdrop-blur-xl border-b ${isDark
                    ? 'bg-[#030712]/85 border-white/[0.06] shadow-[0_1px_32px_rgba(0,0,0,0.4)]'
                    : 'bg-white/88 border-slate-200/80 shadow-[0_1px_24px_rgba(99,102,241,0.08)]'
                }`
                : 'py-5 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* ── Logo ── */}
                <a href="#" className="group flex items-center gap-3 select-none">
                    {/* Gradient ring badge */}
                    <div className="relative w-9 h-9 flex items-center justify-center rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative text-white text-sm font-black tracking-tight z-10">AL</span>
                    </div>
                    {/* Name */}
                    <div className="hidden sm:flex flex-col leading-none">
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Anna Lakshmi</span>
                        <span className={`text-[10px] font-medium tracking-widest uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Developer</span>
                    </div>
                </a>

                {/* ── Desktop nav links ── */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map(link => {
                        const isActive = activeSection === link.href.slice(1)
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                                    ? isDark
                                        ? 'text-white bg-white/[0.07]'
                                        : 'text-indigo-600 bg-indigo-50'
                                    : isDark
                                        ? 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
                                    }`}
                            >
                                {link.name}
                                {/* Active underline dot */}
                                {isActive && (
                                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isDark ? 'bg-indigo-400' : 'bg-indigo-500'}`} />
                                )}
                            </a>
                        )
                    })}
                </div>

                {/* ── Right controls ── */}
                <div className="flex items-center gap-2.5">

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={isDark ? 'Light mode' : 'Dark mode'}
                        className={`relative flex items-center w-[52px] h-[26px] rounded-full px-[3px] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 ${isDark
                            ? 'bg-slate-800 focus-visible:ring-offset-[#030712]'
                            : 'bg-indigo-100 focus-visible:ring-offset-white'
                            }`}
                    >
                        {/* Sun icon on left */}
                        <span className={`absolute left-[6px] transition-opacity duration-300 text-amber-400 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                            <SunIcon />
                        </span>
                        {/* Moon icon on right */}
                        <span className={`absolute right-[6px] transition-opacity duration-300 text-indigo-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                            <MoonIcon />
                        </span>
                        {/* Thumb */}
                        <span className={`relative block w-5 h-5 rounded-full shadow-sm transform transition-transform duration-500 ${isDark ? 'translate-x-[26px] bg-indigo-400' : 'translate-x-0 bg-amber-400'
                            }`} />
                    </button>

                    {/* Hire Me CTA */}
                    <a
                        href="#contact"
                        className={`hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white
                            bg-gradient-to-r from-indigo-500 to-violet-500
                            hover:from-indigo-400 hover:to-violet-400
                            transition-all duration-300 shadow-md shadow-indigo-500/25
                            hover:shadow-indigo-500/40 hover:scale-[1.03] active:scale-95`}
                    >
                        <span>Hire Me</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setMobileMenuOpen(o => !o)}
                        className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${isDark ? 'text-slate-300 hover:bg-white/5' : 'text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <MenuIcon open={mobileMenuOpen} />
                    </button>
                </div>
            </div>

            {/* ── Mobile drawer ── */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className={`px-6 py-5 flex flex-col gap-1 border-t ${isDark ? 'border-white/[0.06] bg-[#030712]/90 backdrop-blur-xl' : 'border-slate-100 bg-white/95 backdrop-blur-xl'
                    }`}>
                    {navLinks.map(link => {
                        const isActive = activeSection === link.href.slice(1)
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                    ? isDark ? 'bg-indigo-500/10 text-indigo-300' : 'bg-indigo-50 text-indigo-600'
                                    : isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                {isActive && <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-indigo-400' : 'bg-indigo-500'}`} />}
                                {link.name}
                            </a>
                        )
                    })}

                    {/* Mobile Hire Me */}
                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white
                            bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 transition-all shadow-md shadow-indigo-500/20"
                    >
                        Hire Me
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
