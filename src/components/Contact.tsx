import React from 'react'

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to build something amazing together?</h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Whether you have a specific project in mind or just want to chat about Go microservices,
                        Kafka architectures, or frontend design, I'd love to hear from you.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:annalakshmi772002@gmail.com"
                            className="group relative w-full md:w-auto overflow-hidden rounded-2xl bg-white px-8 py-6 text-slate-950 transition-all hover:scale-105"
                        >
                            <div className="flex items-center justify-center">
                                <span className="mr-3 text-xl">📧</span>
                                <div className="text-left">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email Me</p>
                                    <p className="text-lg font-bold">annalakshmi772002@gmail.com</p>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/in/anna-lakshmi-a-b69247252"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full md:w-auto overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 px-8 py-6 text-white transition-all hover:scale-105 hover:border-primary-500/50"
                        >
                            <div className="flex items-center justify-center">
                                <span className="mr-3 text-xl">🔗</span>
                                <div className="text-left">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">LinkedIn</p>
                                    <p className="text-lg font-bold">Anna Lakshmi A</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="mt-16 p-8 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm">
                        <p className="text-slate-400 italic font-medium">
                            "Building the future, one line of code at a time."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
