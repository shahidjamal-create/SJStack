import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: 'SamaCoolLand',
        description: 'Professional service, repair, and sales of ACs, Refrigerators, and Washing Machines. 40+ years of trusted service with warranty on all repairs.',
        techStack: ['React', 'UI/UX Design', 'Tailwind'],
        githubLink: '',
        liveLink: 'https://samacool.netlify.app/',
        image: '/samacool-bg.png'
    },
    {
        title: 'Dynamic To-Do List App',
        description: 'A fully functional task management application featuring a clean user interface, task tracking, and persistent state management.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        githubLink: '',
        liveLink: 'https://sjcoder-to-do-list.onrender.com',
        image: '/taskflow.png'
    },
    {
        title: 'SJ Coder Bootstrap Theme',
        description: 'A fully responsive, mobile-first web project built with HTML, CSS, and the Bootstrap framework, featuring modern layouts and clean design.',
        techStack: ['HTML', 'CSS', 'Bootstrap'],
        githubLink: '',
        liveLink: 'https://sjcoder-bootstrap.netlify.app',
        image: '/bootstrap.png'
    },
    {
        title: 'Amazon E-Commerce Clone',
        description: 'A comprehensive, fully responsive clone of Amazon featuring a modern shopping interface, interactive product listings, and a dynamic shopping cart.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        githubLink: '',
        liveLink: 'https://sjcoder-amazon.netlify.app',
        image: '/amazon.png'
    },
    {
        title: 'Registration Form UI',
        description: 'A beautifully designed, responsive user registration interface featuring clean form validation and modern UI/UX principles.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        githubLink: '',
        liveLink: 'https://sjcoder-register-form.netlify.app',
        image: '/register.png'
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative mt-24 py-20">
            <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
                <div className="mb-12 flex flex-col items-center gap-6 text-center">
                    <motion.span 
                        initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                        className="text-sm font-bold uppercase tracking-[0.28em] text-teal-600"
                    >
                        Portfolio
                    </motion.span>
                    <motion.h2 
                        initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                        className="mt-4 text-4xl font-black text-slate-900 md:text-5xl"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p 
                        initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                        className="max-w-xl text-sm leading-7 text-slate-600 font-medium"
                    >
                        A selection of my recent work, showcasing my skills in full-stack development, UI/UX design, and problem-solving.
                    </motion.p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="group flex flex-col overflow-hidden rounded-3xl bg-white/50 border border-white/60 p-3 shadow-md shadow-teal-500/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-teal-200 hover:bg-white/80 hover:shadow-lg"
                        >
                            {/* Thumbnail Section */}
                            {project.image ? (
                                <div className="relative h-[220px] w-full overflow-hidden rounded-[1.25rem] shadow-sm">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10" />
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Subtle overlay effect on hover */}
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5 z-10 mix-blend-overlay" />
                                </div>
                            ) : (
                                <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-slate-50 to-slate-100/50 shadow-sm border border-slate-100">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 transition-all duration-500 group-hover:scale-110 group-hover:text-black/60">
                                        <Folder size={40} strokeWidth={1.5} />
                                    </div>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_0,_transparent_100%)]" />
                                </div>
                            )}

                            {/* Content Section */}
                            <div className="flex flex-1 flex-col px-3 pt-5 pb-2">
                                <h3 className="mb-2 text-xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-teal-600">
                                    {project.title}
                                </h3>
                                
                                <p className="mb-6 text-[14px] leading-relaxed text-slate-700 font-medium line-clamp-3">
                                    {project.description}
                                </p>
                                
                                <div className="mt-auto flex items-center justify-between border-t border-teal-100 pt-4">
                                    <ul className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, i) => (
                                            <li key={i} className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-700 transition-all duration-300 group-hover:bg-teal-100">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex shrink-0 items-center gap-2">
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-teal-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600 hover:shadow-md">
                                                <Github size={16} strokeWidth={2.5} />
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-teal-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600 hover:shadow-md group/arrow">
                                                <ArrowUpRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover/arrow:-translate-y-0.5 group-hover/arrow:translate-x-0.5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
