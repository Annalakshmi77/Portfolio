import React from 'react'

const experiences = [
    {
        role: 'Software Developer',
        company: 'Previous Company',
        period: '2025 - Present',
        description: 'Specializing in Go-based backend systems and infrastructure monitoring. Implemented real-time data pipelines using Kafka and improved system observability with Prometheus and Grafana dashboards.',
        highlights: [
            'Architected Go microservices',
            'Optimized Kafka producer/consumer performance',
            'Deployed monitoring stacks'
        ]
    },
    {
        role: 'Full Stack Developer',
        company: 'Previous Company/Project',
        period: '2024 - 2025',
        description: 'Developed end-to-end web applications using React, TypeScript, and Node.js. Focused on building responsive UIs and integrating complex backend APIs.',
        highlights: [
            'Built interactive React dashboards',
            'Integrated REST & GraphQL APIs',
            'Implemented secure authentication flows'
        ]
    }
]

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">My Journey</h2>

                <div className="max-w-4xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>

                            <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-950 z-10"></div>

                                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                                    <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-primary-500/30 transition-all">
                                        <span className="text-primary-500 font-bold text-sm uppercase tracking-widest">{exp.period}</span>
                                        <h3 className="text-2xl font-bold mt-2 mb-1">{exp.role}</h3>
                                        <p className="text-slate-400 font-medium mb-4">{exp.company}</p>
                                        <p className="text-slate-500 mb-6 leading-relaxed">{exp.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.highlights.map(h => (
                                                <span key={h} className="text-xs font-semibold px-3 py-1 bg-slate-900 text-slate-300 rounded-full border border-slate-800">
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
