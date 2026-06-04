import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Accommodations from './pages/Accommodations';
import ConferenceEvents from './pages/ConferenceEvents';
import DiningNightlife from './pages/DiningNightlife';
import Wellness from './pages/Wellness';
import Services from './pages/Services';
import BookNow from './pages/BookNow';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <BookingProvider>
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/conference-events" element={<ConferenceEvents />} />
            <Route path="/dining-nightlife" element={<DiningNightlife />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<BookNow />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </BookingProvider>
  );
}

export default App;