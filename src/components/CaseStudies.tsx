import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import CTA from './CTA';

const caseStudies = [
    {
        id: 'lepaa',
        title: "Lepaa Herbal Products",
        industry: "Herbal & Wellness (D2C)",
        problem: "Lepaa was selling primarily through offline channels and had no scalable online presence. High platform fees from common eCommerce solutions made online expansion unattractive.",
        solution: [
            "Clean, product-focused design",
            "Optimized checkout flow",
            "Zero monthly platform fees"
        ],
        result: [
            "Online store launched in under 30 days",
            "Reduced recurring costs to ₹0 in platform fees",
            "Enabled direct-to-customer sales and future scalability"
        ],
        image: "/assets/lepaa_mockup.png",
        reverse: false
    },
    {
        id: 'synergys',
        title: "Synergys Primex",
        industry: "Manufacturing / B2B Products",
        problem: "Synergys Primex needed a professional online presence to showcase products and capture qualified leads without relying on third‑party marketplaces.",
        solution: [
            "Custom store and catalog system designed for clarity, speed, and trust",
            "Professional online presence",
            "SEO-driven growth foundation"
        ],
        result: [
            "Improved product visibility",
            "Faster customer inquiries",
            "Strong foundation for SEO-driven growth"
        ],
        image: "/assets/synergys_mockup.png",
        reverse: true
    }
];

const CaseStudySection = ({ study }: { study: typeof caseStudies[0] }) => {
    return (
        <section style={{
            padding: '120px 0',
            background: study.reverse ? 'var(--bg-secondary)' : 'var(--bg-primary)',
            overflow: 'hidden'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '80px',
                    alignItems: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: study.reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ order: study.reverse ? 2 : 1 }}
                    >
                        <span style={{
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            color: 'var(--accent)',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '16px'
                        }}>
                            Case Study: {study.industry}
                        </span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>
                            {study.title}
                        </h2>

                        <div style={{ marginBottom: '40px' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-primary)' }}>The Challenge</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                {study.problem}
                            </p>
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Our Solution</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {study.solution.map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--text-secondary)' }}>
                                        <CheckCircle2 size={20} color="#119611ff" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-primary)' }}>The Result</h4>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '16px',
                                padding: '24px',
                                background: study.reverse ? 'white' : 'var(--bg-secondary)',
                                borderRadius: '4px',
                                borderLeft: '4px solid var(--accent)'
                            }}>
                                {study.result.map((item, idx) => (
                                    <div key={idx} style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1rem' }}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: study.reverse ? -50 : 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            order: study.reverse ? 1 : 2,
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: study.reverse ? 'auto' : '-20px',
                            right: study.reverse ? '-20px' : 'auto',
                            width: '100px',
                            height: '100px',
                            background: 'var(--accent)',
                            opacity: 0.1,
                            zIndex: 0
                        }} />
                        <img
                            src={study.image}
                            alt={study.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '2px',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                                position: 'relative',
                                zIndex: 1
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const CaseStudies = () => {
    return (
        <div id="case-studies">
            <section style={{ padding: '100px 0 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 600 }}
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title"
                        style={{ marginTop: '10px', marginBottom: '0' }}
                    >
                        Real Results for Real Brands
                    </motion.h2>
                </div>
            </section>

            {caseStudies.map((study) => (
                <CaseStudySection key={study.id} study={study} />
            ))}

            <CTA />
        </div>
    );
};

export default CaseStudies;

