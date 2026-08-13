import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import WorkExperienceSection from './components/WorkExperienceSection.jsx';

import Loader from './components/Loader.jsx';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            <div className="relative min-h-screen overflow-x-hidden bg-premium-mesh text-slate-900">
                {/* Premium Animated Background */}
                <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                    {/* Subtle Noise Texture for Premium Feel */}
                    <div className="absolute inset-0 bg-noise mix-blend-overlay z-10" />

                    {/* Animated Grid with radial fade */}
                    <div className="absolute inset-0 bg-grid-pattern mask-radial-faded opacity-[0.15]" />
                    
                    {/* Animated Glowing Orbs (Soft Light blend for premium glow) */}
                    <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-white/60 mix-blend-soft-light blur-[100px] animate-blob" />
                    <div className="absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-teal-200/50 mix-blend-soft-light blur-[120px] animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-cyan-200/50 mix-blend-soft-light blur-[100px] animate-blob animation-delay-4000" />
                    
                    {/* Frosted Glass overlay */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                </div>

                <Navbar />
                <AnimatePresence>{loading ? <Loader key="loader" /> : null}</AnimatePresence>
                <main className="relative mx-auto max-w-[1600px] px-6 pb-20 pt-36 md:px-10 lg:px-14">
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <WorkExperienceSection />
                    <EducationSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
