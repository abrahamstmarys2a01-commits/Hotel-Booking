import { Sparkles, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="contact-preview">
          <h3>Contact Preview</h3>
          <div className="contact-info-row">
            <div className="info-item"><MapPin size={20}/> <p>No 04, Building Society, Main Road, MM St,<br/>Kodaikanal, Tamil Nadu 620001</p></div>
            <div className="info-item"><Phone size={20}/> <p>+91 98765 43210</p></div>
            <div className="info-item"><Mail size={20}/> <p>info@staybookresort.com</p></div>
            <a href="#contact" className="btn-primary" style={{ display: 'inline-block' }}>Contact Us</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom-area">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo white">
              <Sparkles className="logo-icon" size={24} />
              <span className="logo-text">NOVEL DIAMOND<br/><small>RESORT</small></span>
            </a>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Information</h4>
            <p><MapPin size={18}/> No 04, Building Society, Main Road, MM St,<br/>Kodaikanal, Tamil Nadu 620001</p>
            <p><Phone size={16}/> +91 98765 43210</p>
            <p><Mail size={16}/> info@staybookresort.com</p>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons" style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}>
              <span>Fb</span>
              <span>Ig</span>
              <span>Tw</span>
              <span>In</span>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2026 NOVEL DIAMOND RESORT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
