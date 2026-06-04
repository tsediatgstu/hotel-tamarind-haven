import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Array holding local professional hotel images
  const heroImages = ['/a.png', '/b.png', '/c.png', '/d.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Smooth automatic luxury slideshow engine (changes image every 5 seconds)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [heroImages.length]);

  return (
    <div className="bg-[#FFFFFF] text-[#1C2E24] font-sans antialiased selection:bg-[#2B7A4B]/20">
      
      {/* ================= HERO SECTION (DYNAMIC ULTRA-LUXURY SLIDESHOW) ================= */}
      <div className="relative min-h-screen flex items-center bg-[#1C2E24] overflow-hidden">
        {/* Dynamic Image Layer */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((imgUrl, index) => (
            <img
              key={imgUrl}
              src={imgUrl}
              alt={`Tamarind Haven Ambience ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-20 scale-100' : 'opacity-0 scale-105'
              }`}
              onError={(e) => {
                // Fallback premium images if local assets are missing
                const fallbacks = [
                  " ",
                  " ",
                  " ",
                  " "
                ];
                e.target.src = fallbacks[index];
              }}
            />
          ))}
          {/* Multi-layered cinematic vignette for deep text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C2E24]/70 via-[#132019]/85 to-[#0F1A14]" />
          <div className="absolute inset-0 bg-radial-vignette opacity-40" />
        </div>

        {/* Hero Content Frame */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 flex justify-center text-center">
          <div className="max-w-4xl mx-auto">


           {/* Master Hotel Identity Typography */}
{/* Master Hotel Identity Typography */}
<h1 className="text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.18em] leading-none mb-8 flex flex-col gap-4">
  {/* First Line: Bold, high-contrast rich Metallic Gold */}
  <span className="font-black text-[#D4AF37] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] block tracking-[0.25em] antialiased">
    Welcome to
  </span>
  
{/* Second Line: Ultra-Bold, Uniform Core Brand Layer in Full Premium Green */}
{/* Second Line: Ultra-Bold, Expanded Size, Uniform Core Brand Layer in Full Premium Green */}
<span className="text-2xl sm:text-3xl lg:text-4xl tracking-[0.25em] uppercase font-black text-[#2B7A4B] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] block">
  HOTEL TAMARIND HAVEN
</span>
</h1>

          {/* Your Dedicated Manifesto Quote with Custom Green and Gold Styling */}
<p className="text-xl sm:text-2xl lg:text-3xl font-serif tracking-wide max-w-3xl mx-auto leading-relaxed px-4 mb-14 drop-shadow-md">
  <span className="text-[#D4AF37] font-black">"</span>
  <span className="text-[#2B7A4B] font-black not-italic">
    Serve With Heart, Lead With Pride, Grow With Purpose.
  </span>
  <span className="text-[#D4AF37] font-black">"</span>
</p>
            
            {/* Premium Dual Action Triggers */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link 
                to="/book" 
                className="w-full sm:w-auto bg-[#D4AF37] text-[#1C2E24] px-12 py-5 text-xs uppercase tracking-[0.25em] font-black rounded-sm shadow-2xl shadow-[#D4AF37]/10 hover:bg-white hover:text-[#1C2E24] transition-all duration-400 transform active:scale-[0.99] border border-[#D4AF37] hover:border-white"
              >
                Book A Stay
              </Link>
             <Link 
  to="/accommodations" 
  className="w-full sm:w-auto bg-[#D4AF37] text-[#1C2E24] px-12 py-5 text-xs uppercase tracking-[0.25em] font-black rounded-sm shadow-2xl shadow-[#D4AF37]/10 hover:bg-white hover:text-[#1C2E24] transition-all duration-400 transform active:scale-[0.99] border border-[#D4AF37] hover:border-white"
>
  Explore Accommodations
</Link>
            </div>
          </div>
        </div>

        {/* Desktop Slide Control Strip */}
        <div className="absolute bottom-12 right-12 z-30 hidden lg:flex items-center space-x-4 bg-black/20 backdrop-blur-md px-4 py-2.5 rounded-sm border border-white/5">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">0{currentImageIndex + 1}</span>
          <div className="flex space-x-1.5">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-1 transition-all duration-500 rounded-none ${idx === currentImageIndex ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20 hover:bg-white/50'}`}
                aria-label={`Navigate to layout slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">0{heroImages.length}</span>
        </div>
      </div>

      {/* ================= BRAND CONNECTION BAR (CONCIERGE MATRIX) ================= */}
      <div className="bg-[#1C2E24] border-b border-[#D4AF37]/20 text-[#FDFDFB] py-6 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-3.5 text-xs tracking-[0.2em] uppercase font-bold text-neutral-300">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] animate-pulse" />
            <span>24/7 Global Concierge Linkage Architecture:</span>
          </div>

          {/* Social Platforms Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] font-black uppercase tracking-[0.25em]">
            <a href="https://t.me" target="_blank" rel="noreferrer" className="text-white hover:text-[#D4AF37] transition-all duration-300 transform hover:-translate-y-0.5">
              Telegram
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="text-white hover:text-[#D4AF37] transition-all duration-300 transform hover:-translate-y-0.5">
              WhatsApp
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-all duration-300">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-all duration-300">
              Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-all duration-300">
              YouTube
            </a>
          </div>
        </div>
      </div>{/* ================= SECTION: BRAND CORPORATE MOTTO ================= */}
      <section className="max-w-5xl mx-auto text-center py-32 px-4 sm:px-6">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-black block mb-4">Our Core Philosophy</span>
        
        {/* Dynamic Green & Gold Headline Layer */}
        <h2 className="text-3xl sm:text-5xl tracking-wide max-w-4xl mx-auto leading-relaxed mb-8">
          <span className="text-[#D4AF37] font-black mr-1">"</span>
          <span className="text-[#2B7A4B] font-black not-italic tracking-[0.02em]">
            Serve With Heart, Lead With Pride, Grow With Purpose.
          </span>
          <span className="text-[#D4AF37] font-black ml-1">"</span>
        </h2>

        <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-10" />
        
        <p className="text-neutral-500 max-w-3xl mx-auto leading-relaxed font-light text-xs sm:text-sm tracking-widest">
          At Hotel Tamarind Haven, we orchestrate seamless stays tailored perfectly for modern global enterprise pioneers. Every deployment framework integrates strict international benchmarks across all rooms—featuring standard fiber-backed high-speed VPN Wi-Fi infrastructure, digital concierge tablets, 400-thread-count Egyptian cotton bedding, smart automated thermal zoning, and our signature relaxing organic ambient oil scent diffusers.
        </p>
      </section>

      {/* ================= GRID: FEATURED SERVICES & LUXURY PATHWAYS ================= */}
      <section className="bg-[#FBFBFA] border-t border-b border-neutral-100 py-32 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-black mb-3">Designed For Excellence</h3>
            <p className="text-2xl sm:text-4xl font-serif font-light text-[#1C2E24] tracking-wide">Premium Ecosystem Features</p>
            <div className="w-12 h-[1px] bg-[#2B7A4B]/30 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            
            {/* Feature Item 1: Culinary & Nightlife Outlets */}
            <div className="group bg-[#FFFFFF] p-6 rounded-none border border-neutral-200/60 hover:border-[#D4AF37]/40 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="overflow-hidden mb-8 bg-[#1C2E24] aspect-[4/3] rounded-none relative">
                  <img 
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" 
                    alt="Fine Dining Gastronomy" 
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <h4 className="text-base font-black uppercase tracking-widest mb-4 text-[#1C2E24] group-hover:text-[#2B7A4B] transition-colors flex items-center justify-between">
                  <span>Culinary & Nightlife Outlets</span>
                  <span className="text-xs font-serif italic text-[#D4AF37]">01</span>
                </h4>

                {/* Sub-Page Registry Matrix */}
                <div className="space-y-3 pt-2 border-t border-neutral-100">
                  <div className="flex items-start space-x-2">
                    <span className="text-[#D4AF37] text-xs font-bold">✔</span>
                    <p className="text-[11px] text-neutral-500 font-light tracking-wider leading-tight">
                      <strong className="text-[#1C2E24] font-bold uppercase block text-[10px] tracking-widest mb-0.5">2 Signature Restaurants</strong>
                      One dedicated to premium fine dining and another for an international buffet/all-day dining registry.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#D4AF37] text-xs font-bold">✔</span>
                    <p className="text-[11px] text-neutral-500 font-light tracking-wider leading-tight">
                      <strong className="text-[#1C2E24] font-bold uppercase block text-[10px] tracking-widest mb-0.5">The Lounge & Cafe</strong>
                      Sophisticated open spaces engineered for executive networking, artisanal coffees, and fresh morning pastries.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#D4AF37] text-xs font-bold">✔</span>
                    <p className="text-[11px] text-neutral-500 font-light tracking-wider leading-tight">
                      <strong className="text-[#1C2E24] font-bold uppercase block text-[10px] tracking-widest mb-0.5">Rooftop & Sky View VIP Bar</strong>
                      Exclusive atmospheric spaces offering premium reservation capabilities and panoramic city skyline views.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-[10px] uppercase tracking-[0.2em] font-black text-[#D4AF37] mt-8 block group-hover:translate-x-1 transition-transform duration-300">
                Explore Menus & Reservations &rarr;
              </div>
            </div>

            {/* Feature Item 2: Conferences... (Keep your rest items 2 & 3 below here) */}
            {/* Feature Item 2: Conferences */}
            <div className="group bg-[#FFFFFF] p-5 rounded-none border border-neutral-200/60 hover:border-[#D4AF37]/40 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="overflow-hidden mb-8 bg-[#1C2E24] aspect-[4/3] rounded-none relative">
                  <img 
                    src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80" 
                    alt="MICE Conference Spaces" 
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h4 className="text-base font-black uppercase tracking-widest mb-3 text-[#1C2E24] group-hover:text-[#2B7A4B] transition-colors flex items-center justify-between">
                  <span>Corporate MICE Hubs</span>
                  <span className="text-xs font-serif italic text-[#D4AF37]">02</span>
                </h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed tracking-widest">
                  Featuring 8 noise-insulated dynamic conference environments and an integrated executive boardroom equipped for secure operations.
                </p>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-black text-[#D4AF37] mt-6 block group-hover:translate-x-1 transition-transform duration-300">
                Explore Hubs &rarr;
              </div>
            </div>

            {/* Feature Item 3: Wellness */}
            <div className="group bg-[#FFFFFF] p-5 rounded-none border border-neutral-200/60 hover:border-[#D4AF37]/40 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="overflow-hidden mb-8 bg-[#1C2E24] aspect-[4/3] rounded-none relative">
                  <img 
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" 
                    alt="Wellness Spa & Gym" 
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h4 className="text-base font-black uppercase tracking-widest mb-3 text-[#1C2E24] group-hover:text-[#2B7A4B] transition-colors flex items-center justify-between">
                  <span>Physical Rejuvenation</span>
                  <span className="text-xs font-serif italic text-[#D4AF37]">03</span>
                </h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed tracking-widest">
                  Re-energize within our expansive commercial gym space complete with isolated dry sauna thermal zones and dedicated spa massage layouts.
                </p>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-black text-[#D4AF37] mt-6 block group-hover:translate-x-1 transition-transform duration-300">
                Review Health &rarr;
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ACCESSIBILITY SERVICE OVERVIEW ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="bg-[#1C2E24] text-white p-12 sm:p-24 rounded-none relative overflow-hidden shadow-2xl border border-[#D4AF37]/30">
          
          {/* Subtle watermark overlay background */}
          <div className="absolute top-0 right-0 p-8 text-[16rem] font-serif font-black text-white/[0.015] select-none pointer-events-none leading-none">
            EST
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-black block mb-4">Complete Infrastructure Guarantee</span>
            <h4 className="text-2xl sm:text-4xl font-serif font-light mb-8 tracking-wide">Unrivaled Universal Property Accessibility</h4>
            <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed tracking-widest mb-12 max-w-xl mx-auto">
              Engineered systematically to cater to all guests with complete physical security. Our property deploys 3 specialized continuous high-capacity vertical elevators alongside highly visible, clearly demarcated priority parking arrangements.
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center bg-transparent border border-[#D4AF37] text-[#D4AF37] px-12 py-4.5 text-xs uppercase tracking-[0.25em] font-black hover:bg-[#D4AF37] hover:text-[#1C2E24] transition-all duration-400 rounded-none shadow-xl active:scale-[0.99] transform"
            >
              Review Guest Services &nbsp; &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;