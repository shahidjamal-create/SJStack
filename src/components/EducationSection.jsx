import { motion } from 'framer-motion';
import { BookOpen, CalendarDays, GraduationCap } from 'lucide-react';

const educationItems = [
    {
        institution: 'Islamia HSE School',
        program: 'Computer Science',
        date: '2022-2024',
        description: 'I pursued my Higher Secondary Education at Islamia Higher Secondary School, Pernambut, during the academic years 2022–2024, specializing in Computer Science. This course introduced me to the fundamentals of programming, software concepts, and logical thinking, which built a strong academic foundation for my future studies. My exposure to computer science during these years not only enhanced my technical knowledge but also sparked my passion for web development. It was at this stage that I realized my interest in creating and designing websites, motivating me to pursue higher studies in computer applications and work towards a career in the IT field.'
    },
    {
        institution: 'MHIS College Pernambut',
        program: 'BCA (Bachelor of Computer Application)',
        date: '2025 - Present',
        description: 'I am currently pursuing my Bachelor of Computer Applications (BCA) at MHIS College, Pernambut, for the academic duration 2024–2027. This program provides me with in-depth knowledge of computer science, programming, database management, and web technologies. Through my coursework and practical learning, I am strengthening my skills in designing, coding, and problem-solving. My time at MHIS College is helping me build both academic and technical expertise, while also encouraging creativity and innovation. With a strong focus on the IT field, I am determined to shape my career as a professional web developer, creating impactful and user-friendly digital solutions.'
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function EducationSection() {
    return (
        <section id="education" className="relative mt-24 py-20">
            <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12 text-center">
                    <motion.span variants={fadeUp} className="relative inline-flex items-center justify-center text-sm font-bold uppercase tracking-[0.28em] text-teal-600">
                        <span className="relative">Education</span>
                    </motion.span>
                    <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">Education</motion.h2>
                    <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-600 font-medium">
                        Education is the powerful tool that moves you from darkness to light. It unlocks a world of possibilities and helps you understand yourself and the world around you.
                    </motion.p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {educationItems.map((item) => (
                        <motion.article key={item.institution} variants={fadeUp} className="overflow-hidden rounded-[32px] border border-white/60 bg-white/50 p-8 shadow-md shadow-teal-500/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 hover:shadow-lg">
                            <div className="flex items-start gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-teal-100 text-teal-600 shadow-sm">
                                    <GraduationCap size={20} />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-2xl font-bold text-slate-900">{item.institution}</h3>
                                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.24em] text-teal-600">{item.program}</p>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-3 text-sm font-bold text-slate-800">
                                <CalendarDays size={16} />
                                <span>{item.date}</span>
                            </div>

                            <p className="mt-6 text-sm leading-7 text-slate-700 font-medium">{item.description}</p>

                            <div className="mt-8 flex items-center gap-3 rounded-full border border-teal-200 bg-teal-50 px-5 py-3 text-sm font-bold text-teal-700 shadow-sm">
                                <BookOpen size={18} />
                                <span>Focused on academic growth and web development skills</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}




