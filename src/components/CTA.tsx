import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section style={{ textAlign: 'center', padding: '120px 20px' }}>
            <div className="container">
                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '30px' }}>Ready to launch your <br />online store?</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                    Book a free 1:1 strategy call and find out if this is the right fit for your brand.
                </p>
                <button className="btn" style={{ padding: '20px 40px', fontSize: '1.1rem' }}>
                    Book Free Strategy Call <ArrowRight />
                </button>
                <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.6 }}>*Limited monthly slots available.</p>
            </div>
        </section>
    );
};

export default CTA;
