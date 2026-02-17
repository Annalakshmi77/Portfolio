import React from 'react'

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] -z-10 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                    <h2 className="text-primary-400 font-medium tracking-wider mb-4 animate-fade-in">
                        HELLO, I'M ANNA LAKSHMI A
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                        Software Developer <br />
                        <span className="text-slate-400">& Full Stack Engineer</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
                        I specialize in building robust backend systems with <span className="text-white font-medium">Go</span>,
                        handling real-time data with <span className="text-white font-medium">Kafka</span>,
                        and ensuring reliability through <span className="text-white font-medium">Prometheus</span> monitoring.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-bold transition-all shadow-lg shadow-primary-500/25"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="https://linkedin.com/in/anna-lakshmi-a-b69247252"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 rounded-lg font-bold transition-all"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary-500 to-transparent mx-auto"></div>
            </div>
        </section>
    )
}

export default Hero
