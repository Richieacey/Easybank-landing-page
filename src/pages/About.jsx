import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingBottom: '7rem' }}>
            <section className="offers-section" style={{ backgroundColor: 'hsl(0, 0%, 98%)', paddingTop: '7rem', paddingBottom: '3rem' }}>
                <h2>About Easybank</h2>
                <p className="offers-desc">
                    We are a team of passionate developers and financial experts working together to streamline your digital banking experience. Our mission is to democratize finance for everyone.
                </p>
            </section>

            <section className="offers-section" style={{ paddingTop: '2rem' }}>
                <h2>Our Core Values</h2>
                <div className="offers-grid">
                    <div className="online-banking">
                        <div>
                            <img className="offers-pic" src="/images/icon-api.svg" alt="" />
                        </div>
                        <h3>Transparency</h3>
                        <p>
                            We believe in open dialogue and clear communication. No hidden fees or surprise charges.
                        </p>
                    </div>
                    <div className="simple-budgeting">
                        <div>
                            <img className="offers-pic" src="/images/icon-onboarding.svg" alt="" />
                        </div>
                        <h3>Customer First</h3>
                        <p>
                            Your financial well-being is at the center of everything we build and maintain.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
