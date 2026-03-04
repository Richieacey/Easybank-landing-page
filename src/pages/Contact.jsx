import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingBottom: '7rem', backgroundColor: 'hsl(0, 0%, 98%)' }}>
            <section className="offers-section" style={{ paddingTop: '7rem', backgroundColor: 'hsl(0, 0%, 98%)' }}>
                <h2>Contact Us</h2>
                <p className="offers-desc">
                    Questions, bug reports, or feedback? Our support team is here for you 24/7.
                </p>

                <div className="contact-form-container" style={{
                    marginTop: '4rem',
                    backgroundColor: 'white',
                    padding: '3rem',
                    borderRadius: '10px',
                    width: '100%',
                    maxWidth: '600px',
                    boxShadow: '0px 10px 30px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                        <label style={{ color: 'hsl(233, 26%, 24%)', marginBottom: '0.5rem', fontWeight: 'bold' }}>Name</label>
                        <input type="text" placeholder="John Doe" style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid hsl(233, 8%, 62%)' }} />
                    </div>
                    <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                        <label style={{ color: 'hsl(233, 26%, 24%)', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
                        <input type="email" placeholder="john@example.com" style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid hsl(233, 8%, 62%)' }} />
                    </div>
                    <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                        <label style={{ color: 'hsl(233, 26%, 24%)', marginBottom: '0.5rem', fontWeight: 'bold' }}>Message</label>
                        <textarea rows="5" placeholder="How can we help?" style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid hsl(233, 8%, 62%)', resize: 'vertical' }}></textarea>
                    </div>
                    <button className="request-btn one" style={{ width: '100%' }}>Send Message</button>
                </div>
            </section>
        </div>
    );
}
