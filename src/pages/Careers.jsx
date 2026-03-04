import { useEffect } from 'react';

export default function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingBottom: '7rem', backgroundColor: 'hsl(0, 0%, 98%)' }}>
            <section className="offers-section" style={{ paddingTop: '7rem', backgroundColor: 'hsl(0, 0%, 98%)' }}>
                <h2>Careers at Easybank</h2>
                <p className="offers-desc">
                    We're looking for talented individuals to join our growing team. Help us build the future of banking.
                </p>

                <div style={{ marginTop: '4rem' }}>
                    <h3 style={{ marginBottom: '1.5rem', color: 'hsl(233, 26%, 24%)' }}>Open Positions</h3>

                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0px 5px 15px rgba(0,0,0,0.03)', maxWidth: '800px' }}>
                        <div>
                            <h4 style={{ color: 'hsl(233, 26%, 24%)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Senior Frontend Engineer</h4>
                            <p style={{ margin: 0 }}>Remote / Full-time</p>
                        </div>
                        <button className="request-btn one">Apply Now</button>
                    </div>

                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0px 5px 15px rgba(0,0,0,0.03)', maxWidth: '800px' }}>
                        <div>
                            <h4 style={{ color: 'hsl(233, 26%, 24%)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Backend Developer (Node.js)</h4>
                            <p style={{ margin: 0 }}>London / Full-time</p>
                        </div>
                        <button className="request-btn one">Apply Now</button>
                    </div>

                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0px 5px 15px rgba(0,0,0,0.03)', maxWidth: '800px' }}>
                        <div>
                            <h4 style={{ color: 'hsl(233, 26%, 24%)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Product Designer</h4>
                            <p style={{ margin: 0 }}>Remote / Full-time</p>
                        </div>
                        <button className="request-btn one">Apply Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
