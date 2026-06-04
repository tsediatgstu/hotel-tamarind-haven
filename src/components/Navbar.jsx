import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Updated Navbar background to a premium luxury Gold layer */}
      <nav className="sticky top-0 z-50 bg-[#D4AF37] text-[#1C2E24] shadow-md border-b border-[#2B7A4B]/20 backdrop-blur-md bg-opacity-95 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-0">
          <div className="flex items-center justify-between h-24">
            
            J
{/* ================= BRAND LOGO AREA (LEFT CORNER - FLUSH TO TOP & LEFT) ================= */}
<Link to="/" className="absolute top-1 left-1 flex items-center space-x-3 group focus:outline-none p-0 m-0">
  {/* Logo.png Container - Removed padding/margins to guarantee 0 spacing */}
  <div className="h-15 w-auto sm:h-23 overflow-hidden flex items-center justify-center p-0 m-0">
    <img 
      src="/Logo.png" 
      alt="Tamarind Haven Logo" 
      className="h-full w-auto object-contain transform group-hover:scale-205 transition-transform duration-800 m-0 p-0"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  </div>
  
<div className="flex flex-col justify-center m-0 p-0">
  <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-black text-[#1C2E24] group-hover:text-[#2B7A4B] transition-colors duration-300 leading-none antialiased">
    HOTEL TAMARIND <span className="text-[#2B7A4B] font-black group-hover:text-[#1C2E24]">HAVEN</span>
  </span>
</div>
</Link>
            {/* ================= DESKTOP NAVIGATION ================= */}
            {/* High-contrast dark charcoal text with emerald accents over the gold background */}
            <div className="hidden lg:flex space-x-8 items-center font-bold text-xs uppercase tracking-[0.2em]">
              <Link 
                to="/" 
                className={`transition-colors duration-200 py-2 border-b-2 ${isActive('/') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#1C2E24]/80 border-transparent hover:text-[#2B7A4B]'}`}
              >
                Home
              </Link>
              <Link 
                to="/accommodations" 
                className={`transition-colors duration-200 py-2 border-b-2 ${isActive('/accommodations') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#1C2E24]/80 border-transparent hover:text-[#2B7A4B]'}`}
              >
                Accommodations
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors duration-200 py-2 border-b-2 ${isActive('/services') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#1C2E24]/80 border-transparent hover:text-[#2B7A4B]'}`}
              >
                Services
              </Link>
              <Link 
                to="/dining-nightlife" 
                className={`transition-colors duration-200 py-2 border-b-2 ${isActive('/dining-nightlife') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#1C2E24]/80 border-transparent hover:text-[#2B7A4B]'}`}
              >
                Dining
              </Link>
              <Link 
                to="/wellness" 
                className={`transition-colors duration-200 py-2 border-b-2 ${isActive('/wellness') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#1C2E24]/80 border-transparent hover:text-[#2B7A4B]'}`}
              >
                Wellness
              </Link>
              
              {/* Premium Contrast Emerald Green Action Button */}
              <Link 
                to="/book" 
                className="ml-4 bg-[#2B7A4B] text-white px-6 py-3.5 tracking-[0.2em] font-black rounded-xl hover:bg-[#1C2E24] hover:text-white transition-all duration-300 shadow-md shadow-[#2B7A4B]/20 transform active:scale-[0.98]"
              >
                Book Now
              </Link>
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-[#2B7A4B] hover:text-[#1C2E24] p-2 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* ================= RESPONSIVE MOBILE DRAWER ================= */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out border-b border-[#2B7A4B]/20 bg-[#E5C043] overflow-hidden ${isOpen ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pt-4 pb-8 space-y-4 text-xs uppercase tracking-[0.25em] font-bold">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 ${isActive('/') ? 'text-[#2B7A4B]' : 'text-[#1C2E24]/80 hover:text-[#2B7A4B]'}`}
            >
              Home
            </Link>
            <Link 
              to="/accommodations" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 ${isActive('/accommodations') ? 'text-[#2B7A4B]' : 'text-[#1C2E24]/80 hover:text-[#2B7A4B]'}`}
            >
              Accommodations
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 ${isActive('/services') ? 'text-[#2B7A4B]' : 'text-[#1C2E24]/80 hover:text-[#2B7A4B]'}`}
            >
              Services
            </Link>
            <Link 
              to="/dining-nightlife" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 ${isActive('/dining-nightlife') ? 'text-[#2B7A4B]' : 'text-[#1C2E24]/80 hover:text-[#2B7A4B]'}`}
            >
              Dining &amp; Nightlife
            </Link>
            <Link 
              to="/wellness" 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 ${isActive('/wellness') ? 'text-[#2B7A4B]' : 'text-[#1C2E24]/80 hover:text-[#2B7A4B]'}`}
            >
              Wellness
            </Link>
            
            <div className="pt-4">
              <Link 
                to="/book" 
                onClick={() => setIsOpen(false)} 
                className="block bg-[#2B7A4B] text-white text-center py-3.5 tracking-[0.2em] font-black rounded-xl shadow-md hover:bg-[#1C2E24] hover:text-white transition-all"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;