import { useEffect } from 'react';

export default function Gallery() {
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

    const elements = document.querySelectorAll('.slide-left, .slide-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const images = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg',
    '/gallery7.jpg',
    '/gallery8.jpg',
    '/gallery9.jpg',
    '/gallery10.jpg',
    '/gallery11.jpg',
    '/gallery12.jpg',
    '/gallery13.jpg',
    '/gallery14.jpg',
    '/gallery15.jpg'
  ];

  return (
    <section className="section gallery-section" style={{ paddingTop: '6rem', minHeight: '80vh' }}>
      <div className="container">
        <h2>Resort Gallery</h2>
        <p className="section-subtitle">Take a visual tour of our beautiful property</p>
        <div className="gallery-grid" style={{ overflow: 'hidden' }}>
          {images.map((img, i) => (
            <div className={`gallery-item ${i % 2 === 0 ? 'slide-left' : 'slide-right'} delay-${(i % 3) + 1}`} key={i}>
              <img src={img.startsWith('/') ? img : `${img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`} alt={`Gallery ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
