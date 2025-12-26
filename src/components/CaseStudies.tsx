import { CheckCircle2 } from 'lucide-react';

const CaseStudies = () => {
    return (
        <section id="case-studies">
            <div className="container">
                <h2 className="section-title">Success Stories</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '60px' }}>
                    <div style={{ border: '1px solid var(--border)', padding: '40px' }}>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>Case Study</span>
                        <h3 style={{ fontSize: '2rem', margin: '20px 0' }}>Lepaa Herbal Products</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                            Reduced recurring costs to ₹0 in platform fees and launched in under 30 days.
                        </p>
                        <ul style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 size={16} color="var(--accent)" /> Clean, product‑focused design</li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 size={16} color="var(--accent)" /> Optimized checkout flow</li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 size={16} color="var(--accent)" /> Zero monthly platform fees</li>
                        </ul>
                        <button className="btn btn-outline">View Project</button>
                    </div>

                    <div style={{ border: '1px solid var(--border)', padding: '40px' }}>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>Case Study</span>
                        <h3 style={{ fontSize: '2rem', margin: '20px 0' }}>Synergys Primex</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                            Improved product visibility and faster customer inquiries through a professional catalog system.
                        </p>
                        <ul style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 size={16} color="var(--accent)" /> Professional online presence</li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 size={16} color="var(--accent)" /> Faster customer inquiries</li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 size={16} color="var(--accent)" /> SEO-driven growth foundation</li>
                        </ul>
                        <button className="btn btn-outline">View Project</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
