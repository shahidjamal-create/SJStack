import { motion } from 'framer-motion';

export default function Loader() {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#A5C9CA]/20 backdrop-blur-md"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
    <div className="flex flex-col items-center gap-6 rounded-[32px] border border-white/60 bg-white/40 px-10 py-10 shadow-xl shadow-teal-500/10 backdrop-blur-xl">
                {/* 12-dot circular spinner */}
                <div className="relative h-12 w-12">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute left-1/2 top-0 h-3 w-3 -ml-[6px] rounded-full bg-teal-600 shadow-[0_0_10px_rgba(13,148,136,0.6)]"
                            style={{
                                transformOrigin: "50% 24px",
                                transform: `rotate(${i * 30}deg)`,
                                animation: `spinner-fade 1.2s linear infinite`,
                                animationDelay: `${-1.2 + i * 0.1}s`
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}




