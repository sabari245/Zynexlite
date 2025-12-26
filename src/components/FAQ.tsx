import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        { q: "How much does it cost?", a: "Pricing depends on product complexity and integrations. The strategy call helps us give an exact quote." },
        { q: "Are there any hidden or monthly fees?", a: "No. You pay only the one‑time setup fee. Hosting and payment gateway charges are billed based on sales. Hosting is free for the first 100K requests." },
        { q: "Do you provide support after launch?", a: "Yes. We offer optional maintenance and support plans." },
        { q: "Is this suitable for non‑fashion brands?", a: "Yes. While we specialize in fashion, the system works for many industries." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ background: 'white', border: '1px solid var(--border)' }}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                style={{
                                    width: '100%',
                                    padding: '25px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 600,
                                    fontSize: '1.1rem'
                                }}
                            >
                                {faq.q}
                                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{ padding: '0 25px 25px', color: 'var(--text-secondary)' }}>
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
