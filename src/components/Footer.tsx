const Footer = () => {
    return (
        <footer style={{ padding: '80px 0 40px', borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '60px' }}>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '20px' }}>
                            ZYNEX<span style={{ color: 'var(--accent)' }}>LITE</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                            Premium eCommerce solutions for fashion manufacturers and niche brands.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">Process</a></li>
                            <li><a href="#case-studies">Case Studies</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Legal</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Contact</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <li><a href="#">hello@zynexlite.com</a></li>
                            <li><a href="#">Book a Call</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <div>© 2025 Zynex Lite. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
