import { motion } from 'framer-motion';
import { Award, CalendarDays, Globe, Sparkles } from 'lucide-react';

const timeline = [
    { year: '2025', title: 'Lead Full Stack Developer', description: 'Led a premium SaaS redesign with 20% conversion lift.' },
    { year: '2023', title: 'Senior UI Architect', description: 'Created a modern web platform with immersive animations.' },
    { year: '2021', title: 'Frontend Engineer', description: 'Built high-performance React apps for enterprise clients.' }
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06
        }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function AboutSection() {
    return (
        <section id="about" className="relative mt-24 py-20">
            <div className="relative overflow-hidden rounded-[40px] border border-white/60 bg-white/40 p-8 shadow-xl shadow-teal-500/5 backdrop-blur-xl">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/60 to-transparent blur-3xl" />
                <div className="flex flex-col items-center text-center">
                    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col items-center">
                        <motion.span variants={fadeUp} className="text-sm font-bold uppercase tracking-[0.28em] text-teal-600">About</motion.span>
                        <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">A premium journey — craft, learn, deliver.</motion.h2>

                        <motion.div variants={fadeUp} className="mt-6 max-w-3xl">
                            <motion.div variants={fadeUp} className="text-base leading-loose text-slate-700 font-medium max-w-3xl mx-auto space-y-6">
                                <p>
                                    I’m a passionate Web & Full-Stack Developer focused on creating modern, responsive, and user-friendly web applications. I have hands-on experience working with HTML, CSS, JavaScript, React, and Tailwind CSS, while continuously expanding my full-stack development skills with Python.
                                </p>
                                <p>
                                    During my 1-month internship at Aspirasy, I gained practical exposure to web development, AI tools, and deployment platforms. I later completed a 4-month internship focused on full-stack web development, where I worked with JavaScript, React.js, and Python to develop real-world applications and strengthen my development workflow.
                                </p>
                                <p>
                                    Alongside my internship experience, I’ve built and worked on multiple personal projects, including web applications and my own portfolio website. These projects have helped me improve my problem-solving skills, understand real-world development practices, and gain confidence in building complete and responsive interfaces.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-4">
                                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/30 transition duration-300 hover:bg-teal-700 hover:shadow-xl">
                                    Let's Collaborate
                                </a>
                                <a href="/resume.pdf" target="_blank" className="inline-flex items-center justify-center rounded-full border border-teal-200 bg-white/50 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition duration-300 hover:border-teal-300 hover:bg-white hover:text-teal-600">
                                    Download Resume
                                </a>
                            </motion.div>
                        </motion.div>


                    </motion.div>


                </div>
            </div>
        </section>
    );
}



