import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';

const CAROUSEL_AUTO_MOVE_INTERVAL = 3500;

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "CEO, TechFlow",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-on-a-video-call-in-an-office-41258-large.mp4",
        thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
        quote: "The efficiency gains we've seen are simply unprecedented."
    },
    {
        id: 2,
        name: "Marcus Chen",
        role: "Founder, Artisan Coffee",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-in-a-coffee-shop-41262-large.mp4",
        thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
        quote: "Zynex Lite transformed our digital presence completely."
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Marketing Director, Bloom",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-a-video-call-41259-large.mp4",
        thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
        quote: "A seamless experience from start to finish. Highly recommended."
    },
    {
        id: 4,
        name: "David Smith",
        role: "Operations Manager, LogiCore",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-talking-on-a-video-call-41260-large.mp4",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        quote: "The best investment we've made for our B2B operations this year."
    },
    {
        id: 5,
        name: "Aisha Khan",
        role: "Creative Lead, Studio Nine",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-at-her-desk-in-a-bright-office-41261-large.mp4",
        thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
        quote: "Beautiful design meets powerful functionality. Truly impressed."
    }
];

const TestimonialCard = ({
    testimonial,
    onMouseEnter,
    onMouseLeave
}: {
    testimonial: typeof testimonials[0],
    onMouseEnter: () => void,
    onMouseLeave: () => void
}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <motion.div
            className="testimonial-card"
            whileHover={{ y: -10 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            transition={{ duration: 0.3 }}
            style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ position: 'relative', paddingTop: '133%', overflow: 'hidden' }}>
                {!isPlaying ? (
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${testimonial.thumbnail})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onClick={() => setIsPlaying(true)}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'var(--accent)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 30px rgba(139, 115, 91, 0.5)'
                        }}>
                            <Play fill="white" color="white" size={24} />
                        </div>
                    </div>
                ) : (
                    <video
                        src={testimonial.videoUrl}
                        autoPlay
                        controls
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                )}
            </div>
            <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <Quote size={24} color="var(--accent)" style={{ marginBottom: '16px', opacity: 0.5 }} />
                    <p style={{
                        fontSize: '1.1rem',
                        fontFamily: 'var(--font-body)',
                        lineHeight: '1.5',
                        marginBottom: '20px',
                        color: 'rgba(255,255,255,0.9)'
                    }}>
                        {testimonial.quote}
                    </p>
                </div>
                <div>
                    <div style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '1.1rem' }}>{testimonial.name}</div>
                    <div style={{ fontSize: '0.85rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '1px' }}>{testimonial.role}</div>
                </div>
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setVisibleItems(1);
            else if (window.innerWidth < 1024) setVisibleItems(2);
            else setVisibleItems(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = useCallback(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, CAROUSEL_AUTO_MOVE_INTERVAL);
        return () => clearInterval(timer);
    }, [next, isPaused]);

    // Calculate which items to show for a smooth loop
    const getVisibleTestimonials = () => {
        const items = [];
        for (let i = 0; i < visibleItems; i++) {
            items.push(testimonials[(index + i) % testimonials.length]);
        }
        return items;
    };

    return (
        <section
            style={{ background: '#0a0a0a', color: 'white', overflow: 'hidden', position: 'relative' }}
        >
            {/* Background Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '40%',
                height: '60%',
                background: 'radial-gradient(circle, rgba(139, 115, 91, 0.1) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 600 }}
                    >
                        Voices of Success
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title"
                        style={{ color: 'white', marginTop: '10px' }}
                    >
                        Client Experiences
                    </motion.h2>
                </div>

                <div style={{ position: 'relative' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${visibleItems}, 1fr)`,
                        gap: '30px',
                        minHeight: '500px'
                    }}>
                        <AnimatePresence mode="popLayout" initial={false}>
                            {getVisibleTestimonials().map((testimonial, i) => (
                                <motion.div
                                    key={`${testimonial.id}-${index}`}
                                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, x: -50 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                        ease: [0.23, 1, 0.32, 1]
                                    }}
                                >
                                    <TestimonialCard
                                        testimonial={testimonial}
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        marginTop: '60px'
                    }}>
                        <button
                            onClick={prev}
                            className="nav-btn"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            className="nav-btn"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Progress Indicators */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '8px',
                        marginTop: '30px'
                    }}>
                        {testimonials.map((_, i) => (
                            <div
                                key={i}
                                style={{
                                    width: i === index ? '30px' : '8px',
                                    height: '8px',
                                    borderRadius: '4px',
                                    background: i === index ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .nav-btn:hover {
                    background: var(--accent) !important;
                    border-color: var(--accent) !important;
                    transform: scale(1.1);
                }
                .testimonial-card:hover video {
                    filter: brightness(1.1);
                }
            `}</style>
        </section>
    );
};

export default Testimonials;

