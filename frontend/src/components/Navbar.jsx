import { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'booking', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu on click
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={(e) => scrollToSection(e, 'home')}>
          <Sparkles className="logo-icon" size={24} />
          <span className="logo-text">StayBook<br/><small>RESORT</small></span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'gallery', label: 'Gallery' },
            { id: 'booking', label: 'Rooms' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="btn-outline">Login</button>
          <a href="#booking" className="btn-primary" onClick={(e) => scrollToSection(e, 'booking')} style={{ display: 'inline-block', textAlign: 'center' }}>Book Now</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'booking', label: 'Rooms' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <hr className="mobile-nav-divider" />
            <button className="btn-outline w-full mt-3">Login</button>
            <a href="#booking" className="btn-primary w-full mt-3" onClick={(e) => scrollToSection(e, 'booking')} style={{ display: 'block', textAlign: 'center' }}>Book Now</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
