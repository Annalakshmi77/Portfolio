import React from 'react'

const skillGroups = [
    {
        category: 'Backend & Infrastructure',
        skills: [
            { name: 'Go', level: 'Advanced', icon: '🐹' },
            { name: 'Kafka', level: 'Intermediate', icon: '📨' },
            { name: 'Prometheus', level: 'Intermediate', icon: '📉' },
            { name: 'Grafana', level: 'Intermediate', icon: '📊' },
        ]
    },
    {
        category: 'Full Stack Technologies',
        skills: [
            { name: 'React', level: 'Advanced', icon: '⚛️' },
            { name: 'TypeScript', level: 'Advanced', icon: '📘' },
            { name: 'Tailwind CSS', level: 'Advanced', icon: '🎨' },
            { name: 'Node.js', level: 'Intermediate', icon: '🟢' },
        ]
    },
    {
        category: 'Databases & Tools',
        skills: [
            { name: 'PostgreSQL', level: 'Intermediate', icon: '🐘' },
            { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
            { name: 'Git', level: 'Advanced', icon: '🌳' },
            { name: 'Docker', level: 'Intermediate', icon: '🐳' },
        ]
    }
]

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technical Arsenal</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillGroups.map((group) => (
                        <div key={group.category} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-primary-500/50 transition-colors group">
                            <h3 className="text-xl font-bold mb-8 text-primary-400">{group.category}</h3>
                            <div className="space-y-6">
                                {group.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center">
                                                <span className="text-xl mr-3">{skill.icon}</span>
                                                <span className="font-semibold">{skill.name}</span>
                                            </div>
                                            <span className="text-xs font-medium text-slate-500 uppercase tracking-tighter">{skill.level}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full bg-primary-500 rounded-full group-hover:bg-primary-400 transition-all duration-1000`}
                                                style={{ width: skill.level === 'Advanced' ? '85%' : '65%' }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
