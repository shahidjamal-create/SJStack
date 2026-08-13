import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const history = [
    { title: 'Strategic Web Design', subtitle: 'Consulted for premium SaaS and fintech', date: '2025' },
    { title: 'Scalable React Platforms', subtitle: 'Delivered robust product experiences', date: '2023' },
    { title: 'Immersive UI Systems', subtitle: 'Built motion-led design systems', date: '2021' }
];

export default function ExperienceSection() {
    return (
        <section className="relative mt-24 py-20">
            <div className="mb-12 flex items-center justify-between gap-6">
                <div>
                    <span className="text-sm uppercase tracking-[0.28em] text-cyan">Experience</span>
                    <h2 className="mt-4 text-4xl font-black text-black md:text-5xl">Professional journey and trusted expertise.</h2>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white/70 px-5 py-4 text-sm text-black shadow-soft">
                    <div className="flex items-center gap-2 text-cyan">
                        <Calendar size={16} />
                        <span>11+ years building premium products</span>
                    </div>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <div className="glass rounded-[40px] border border-slate-200 p-8 shadow-soft">
                    <div className="mb-8 flex items-center gap-4 rounded-3xl bg-white/70 p-5 text-sm text-black">
                        <Briefcase className="h-5 w-5 text-cyan" />
                        <span>High-end experiences, product strategy, and modern web architecture.</span>
                    </div>
                    <div className="space-y-6">
                        {history.map((item) => (
                            <motion.div key={item.title} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-slate-200 bg-white/50 p-6">
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-black">{item.date}</span>
                                </div>
                                <p className="mt-3 text-sm leading-7 text-black">{item.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-[40px] border border-slate-200 p-8 shadow-soft">
                    <div className="mb-8 rounded-3xl border border-slate-200 bg-white/70 p-6">
                        <div className="flex items-center gap-3 text-sm text-cyan">
                            <MapPin className="h-5 w-5" />
                            <span>Remote-first | Global teams | Agency partners</span>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="rounded-3xl border border-slate-200 bg-white/50 p-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-cyan">Core strength</p>
                            <h3 className="mt-3 text-2xl font-semibold text-black">Design systems & product ecosystems</h3>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white/50 p-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-cyan">Quality focus</p>
                            <h3 className="mt-3 text-2xl font-semibold text-black">High-performance React with modern UX</h3>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}




