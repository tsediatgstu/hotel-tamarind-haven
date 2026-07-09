import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFFFF] text-[#1C2E24] shadow-md border-b border-[#2B7A4B] backdrop-blur-md bg-opacity-95 transition-all duration-300">
      <div className="w-full px-4 lg:px-0">
        <div className="flex items-center justify-between h-24">
          
          {/* ================= BRAND LOGO AREA - FLUSH LEFT ================= */}
          <div className="flex items-center justify-start flex-shrink-0">
            <Link to="/" className="flex items-center group focus:outline-none z-[60]">
              <div className="h-24 flex items-center">
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
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden lg:flex justify-end items-center gap-8 font-black text-[10px] uppercase tracking-[0.2em] px-4">
            <div className="flex space-x-6 items-center">
              <Link to="/" className={`py-8 border-b-2 font-black ${isActive('/') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#2B7A4B] border-transparent hover:text-[#2B7A4B]'}`}>Home</Link>
              <Link to="/accommodations" className={`py-8 border-b-2 font-black ${isActive('/accommodations') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#2B7A4B] border-transparent hover:text-[#2B7A4B]'}`}>Accommodations</Link>
              <Link to="/services" className={`py-8 border-b-2 font-black ${isActive('/services') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#2B7A4B] border-transparent hover:text-[#2B7A4B]'}`}>Services</Link>
              
              <Link 
                to="/dining-nightlife" 
                className={`py-8 border-b-2 font-black whitespace-nowrap ${isActive('/dining-nightlife') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#2B7A4B] border-transparent hover:text-[#2B7A4B]'}`}
              >
                Meeting & Event HUB
              </Link>
              
              <Link to="/wellness" className={`py-8 border-b-2 font-black ${isActive('/wellness') ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#2B7A4B] border-transparent hover:text-[#2B7A4B]'}`}>Wellness</Link>
            </div>
            
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
    </nav>
  );
}

export default Navbar;