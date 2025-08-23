import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>ApartmentPro</h3>
            <p>Innovative apartment management solutions for the modern property manager.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/" onClick={handleScrollToTop}>Home</Link></li>
              <li><Link to="/about" onClick={handleScrollToTop}>About Us</Link></li>
              <li><Link to="/services" onClick={handleScrollToTop}>Services</Link></li>
              <li><Link to="/team" onClick={handleScrollToTop}>Our Team</Link></li>
              <li><Link to="/contact" onClick={handleScrollToTop}>Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services" onClick={handleScrollToTop}>President Dashboard</Link></li>
              <li><Link to="/services" onClick={handleScrollToTop}>Flat Owner Dashboard</Link></li>
              <li><Link to="/services" onClick={handleScrollToTop}>Security Dashboard</Link></li>
              <li><Link to="/services" onClick={handleScrollToTop}>Other</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ApartmentPro. All Rights Reserved.</p>
          <div className="legal-links">
            <Link to="#" onClick={handleScrollToTop}>Privacy Policy</Link>
            <Link to="#" onClick={handleScrollToTop}>Terms of Service</Link>
            <Link to="#" onClick={handleScrollToTop}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
