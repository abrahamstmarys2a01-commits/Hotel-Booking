import { Wifi, Droplet, Coffee, Dumbbell, Car, Wind, Bell, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <>
      <section className="section about-section" style={{ paddingTop: '6rem' }}>
        <div className="container about-container">
          <div className="about-content">
            <h2>About StayBook Resort</h2>
            <p>Nestled in the heart of Chennai, StayBook Resort offers a perfect blend of luxury, comfort and nature. Whether you're here for business or leisure, our resort provides an unforgettable experience with world-class amenities, exquisite dining and warm hospitality.</p>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              Founded with a vision to redefine luxury hospitality, StayBook Resort features meticulously designed accommodations, state-of-the-art facilities, and a dedicated team committed to making your stay exceptional.
            </p>
            <a href="#gallery" className="btn-primary mt-4" style={{ display: 'inline-block' }}>View Gallery</a>
          </div>
          <div className="about-image">
            <img src="/resort_pool.jpg" alt="Resort Pool" />
          </div>
        </div>
      </section>

      <section className="section amenities-section">
        <div className="container">
          <h2>Amenities</h2>
          <p className="section-subtitle">Everything you need for a perfect stay</p>
          <div className="amenities-grid">
            <div className="amenity-card"><Wifi /> <p>Free WiFi</p></div>
            <div className="amenity-card"><Droplet /> <p>Swimming Pool</p></div>
            <div className="amenity-card"><Coffee /> <p>Restaurant</p></div>
            <div className="amenity-card"><Dumbbell /> <p>Gym</p></div>
            <div className="amenity-card"><Car /> <p>Parking</p></div>
            <div className="amenity-card"><Wind /> <p>Air Conditioning</p></div>
            <div className="amenity-card"><Bell /> <p>Room Service</p></div>
            <div className="amenity-card"><Sparkles /> <p>Spa</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
