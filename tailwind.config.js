export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                background: '#000000',
                surface: '#111111',
                card: 'rgba(0,0,0,0.8)',
                glass: 'rgba(0,0,0,0.7)',
                royal: '#4F46E5',
                electric: '#3B82F6',
                cyan: '#06B6D4',
                purple: '#8B5CF6',
                pink: '#EC4899',
                emerald: '#10B981',
                gold: '#F59E0B',
                text: '#f8fafc',
                muted: '#94a3b8'
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'sans-serif']
            },
            boxShadow: {
                glow: '0 30px 80px rgba(255, 255, 255, 0.05)',
                soft: '0 18px 50px rgba(0, 0, 0, 0.2)'
            },
            backgroundImage: {
                aurora: 'radial-gradient(circle at top left, rgba(255, 255, 255, 0.03), transparent 28%), radial-gradient(circle at top right, rgba(255, 255, 255, 0.02), transparent 22%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.02), transparent 25%), radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.02), transparent 24%)'
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                shimmer: 'shimmer 2.5s linear infinite'
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-16px)' }
                },
                shimmer: {
                    '0%': { backgroundPosition: '-250%' },
                    '100%': { backgroundPosition: '250%' }
                }
            }
        }
    },
    plugins: []
};
