import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Folder, Sparkles, Layers, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 'nns-enterprises',
        title: 'NNS Enterprises',
        badge: 'Production B2B',
        category: 'Web Apps',
        featured: true,
        description: 'Comprehensive industrial plastic scrap and recycled polymer commercial trading platform. Features live trading feedstock feeds, interactive logistics container volume calculator, dynamic material catalog, and instant RFQ quotation requests.',
        techStack: ['React', 'Tailwind CSS', 'Vite', 'UI/UX Design'],
        githubLink: '',
        liveLink: 'https://nnsenterprises.netlify.app/',
        image: '/nns-enterprises.png'
    },
    {
        id: 'samacool',
        title: 'SamaCoolLand',
        badge: 'Commercial Service',
        category: 'Web Apps',
        featured: true,
        description: 'Professional service, repair, and sales platform for ACs, Refrigerators, and Washing Machines. 40+ years of trusted service legacy with warranty guarantees and fast service booking.',
        techStack: ['React', 'Tailwind CSS', 'UI/UX Design'],
        githubLink: '',
        liveLink: 'https://samacool.netlify.app/',
        image: '/samacool-bg.png'
    },
    {
        id: 'todo-app',
        title: 'Dynamic To-Do List App',
        badge: 'Full Stack App',
        category: 'Web Apps',
        featured: false,
        description: 'A fully functional task management application featuring a clean user interface, real-time filtering, persistent state management, and intuitive task tracking.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
        githubLink: '',
        liveLink: 'https://sjcoder-to-do-list.onrender.com',
        image: '/taskflow.png'
    },
    {
        id: 'amazon-clone',
        title: 'Amazon E-Commerce Clone',
        badge: 'E-Commerce UI',
        category: 'Frontend & UI',
        featured: false,
        description: 'A comprehensive, fully responsive clone of Amazon featuring a modern shopping interface, interactive product listings, category navigation, and a dynamic shopping cart.',
        techStack: ['HTML5', 'CSS3', 'JavaScript'],
        githubLink: '',
        liveLink: 'https://sjcoder-amazon.netlify.app',
        image: '/amazon.png'
    },
    {
        id: 'bootstrap-theme',
        title: 'SJ Coder Bootstrap Theme',
        badge: 'Responsive UI',
        category: 'Frontend & UI',
        featured: false,
        description: 'A fully responsive, mobile-first web project built with HTML, CSS, and the Bootstrap 5 framework, featuring modern layouts, custom cards, and clean visual hierarchy.',
        techStack: ['HTML5', 'CSS3', 'Bootstrap 5'],
        githubLink: '',
        liveLink: 'https://sjcoder-bootstrap.netlify.app',
        image: '/bootstrap.png'
    },
    {
        id: 'register-form',
        title: 'Registration Form UI',
        badge: 'Form UX & Validation',
        category: 'Frontend & UI',
        featured: false,
        description: 'A beautifully designed, responsive user registration interface featuring clean client-side form validation, sleek glassmorphism styling, and modern UI/UX principles.',
        techStack: ['HTML5', 'CSS3', 'JavaScript'],
        githubLink: '',
        liveLink: 'https://sjcoder-register-form.netlify.app',
        image: '/register.png'
    }
];

const categories = ['All', 'Web Apps', 'Frontend & UI'];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="relative mt-24 py-16 sm:py-20 scroll-mt-28 sm:scroll-mt-32">
            <div className="w-full">
                {/* Section Header */}
                <div className="mb-12 flex flex-col items-center gap-4 text-center sm:gap-6">
                    <motion.div 
                        initial="hidden" 
                        whileInView="show" 
                        viewport={{ once: true }} 
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full border border-teal-200/60 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-teal-700 shadow-sm backdrop-blur-md"
                    >
                        <Sparkles size={14} className="text-teal-600" />
                        <span>Featured Work</span>
                    </motion.div>

                    <motion.h2 
                        initial="hidden" 
                        whileInView="show" 
                        viewport={{ once: true }} 
                        variants={fadeUp}
                        className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
                    >
                        Crafted with Purpose & Precision
                    </motion.h2>

                    <motion.p 
                        initial="hidden" 
                        whileInView="show" 
                        viewport={{ once: true }} 
                        variants={fadeUp}
                        className="max-w-2xl text-sm leading-relaxed text-slate-600 font-medium sm:text-base"
                    >
                        Explore my latest commercial applications, interactive full-stack platforms, and modern responsive web systems built for real-world impact.
                    </motion.p>

                    {/* Category Filter Pills */}
                    <motion.div 
                        initial="hidden" 
                        whileInView="show" 
                        viewport={{ once: true }} 
                        variants={fadeUp}
                        className="mt-4 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/40 p-1.5 shadow-sm backdrop-blur-xl"
                    >
                        {categories.map((cat) => {
                            const count = cat === 'All' 
                                ? projects.length 
                                : projects.filter((p) => p.category === cat).length;
                            const isActive = activeCategory === cat;

                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all duration-300 sm:text-sm ${
                                        isActive
                                            ? 'bg-teal-600 text-white shadow-md shadow-teal-500/30'
                                            : 'text-slate-600 hover:bg-white/80 hover:text-teal-700'
                                    }`}
                                >
                                    <span>{cat}</span>
                                    <span className={`inline-flex h-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
                                        isActive ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-700'
                                    }`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.article
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                                transition={{ duration: 0.4 }}
                                className="group flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-3.5 shadow-lg shadow-teal-500/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-teal-300/80 hover:bg-white/90 hover:shadow-xl hover:shadow-teal-500/10 sm:p-4"
                            >
                                {/* Thumbnail Section */}
                                <div className="relative h-[210px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-inner sm:h-[220px]">
                                    {/* Top Status Badges */}
                                    <div className="absolute left-3 top-3 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/85 px-3 py-1 text-[11px] font-bold text-white shadow-sm backdrop-blur-md">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                        </span>
                                        <span>{project.badge}</span>
                                    </div>

                                    {project.featured && (
                                        <div className="absolute right-3 top-3 z-20 flex items-center gap-1 rounded-full bg-teal-600/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
                                            <Sparkles size={11} className="text-teal-200" />
                                            <span>Featured</span>
                                        </div>
                                    )}

                                    {project.image ? (
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="block h-full w-full"
                                            title={`Open ${project.title}`}
                                        >
                                            <img 
                                                src={project.image} 
                                                alt={project.title} 
                                                loading="lazy"
                                                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                            {/* Hover overlay hint */}
                                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/20 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-md">
                                                    <span>View Live Site</span>
                                                    <ExternalLink size={13} />
                                                </span>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm text-slate-400">
                                                <Folder size={32} />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-1 flex-col px-1.5 pb-1 pt-4 sm:px-2">
                                    <div className="flex items-start justify-between gap-2">
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="group/link inline-flex items-center gap-1 text-lg font-black tracking-tight text-slate-900 transition-colors hover:text-teal-600 sm:text-xl"
                                        >
                                            <span>{project.title}</span>
                                            <ArrowUpRight size={17} className="text-teal-600 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                        </a>
                                    </div>
                                    
                                    <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600 line-clamp-3 min-h-[3.6rem] sm:text-sm">
                                        {project.description}
                                    </p>
                                    
                                    {/* Tech Stack Chips */}
                                    <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                                        {project.techStack.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                className="inline-flex items-center rounded-lg border border-teal-100 bg-teal-50/80 px-2.5 py-1 text-[11px] font-bold tracking-wide text-teal-700 transition-colors group-hover:bg-teal-100/70"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Bar */}
                                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-teal-100/70 pt-4">
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm shadow-teal-500/20 transition-all duration-300 hover:bg-teal-700 hover:shadow-md hover:scale-[1.01] active:scale-[0.98]"
                                        >
                                            <span>Visit Live Site</span>
                                            <ArrowUpRight size={15} strokeWidth={2.5} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </a>

                                        {project.githubLink && (
                                            <a 
                                                href={project.githubLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                aria-label={`${project.title} GitHub Repository`}
                                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600 hover:shadow-md"
                                            >
                                                <Github size={17} strokeWidth={2.2} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
