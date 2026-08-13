import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Cloud, Wrench, Zap } from 'lucide-react';

// card-based skill groups (kept for detailed stack view)
const skills = [
    { icon: Code2, title: 'Frontend', items: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'] },
    { icon: Database, title: 'Backend', items: ['Node.js', 'Express', 'GraphQL', 'REST APIs'] },
    { icon: Cpu, title: 'Programming', items: ['JavaScript', 'TypeScript', 'ES6+', 'OOP'] },
    { icon: Cloud, title: 'Cloud', items: ['AWS', 'Vercel', 'Netlify', 'Firebase'] },
    { icon: Zap, title: 'AI', items: ['GPT integrations', 'AI assistants', 'Smart automation'] },
    { icon: Wrench, title: 'Tools', items: ['Git', 'Figma', 'Docker', 'Vite'] }
];

// flat list with percentages for horizontal progress bars (matches the provided screenshot)
const skillLevels = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 75 },
    { name: 'JAVASCRPIT', percent: 85 },
    { name: 'REACT.JS', percent: 80 },
    { name: 'TEL', percent: 60 },
    { name: 'PHP', percent: 68 }
];

export default function SkillsSection() {
    return (
        <section id="skills" className="relative mt-24 py-20">
            <div className="mb-12 flex flex-col items-center gap-6 text-center">
                <div>
                    <span className="text-sm font-bold uppercase tracking-[0.28em] text-teal-600">Skills</span>
                    <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">Modern tech stack, performance, and premium UI.</h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-slate-600 font-medium">Every system is built with long-term maintainability, fast load times, and delightful motion.</p>
            </div>

            {/* Skill levels block (horizontal progress bars) */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {skillLevels.map((s) => (
                    <div key={s.name} className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-800">{s.name}</span>
                            <span className="text-sm font-bold text-slate-800">{s.percent}%</span>
                        </div>
                        <div className="h-3 w-full rounded-full bg-white/60 border border-white/40 shadow-inner">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${s.percent}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, ease: 'easeOut' }}
                                className="h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-600 shadow-sm shadow-teal-500/50"
                                role="progressbar"
                                aria-valuenow={s.percent}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: `${s.percent}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}




