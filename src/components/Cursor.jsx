import { useEffect, useState } from 'react';

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
        const over = () => setHover(true);
        const out = () => setHover(false);

        document.addEventListener('mousemove', move);
        document.querySelectorAll('a, button').forEach((el) => {
            el.addEventListener('mouseenter', over);
            el.addEventListener('mouseleave', out);
        });

        return () => {
            document.removeEventListener('mousemove', move);
            document.querySelectorAll('a, button').forEach((el) => {
                el.removeEventListener('mouseenter', over);
                el.removeEventListener('mouseleave', out);
            });
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed left-0 top-0 z-50 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 transition-all duration-200"
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${hover ? 1.4 : 1})`,
                boxShadow: hover ? '0 0 40px rgba(79,70,229,0.35)' : '0 0 0 rgba(0,0,0,0)'
            }}
        />
    );
}



