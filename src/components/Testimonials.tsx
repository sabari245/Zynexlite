import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const testimonials = [
        { name: "Lepaa Herbal Products", role: "Founder", text: "Hear directly from founders and operators we’ve worked with. These are real businesses with live websites and real results." },
        { name: "Synergys Primex", role: "Client", text: "The custom store and catalog system delivered clarity, speed, and trust for our B2B operations." }
    ];

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

    return (
        <section style={{ background: 'var(--text-primary)', color: 'white' }}>
            <div className="container">
                <h2 className="section-title" style={{ color: 'white' }}>Client Experiences</h2>
                <div style={{ position: 'relative', padding: '60px 0' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                        >
                            <p style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', marginBottom: '40px' }}>
                                "{testimonials[index].text}"
                            </p>
                            <div style={{ fontWeight: 600, color: 'var(--accent)' }}>{testimonials[index].name}</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.6 }}>{testimonials[index].role}</div>
                        </motion.div>
                    </AnimatePresence>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
                        <button onClick={prev} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '10px', cursor: 'pointer' }}><ChevronLeft /></button>
                        <button onClick={next} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '10px', cursor: 'pointer' }}><ChevronRight /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
