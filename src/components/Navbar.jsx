import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFFFF] text-[#1C2E24] shadow-md border-b border-[#2B7A4B] backdrop-blur-md bg-opacity-95 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* ================= BRAND LOGO AREA ================= */}
          <Link to="/" className="flex items-center group focus:outline-none z-[60] flex-shrink-0">
            <div className="h-24 flex items-center justify-center">
              <img 
                src="/Logo.png" 
                alt="Tamarind Haven Logo" 
                className="h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-800"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="flex flex-col justify-center ml-3">
              <span className="text-sm sm:text-lg tracking-[0.25em] uppercase font-black text-[#2B7A4B] leading-none">
                HOTEL TAMARIND HAVEN
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.4em] uppercase font-black text-[#D4AF37] mt-1">
                ⭐⭐⭐⭐⭐ 
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden lg:flex flex-grow justify-end items-center gap-8 font-bold text-[10px] uppercase tracking-[0.2em] ml-10">
            <div className="flex space-x-6 items-center">
              <Link to="/" className={`py-8 border-b-2 ${isActive('/') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#1C2E24]/80 border-transparent hover:text-[#2B7A4B]'}`}>Home</Link>
              <Link to="/accommodations" className={`py-8 border-b-2 ${isActive('/accommodations') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#1C2E24]/80 border-transparent hover:text-[#2B7A4B]'}`}>Accommodations</Link>
              <Link to="/services" className={`py-8 border-b-2 ${isActive('/services') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#1C2E24]/80 border-transparent hover:text-[#2B7A4B]'}`}>Services</Link>
              
              {/* Event & Meeting Hall - Optimized Spacing */}
              <Link 
                to="/dining-nightlife" 
                className={`py-8 border-b-2 whitespace-nowrap ${isActive('/dining-nightlife') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#1C2E24]/80 border-transparent hover:text-[#2B7A4B]'}`}
              >
                Meeting & Event HUB
              </Link>
              
              <Link to="/wellness" className={`py-8 border-b-2 ${isActive('/wellness') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#1C2E24]/80 border-transparent hover:text-[#2B7A4B]'}`}>Wellness</Link>
            </div>
            
            {/* BOOK NOW - PINNED TO FAR RIGHT */}
            <Link to="/book" className="bg-[#2B7A4B] text-white px-8 py-3.5 tracking-[0.2em] font-black hover:bg-[#1C2E24] transition-all duration-300 shadow-md whitespace-nowrap ml-6">
              Book Now
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="lg:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#2B7A4B] p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

     {/* MOBILE DRAWER */}
      <div className={`lg:hidden transition-all duration-300 bg-[#FFFFFF] border-t border-[#2B7A4B]/20 ${isOpen ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
        <div className="flex flex-col items-center justify-center px-6 py-8 space-y-4 text-xs uppercase tracking-[0.25em] font-bold text-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 w-full">Home</Link>
          <Link to="/accommodations" onClick={() => setIsOpen(false)} className="block py-2 w-full">Accommodations</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 w-full">Services</Link>
          <Link to="/dining-nightlife" onClick={() => setIsOpen(false)} className="block py-2 w-full text-[#2B7A4B] font-black">Event & Meeting Hall</Link>
          <Link to="/wellness" onClick={() => setIsOpen(false)} className="block py-2 w-full">Wellness</Link>
          
          <Link to="/book" onClick={() => setIsOpen(false)} className="block bg-[#2B7A4B] text-white py-3 mt-4 w-full max-w-[200px]">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;