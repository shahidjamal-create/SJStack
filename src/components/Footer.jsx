import { ArrowUp } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative mt-24 border-t border-teal-200/60 pt-10 pb-16 text-sm text-slate-800">
            <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 md:px-10 lg:px-14 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-600">SHAHIDJAMAL</p>
                    <p className="mt-3 max-w-md leading-7 text-slate-700 font-medium">A premium full-stack developer portfolio with polished motion, glassmorphism, and luxury design.</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <a href="#home" className="inline-flex items-center gap-2 text-slate-600 font-medium transition hover:text-teal-600">
                        <ArrowUp size={16} /> Back to top
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-600 font-medium transition hover:text-teal-600">GitHub</a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-600 font-medium transition hover:text-teal-600">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}




