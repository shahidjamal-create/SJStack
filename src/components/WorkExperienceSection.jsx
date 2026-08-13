import { motion } from 'framer-motion';
import { Briefcase, Download, ExternalLink } from 'lucide-react';

const workExperience = [
    {
        title: '4-Month Internship in Web Development & Software Engineering',
        company: 'Aspirasys, Chennai',
        date: 'Oct 2025 – Jan 2026',
        description: 'Successfully completed a 4-month intensive internship at Aspirasys, gaining in-depth practical experience in full-stack web development, building responsive user interfaces, integrating backend APIs, and deploying production web applications.',
        certificateLink: '#'
    },
    {
        title: '1-Month Internship in Web Development, AI Tools & Deployment',
        company: 'Aspirasys, Chennai',
        date: 'Sep 2025 – Oct 2025',
        description: 'Successfully completed a 1-month internship at Aspirasys, gaining hands-on experience in web development, AI tools, and deployment platforms while building real-world projects including a personal portfolio website.',
        certificateLink: '/1-month-internship-cert.png'
    },
    {
        title: 'Freelance Web Developer',
        company: 'Independent Projects',
        date: 'July 2025 – Present',
        description: 'Designed and developed modern, fully responsive web applications and portfolios for clients. Implemented complex UI animations, dynamic dark mode themes, and performance optimizations using React, Tailwind CSS, and framer-motion.',
        certificateLink: '#'
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function WorkExperienceSection() {
    return (
        <section id="experience" className="relative mt-24 py-20">
            <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-14">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-4">
                        <motion.span variants={fadeUp} className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 shadow-soft">
                            <Briefcase size={24} />
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="text-3xl font-black text-slate-900 md:text-4xl">Work Experience</motion.h2>
                    </div>

                    <motion.a
                        variants={fadeUp}
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-full border border-teal-200 bg-white/50 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-teal-300 hover:bg-white hover:text-teal-600"
                    >
                        <Download size={18} className="transition-transform group-hover:-translate-y-1" />
                        Download CV
                    </motion.a>
                </motion.div>

                <div className="relative mt-16">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[19px] top-4 bottom-4 w-px bg-teal-200 md:left-[23px]" />

                    <div className="flex flex-col gap-12">
                        {workExperience.map((item, index) => (
                            <motion.article
                                key={index}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="relative flex flex-col pl-12 md:pl-16"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[15px] top-8 h-[10px] w-[10px] rounded-full bg-teal-600 ring-4 ring-teal-200/50 md:left-[19px]" />

                                {/* Rounded Card */}
                                <div className="flex-1 rounded-[32px] border border-white/60 bg-white/50 p-6 md:p-8 shadow-md shadow-teal-500/5 backdrop-blur-xl flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-12 transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-lg">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                        <p className="mt-1 text-sm font-bold text-teal-600">{item.company}</p>

                                        {item.description && (
                                            <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex flex-col items-start gap-4 lg:items-end lg:min-w-[200px]">
                                        <div className="text-sm font-bold tracking-wide text-slate-800">
                                            {item.date}
                                        </div>
                                        <a
                                            href={item.certificateLink}
                                            target={item.certificateLink !== '#' ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-5 py-2 text-xs font-bold text-teal-700 transition-all duration-300 hover:bg-teal-100 hover:border-teal-300"
                                        >
                                            View Certificate
                                            <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
