import React from 'react'

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-slate-950 rounded-2xl p-8 border border-slate-800">
                                <span className="text-primary-400 font-bold text-6xl mb-4 block">1</span>
                                <p className="text-xl text-slate-300 font-medium">Year Professional Experience</p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center text-slate-400">
                                        <span className="w-2 h-2 rounded-full bg-primary-500 mr-3"></span>
                                        Full Stack Development
                                    </div>
                                    <div className="flex items-center text-slate-400">
                                        <span className="w-2 h-2 rounded-full bg-primary-500 mr-3"></span>
                                        Backend Specialization
                                    </div>
                                    <div className="flex items-center text-slate-400">
                                        <span className="w-2 h-2 rounded-full bg-primary-500 mr-3"></span>
                                        Real-time Data Processing
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            I am a passionate Software Developer with a strong foundation in Full Stack Development. over the past year,
                            I have focused on building scalable backend solutions using Go and managing high-throughput data streams with Kafka.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            My approach combines technical rigor with a user-centric mindset. I am well-versed in Prometheus for
                            observability, ensuring that the systems I build are not just efficient but also highly maintainable
                            and visible.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-white mb-2">Location</h4>
                                <p className="text-slate-400">Chennai, India</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-2">Degree</h4>
                                <p className="text-slate-400">B.Tech (Computer Science)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
