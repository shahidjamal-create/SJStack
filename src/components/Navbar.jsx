import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/70 shadow-sm backdrop-blur-2xl border-b border-white/20' : 'bg-transparent'}`}>
            <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10 lg:px-14">
                <a href="#home" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 border border-white/20 text-base font-black text-white shadow-[0_4px_20px_rgba(79,70,229,0.3)]">SJ</span>
                    <span>PORTFOLIO</span>
                </a>

                <nav className="hidden items-center gap-8 lg:flex text-slate-600">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="transition-colors duration-300 hover:text-teal-600 font-medium">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-4 lg:flex text-slate-500">
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-teal-600">
                        <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-teal-600">
                        <Linkedin size={18} />
                    </a>
                    <a href="mailto:hello@example.com" className="transition hover:text-teal-600">
                        <Mail size={18} />
                    </a>
                </div>

                <button
                    onClick={() => setMenuOpen((state) => !state)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-700 transition hover:border-teal-300 hover:bg-white hover:text-teal-600 lg:hidden"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-white/95 backdrop-blur-xl`}>
                <div className="mx-auto flex max-w-[1600px] flex-col gap-5 px-6 py-6 text-slate-800 md:px-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="rounded-3xl border border-slate-100 bg-white/50 px-4 py-4 text-lg font-bold uppercase tracking-[0.22em] transition hover:border-teal-200 hover:bg-white hover:text-teal-600"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="flex items-center gap-5 pt-4 text-slate-500">
                        <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-teal-600">
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-teal-600">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:hello@example.com" className="transition hover:text-teal-600">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}



