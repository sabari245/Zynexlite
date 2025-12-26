import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                width: '100%',
                background: 'var(--accent-hover)',
                color: 'white',
                padding: '12px 20px',
                textAlign: 'center',
                fontSize: '1.2rem',
                fontWeight: 500,
                letterSpacing: '0.5px',
                marginTop: '80px',
                position: 'relative',
                zIndex: 10
            }}>
                For fashion manufacturers and sellers wishing to scale their brand online.
            </div>

            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '80px',
                padding: '80px 20px'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: 'var(--accent)',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontSize: '0.8rem',
                            display: 'block',
                            marginBottom: '20px'
                        }}
                    >
                        The Future of Fashion eCommerce
                    </motion.span>
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '30px', lineHeight: 1.1, maxWidth: '900px' }}>
                        Custom Online Stores for {" "}
                        <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Fashion Brands.</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px' }}>
                        Launch a high‑converting, fully custom eCommerce store in 30 days — guaranteed — with a one‑time setup fee and zero monthly platform charges.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn">
                            Book Free Strategy Call <ArrowRight size={18} />
                        </button>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'left' }}>
                            *Limited monthly slots. No obligation.
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{ position: 'relative', width: '100%', maxWidth: '1000px' }}
                >
                    <div style={{
                        width: '100%',
                        height: 'clamp(300px, 50vw, 600px)',
                        background: 'url("/assets/hero.png") center/cover',
                        borderRadius: '2px',
                        boxShadow: '0 40px 80px rgba(0,0,0,0.1)'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-30px',
                        right: '40px',
                        background: 'white',
                        padding: '30px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        maxWidth: '250px',
                        textAlign: 'left'
                    }}>
                        <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--accent)' }}>30 Days</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Guaranteed Launch</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
