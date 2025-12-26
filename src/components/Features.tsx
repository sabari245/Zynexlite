import { motion } from 'framer-motion';
import { Clock, Zap, CheckCircle2, BarChart3, ShieldCheck } from 'lucide-react';

const Features = () => {
    const features = [
        { title: "Launch in 30 days", desc: "From design to live checkout, we move at the speed of fashion.", icon: <Clock /> },
        { title: "Zero monthly fees", desc: "Keep your margins. No Shopify or platform taxes on your success.", icon: <Zap /> },
        { title: "Built for Fashion", desc: "Variants, inventory, and bulk orders handled with precision.", icon: <CheckCircle2 /> },
        { title: "Conversion Optimized", desc: "Faster load times and a cleaner checkout experience.", icon: <BarChart3 /> },
        { title: "SEO-Ready", desc: "Structured, indexable, and scalable foundations from day one.", icon: <ShieldCheck /> }
    ];

    return (
        <section id="features" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Why brands choose us</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    marginTop: '60px'
                }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            style={{
                                background: 'white',
                                padding: '40px',
                                border: '1px solid var(--border)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            }}
                        >
                            <div style={{ color: 'var(--accent)' }}>{f.icon}</div>
                            <h3 style={{ fontSize: '1.5rem' }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
