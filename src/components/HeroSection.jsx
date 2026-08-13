import { motion } from 'framer-motion';
import { Eye, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

const Typewriter = ({ words, delay = 100, pause = 2000 }) => {
    const [currentText, setCurrentText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < currentWord.length) {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(currentWord.slice(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? delay / 2 : delay);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, wordIndex, words, delay, pause]);

    return (
        <span className="font-mono">
            {currentText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-[80vh] flex items-center py-24">

            <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

                {/* Center Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="flex-1 flex flex-col items-center text-center max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/50 bg-white/50 px-4 py-2 text-sm font-semibold text-teal-700 backdrop-blur-sm">
                        <span>👋 Welcome to My Portfolio</span>
                    </div>

                    {/* Heading */}
                    <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 sm:text-6xl md:text-7xl">
                        Shahid <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Jamal K</span>
                    </h1>

                    {/* Typing Text */}
                    <h2 className="mt-6 text-xl sm:text-2xl text-slate-600 font-mono h-8">
                        I build <span className="text-teal-600 font-bold"><Typewriter words={["Websites", "Web Apps", "APIs"]} /></span>
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg mx-auto">
                        Motivated Web & Full-Stack Developer with hands-on internship experience, specializing in developing responsive, interactive, and user-friendly web applications using React, Tailwind CSS, and Python.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
                        <a href="#projects" className="group relative inline-flex items-center justify-center rounded-xl bg-teal-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(79,70,229,0.3)] transition-all duration-300 hover:scale-105 hover:bg-teal-700 hover:shadow-[0_0_50px_rgba(79,70,229,0.5)]">
                            <Eye className="mr-2.5 h-4 w-4 transition-transform group-hover:scale-110" />
                            View My Work
                        </a>
                        <a href="#contact" className="group inline-flex items-center justify-center rounded-xl border border-teal-200/50 bg-white/50 px-8 py-3.5 text-sm font-bold text-slate-700 backdrop-blur-md transition-all duration-300 hover:bg-white hover:border-teal-300 hover:text-teal-600 shadow-lg shadow-teal-500/5">
                            <Send className="mr-2.5 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                            Contact Me
                        </a>
                    </div>
                </motion.div>



            </div>
        </section>
    );
}



