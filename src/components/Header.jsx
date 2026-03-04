import { Link } from 'react-router-dom';

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src="/images/logo.svg" alt="Easybank" />
        </Link>
        <img
          className="hamburger-menu"
          src="/images/icon-hamburger.svg"
          alt="Menu"
          onClick={() => setIsMobileMenuOpen(true)}
        />
        <img
          className="mobile-nav-close"
          src="/images/icon-close.svg"
          alt="Close"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </div>

      <div className="nav-bar">
        <Link to="/" className="home-btn" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" className="about-btn" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link to="/contact" className="contact-btn" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        <Link to="/blog" className="blog-btn" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
        <Link to="/careers" className="careers-btn" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
      </div>

      <div className="nav-bar-mobile">
        <Link to="/" className="home-btn-mobile" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>Home</Link>
        <Link to="/about" className="about-btn-mobile" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>About</Link>
        <Link to="/contact" className="contact-btn-mobile" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>Contact</Link>
        <Link to="/blog" className="blog-btn-mobile" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>Blog</Link>
        <Link to="/careers" className="careers-btn-mobile" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>Careers</Link>
      </div>

      <div className="request-btn-container">
        <button className="request-btn one">Request Invite</button>
      </div>
    </header>
  );
}
