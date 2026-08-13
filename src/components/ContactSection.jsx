import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, Check } from 'lucide-react';

export default function ContactSection() {
    const formRef = useRef(null);
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        // Disable FormSubmit captcha for AJAX
        data._captcha = "false"; 

        setIsSubmitting(true);
        setStatus('');
        setIsSuccess(false);

        try {
            const response = await fetch("https://formsubmit.co/ajax/shahidjamal13258@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Form submission failed.');
            }
            
            // Show the success UI exactly like the image
            setIsSuccess(true);
            event.target.reset();
            setTimeout(() => setIsSuccess(false), 8000);
            
        } catch (error) {
            setStatus(error.message || 'Oops! Network error. Please try again.');
            console.error('FormSubmit Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative mt-24 py-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_0.95fr]">
                <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[40px] border border-white/60 bg-white/40 backdrop-blur-xl p-10 shadow-xl shadow-teal-500/5">
                    <span className="text-sm font-bold uppercase tracking-[0.28em] text-teal-600">Contact</span>
                    <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">Let’s build your next premium product.</h2>
                    <p className="mt-6 max-w-xl text-sm leading-7 text-slate-700 font-medium">Ready for a modern website or web app with luxury feel, polished motion, and strong technical foundations.</p>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-4 rounded-3xl border border-white/60 bg-white/60 p-5 text-sm text-slate-900 shadow-sm">
                            <MapPin className="h-5 w-5 text-teal-600" />
                            <div>
                                <p className="font-bold text-slate-900">Address</p>
                                <p className="text-slate-600 font-medium">Mulla Street, Pernambut, Vellore, 635 810</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-3xl border border-white/60 bg-white/60 p-5 text-sm text-slate-900 shadow-sm">
                            <Phone className="h-5 w-5 text-teal-600" />
                            <div>
                                <p className="font-bold text-slate-900">Phone</p>
                                <a href="tel:6384103958" className="text-sm font-medium text-slate-600 hover:text-teal-600">6384103958</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-3xl border border-white/60 bg-white/60 p-5 text-sm text-slate-900 shadow-sm">
                            <Mail className="h-5 w-5 text-teal-600" />
                            <div>
                                <p className="font-bold text-slate-900">Email</p>
                                <a href="mailto:shahidjamal13258@gmail.com" className="text-sm font-medium text-slate-600 hover:text-teal-600">shahidjamal13258@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.form ref={formRef} onSubmit={handleSubmit} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[40px] border border-white/60 bg-white/40 p-10 shadow-xl shadow-teal-500/5 backdrop-blur-xl">
                    <div className="grid gap-6">
                        <div>
                            <label className="text-sm font-bold text-slate-900">Name</label>
                            <input type="text" name="name" required className="mt-3 w-full rounded-3xl border border-teal-200 bg-white/60 px-4 py-4 text-slate-900 shadow-inner outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-200" />
                        </div>
                        <div>
                            <label className="text-sm font-bold text-slate-900">Email</label>
                            <input type="email" name="email" required className="mt-3 w-full rounded-3xl border border-teal-200 bg-white/60 px-4 py-4 text-slate-900 shadow-inner outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-200" />
                        </div>
                        <div>
                            <label className="text-sm font-bold text-slate-900">Message</label>
                            <textarea name="message" rows="5" required className="mt-3 w-full rounded-3xl border border-teal-200 bg-white/60 px-4 py-4 text-slate-900 shadow-inner outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-200" />
                        </div>
                    </div>

                    {isSuccess && (
                        <div className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-[#00a86b]/30 bg-[#00a86b]/10 p-4 text-[#00a86b]">
                            <CheckCircle2 className="h-5 w-5" />
                            <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                        </div>
                    )}

                    {!isSuccess && status && <p className="mt-4 text-sm font-bold text-red-500">{status}</p>}

                    <button type="submit" disabled={isSubmitting || isSuccess} className={`mt-6 flex w-full items-center justify-center rounded-xl px-8 py-4 text-sm font-bold text-white shadow-lg transition duration-300 ${isSuccess ? 'bg-[#00a86b] shadow-[#00a86b]/30' : 'bg-teal-600 shadow-teal-500/30 hover:bg-teal-700 hover:shadow-xl'} disabled:cursor-not-allowed disabled:opacity-90`}>
                        {isSubmitting ? (
                            'Sending...'
                        ) : isSuccess ? (
                            <>
                                <Check className="mr-2 h-5 w-5" />
                                Message Sent!
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send className="ml-3 h-4 w-4" />
                            </>
                        )}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
