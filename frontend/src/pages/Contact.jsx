import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section" style={{ paddingTop: '6rem', minHeight: '70vh' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Contact Us</h2>
        <p className="section-subtitle">We would love to hear from you</p>

        <div className="contact-grid" style={{ gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Get In Touch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', background: 'var(--primary-light)', borderRadius: '50%', color: 'var(--primary)' }}>
                  <MapPin />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Our Location</h4>
                  <p style={{ color: 'var(--text-muted)' }}>123 Beach Road, Coastal Area,<br/>Chennai, Tamil Nadu - 600001</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', background: 'var(--primary-light)', borderRadius: '50%', color: 'var(--primary)' }}>
                  <Phone />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Phone Number</h4>
                  <p style={{ color: 'var(--text-muted)' }}>+91 98765 43210</p>
                  <p style={{ color: 'var(--text-muted)' }}>+91 12345 67890</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', background: 'var(--primary-light)', borderRadius: '50%', color: 'var(--primary)' }}>
                  <Mail />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Email Address</h4>
                  <p style={{ color: 'var(--text-muted)' }}>info@staybookresort.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', background: 'var(--primary-light)', borderRadius: '50%', color: 'var(--primary)' }}>
                  <Clock />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Reception Hours</h4>
                  <p style={{ color: 'var(--text-muted)' }}>24/7 Support available</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  placeholder="Write your message here..." 
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', minHeight: '120px', resize: 'vertical', fontFamily: 'inherit' }}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full mt-3">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
