import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Navigation Links Data to avoid repetition
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Accommodations', path: '/accommodations' },
    { name: 'Services', path: '/services' },
    { name: 'Meeting & Event HUB', path: '/dining-nightlife' },
    { name: 'Wellness', path: '/wellness' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFFFF] text-[#1C2E24] shadow-md border-b border-[#2B7A4B] backdrop-blur-md bg-opacity-95 transition-all duration-300">
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* BRAND LOGO AREA */}
          <div className="flex items-center justify-start flex-shrink-0">
            <Link to="/" className="flex items-center group focus:outline-none">
              <img src="/Logo.png" alt="Logo" className="h-12 sm:h-16 w-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="flex flex-col justify-center ml-3">
                <span className="text-[10px] sm:text-lg tracking-[0.25em] uppercase font-black text-[#2B7A4B] leading-none">HOTEL TAMARIND HAVEN</span>
                <span className="text-[8px] sm:text-xs tracking-[0.4em] uppercase font-black text-[#D4AF37] mt-1">⭐⭐⭐⭐⭐</span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex justify-end items-center gap-6 font-black text-[10px] uppercase tracking-[0.2em]">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} className={`py-8 border-b-2 font-black ${isActive(link.path) ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-[#2B7A4B] border-transparent hover:text-[#2B7A4B]'}`}>
                {link.name}
              </Link>
            ))}
            <Link to="/book" className="bg-[#2B7A4B] text-white px-8 py-3.5 tracking-[0.2em] font-black hover:bg-[#1C2E24] transition-all duration-300 shadow-md ml-4">
              Book Now
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#2B7A4B] p-2 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 p-4 flex flex-col space-y-4 text-center">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#2B7A4B]">
              {link.name}
            </Link>
          ))}
          <Link to="/book" onClick={() => setIsOpen(false)} className="block bg-[#2B7A4B] text-white py-3 text-[10px] font-black uppercase tracking-[0.2em]">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;