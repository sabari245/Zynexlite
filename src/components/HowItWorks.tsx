import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Free strategy call",
            desc: "We understand your products, manufacturing model, audience, and growth goals."
        },
        {
            number: "02",
            title: "Custom design & development",
            desc: "A fully custom storefront tailored to your brand — not a generic template."
        },
        {
            number: "03",
            title: "Guaranteed launch",
            desc: "Your store goes live within 30 days, guaranteed. Post‑launch improvements continue after."
        }
    ];

    return (
        <section id="how-it-works">
            <div className="container">
                <h2 className="section-title">How it works</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginTop: '80px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '80px 1fr',
                                    gap: '20px',
                                    alignItems: 'start'
                                }}
                            >
                                <div style={{
                                    fontSize: '3rem',
                                    fontFamily: 'var(--font-display)',
                                    color: 'var(--border)',
                                    lineHeight: 1
                                }}>{step.number}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{step.title}</h3>
                                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            height: '500px',
                            background: 'url("/assets/design.png") center/cover',
                            border: '1px solid var(--border)',
                            boxShadow: '-20px 20px 0px var(--accent)'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
