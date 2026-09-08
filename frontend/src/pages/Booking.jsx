import { Users } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [selectedRoom, setSelectedRoom] = useState('Deluxe Room');
  const [price, setPrice] = useState('2,500');
  
  const rooms = [
    { name: 'Deluxe Room', price: '2,500', beds: 'King Bed', img: '/deluxe_room_updated.jpg' },
    { name: 'Executive Room', price: '3,500', beds: 'King Bed', img: '/exec_room_new.jpg' },
    { name: 'Suite Room', price: '5,000', beds: 'King Bed + Sofa', img: '/suite_room_new.jpg' }
  ];

  return (
    <section className="section rooms-booking-section bg-light" style={{ paddingTop: '4rem', minHeight: '80vh' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Book Your Stay</h2>
        <div className="rooms-booking-container">
          {/* Left: Rooms */}
          <div className="rooms-list">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Select a Room</h2>
            <div className="rooms-grid">
              {rooms.map((room, idx) => (
                <div 
                  className="room-card" 
                  key={idx} 
                  style={{ border: selectedRoom === room.name ? '2px solid var(--primary)' : '1px solid var(--border)' }}
                >
                  <img src={room.img} alt={room.name} />
                  <div className="room-info">
                    <h4>{room.name}</h4>
                    <div className="room-meta">
                      <span><Users size={14}/> 2 Guests</span>
                      <span>🛏️ {room.beds}</span>
                    </div>
                    <div className="room-price-row">
                      <p className="price">₹{room.price} <span>/ night</span></p>
                      <span className="badge">Available</span>
                    </div>
                    <button 
                      className="btn-primary w-full mt-3"
                      onClick={() => { setSelectedRoom(room.name); setPrice(room.price); }}
                    >
                      {selectedRoom === room.name ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="booking-form-container">
            <div className="booking-summary-card">
              <h3>Booking Summary</h3>
              <div className="selected-room-mini">
                <img src={rooms.find(r => r.name === selectedRoom)?.img} alt="Room" />
                <div>
                  <h4>{selectedRoom}</h4>
                  <p>Room No: 101</p>
                </div>
              </div>
              
              <div className="summary-details">
                <div className="summary-row"><span>Check-in</span> <span>10 Sep 2025</span></div>
                <div className="summary-row"><span>Check-out</span> <span>12 Sep 2025</span></div>
                <div className="summary-row"><span>Number of Nights</span> <span>2 Nights</span></div>
                <div className="summary-row mt-3"><span>Price per Night</span> <span>₹{price}</span></div>
                <div className="summary-total mt-3">
                  <span>Total Amount</span>
                  <span className="total-price">₹{(parseInt(price.replace(',','')) * 2).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="guest-info-card mt-4">
              <h3>Guest Information</h3>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <div className="phone-input">
                  <select><option>+91</option></select>
                  <input type="tel" placeholder="Enter your phone number" />
                </div>
              </div>
              
              <h3 className="mt-4">Payment Method</h3>
              <div className="payment-options">
                <label className="payment-option selected">
                  <input type="radio" name="payment" defaultChecked />
                  <div>
                    <strong>Pay at Hotel</strong>
                    <p>Pay during check-in at the hotel</p>
                  </div>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" />
                  <div>
                    <strong>UPI / Card / Wallet</strong>
                    <p>Secure and easy payment</p>
                  </div>
                </label>
              </div>
              
              <button 
                className="btn-primary w-full mt-4 btn-large"
                onClick={() => alert('Booking Confirmed!')}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
