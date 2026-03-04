import { Link } from 'react-router-dom';
import { useState } from 'react';

function SocialIcon({ normalSrc, hoverSrc, alt, className }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <img
            className={className}
            src={isHovered ? hoverSrc : normalSrc}
            alt={alt}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: 'pointer' }}
        />
    );
}

export default function Footer() {
    return (
        <section className="bottom-sect">
            <div className="second-flexbox">
                <div className="social-media-container">
                    <div>
                        <img className="logo-white" src="/images/logo - Copy.svg" alt="Easybank" />
                        <div className="social-media">
                            <SocialIcon normalSrc="/images/icon-facebook.svg" hoverSrc="/images/icon-facebook2.svg" alt="Facebook" className="facebook-btn" />
                            <SocialIcon normalSrc="/images/icon-youtube.svg" hoverSrc="/images/icon-youtube2.svg" alt="YouTube" className="youtube-btn" />
                            <SocialIcon normalSrc="/images/icon-twitter.svg" hoverSrc="/images/icon-twitter2.svg" alt="Twitter" className="twitter-btn" />
                            <SocialIcon normalSrc="/images/icon-pinterest.svg" hoverSrc="/images/icon-pinterest2.svg" alt="Pinterest" className="pinterest-btn" />
                            <SocialIcon normalSrc="/images/icon-instagram.svg" hoverSrc="/images/icon-instagram2.svg" alt="Instagram" className="instagram-btn" />
                        </div>
                    </div>
                </div>
                <div className="bottom-nav1">
                    <Link to="/about" className="about-bottom-btn" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>About Us</Link>
                    <Link to="/contact" className="contact-bottom-btn" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>Contact</Link>
                    <Link to="/blog" className="blog-bottom-btn" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>Blog</Link>
                </div>
                <div className="bottom-nav2">
                    <Link to="/careers" className="careers-bottom-btn" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>Careers</Link>
                    <div className="support-btn" style={{ cursor: 'pointer' }}>Support</div>
                    <div className="privacy-btn" style={{ cursor: 'pointer' }}>Privacy Policy</div>
                </div>
            </div>

            <div className="bottom-request-container">
                <button className="request-btn three">Request Invite</button>
                <div className="rights">
                    © Easybank. All Rights Reserved
                </div>
            </div>
        </section>
    );
}
