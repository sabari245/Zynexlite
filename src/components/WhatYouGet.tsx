import { CheckCircle2 } from 'lucide-react';

const WhatYouGet = () => {
    const items = [
        "Fully custom‑designed eCommerce website",
        "Mobile‑first, fast‑loading pages",
        "Secure payment integration",
        "Product & inventory management",
        "SEO‑optimized structure",
        "Analytics & conversion tracking setup",
        "Documentation & handover support"
    ];

    return (
        <section style={{ background: 'var(--text-primary)', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '30px', color: 'white' }}>What you get</h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.7, marginBottom: '40px' }}>
                            A complete, production-ready eCommerce ecosystem tailored to your brand's unique needs.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {items.map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.9rem' }}>
                                    <CheckCircle2 size={18} color="var(--accent)" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{
                        padding: '60px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginBottom: '20px' }}>The Guarantee</div>
                        <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '10px' }}>30 Days</div>
                        <p style={{ opacity: 0.7 }}>One-time setup fee. <br />Zero monthly platform charges.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;
