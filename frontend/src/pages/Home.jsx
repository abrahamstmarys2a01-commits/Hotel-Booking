import { Calendar, Users, Search, Check } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Home() {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.wave-animate');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to<br/>StayBook Resort</h1>
          <p className="hero-subtitle">Your Perfect Stay Starts Here</p>
          <p className="hero-desc">Experience luxury, comfort and exceptional hospitality at StayBook Resort. A peaceful getaway in the heart of Chennai.</p>
        </div>
        
        <div className="booking-widget">
          <div className="widget-item">
            <Calendar className="widget-icon" />
            <div>
              <p className="widget-label">Check-in Date</p>
              <p className="widget-value">10 Sep 2025</p>
            </div>
          </div>
          <div className="widget-item">
            <Calendar className="widget-icon" />
            <div>
              <p className="widget-label">Check-out Date</p>
              <p className="widget-value">12 Sep 2025</p>
            </div>
          </div>
          <div className="widget-item">
            <Users className="widget-icon" />
            <div>
              <p className="widget-label">Guests</p>
              <p className="widget-value">2 Guests</p>
            </div>
          </div>
          <a href="#booking" className="btn-primary search-btn" style={{ display: 'inline-flex' }}>
            <Search size={18} /> Search Availability
          </a>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          {/* <h2>Why Choose Us</h2> */}
          <p className="section-subtitle">We provide the best experience for your perfect stay</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper"><span className="rupee">₹</span></div>
              <h3>Best Price</h3>
              <p>Great value for your money</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper"><span className="bed-icon" style={{ fontSize: '1.5rem' }}>🛏️</span></div>
              <h3>Luxury Rooms</h3>
              <p>Comfortable & elegant accommodations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper"><Check /></div>
              <h3>Easy Booking</h3>
              <p>Quick and hassle-free process</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper"><span style={{ fontSize: '1.5rem' }}>🎧</span></div>
              <h3>24/7 Support</h3>
              <p>Always here for you</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Short room preview on Home */}
      <section className="section bg-light" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Experience Luxury</h2>
          <p className="section-subtitle">Explore our world-class accommodations</p>
          <div className="rooms-grid" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            <div className="room-card wave-animate delay-1">
              <img src="/deluxe_room_updated.jpg" alt="Deluxe Room" style={{ objectFit: 'cover', height: '250px' }} />
              <div className="room-info" style={{ textAlign: 'left' }}>
                <h4>Deluxe Room</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Starting from ₹2,500 / night</p>
                <a href="#booking" className="btn-outline w-full" style={{ display: 'block', textAlign: 'center' }}>View Details</a>
              </div>
            </div>
            <div className="room-card wave-animate delay-2">
              <img src="/exec_room_new.jpg" alt="Executive Room" style={{ objectFit: 'cover', height: '250px' }} />
              <div className="room-info" style={{ textAlign: 'left' }}>
                <h4>Executive Room</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Starting from ₹3,500 / night</p>
                <a href="#booking" className="btn-outline w-full" style={{ display: 'block', textAlign: 'center' }}>View Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
