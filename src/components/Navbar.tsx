import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '20px 0',
            background: 'rgba(253, 253, 251, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '1px' }}>
                    ZYNEX<span style={{ color: 'var(--accent)' }}>LITE</span>
                </div>

                <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                    <a href="#features" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Features</a>
                    <a href="#how-it-works" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Process</a>
                    <a href="#case-studies" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Case Studies</a>
                    <a href="#faq" style={{ fontWeight: 500, fontSize: '0.9rem' }}>FAQ</a>
                    <button className="btn" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>Book a Call</button>
                </div>

                <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                    {isOpen ? <X /> : <Menu />}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: 'white',
                            padding: '40px 20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            borderBottom: '1px solid var(--border)',
                            textAlign: 'center'
                        }}
                    >
                        <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
                        <a href="#how-it-works" onClick={() => setIsOpen(false)}>Process</a>
                        <a href="#case-studies" onClick={() => setIsOpen(false)}>Case Studies</a>
                        <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
                        <button className="btn">Book a Call</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
