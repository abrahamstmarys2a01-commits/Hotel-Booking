import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main style={{ flex: 1 }}>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="gallery"><Gallery /></div>
        <div id="booking"><Booking /></div>
        <div id="contact"><Contact /></div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
