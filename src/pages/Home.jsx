import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Array holding high-resolution local hotel assets placed in the public folder
  const heroImages = [
    '/a.png',  // High-End Executive Hotel Suite Interior
    '/b.png',  // Luxury Hotel Core Ambiance
    '/c.png',
    '/d.png'   // Premium Wellness Sanctuary Atmosphere
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Smooth automatic luxury slideshow engine (changes image every 5 seconds)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [heroImages.length]);

  return (
    <div className="bg-[#FFFFFF] text-[#1C2E24] font-sans antialiased">
      
      {/* ================= HERO SECTION (CRISP HIGH-CONTRAST LIGHT MULTI-STAGE DISPLAY) ================= */}
      <div className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between bg-[#FDFDFB] overflow-hidden border-b border-neutral-200">
        
        {/* Absolute Core Image Canvas - Optimized for Detail, Contrast, and Perfect Visibility */}
        <div className="absolute inset-0 z-0 bg-[#F5F5F2]">
          {heroImages.map((imgUrl, index) => (
            <img
              key={imgUrl}
              src={imgUrl}
              alt={`Tamarind Haven Ambience ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out mix-blend-multiply ${
                index === currentImageIndex ? 'opacity-95 scale-100 filter contrast-[1.08] brightness-[0.98]' : 'opacity-0 scale-102'
              }`}
              onError={(e) => {
                // Fallback elegant assets if local public file rendering misses
                const fallbacks = [
                  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=90",
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90",
                  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=90",
                  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=90"
                ];
                e.target.src = fallbacks[index];
              }}
            />
          ))}
          {/* Studio Light Balancing Veil: Maintains image detail clarity while guaranteeing pure crisp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFDFB]/90 via-[#FDFDFB]/60 to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-[#FDFDFB]/80 lg:hidden" />
        </div>

        {/* Hero Content Frame - Pure Bold Typography Centered with Absolute Legibility */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pt-32 pb-20 flex justify-center text-center">
          <div className="max-w-2xl flex flex-col items-center">

            {/* Master Hotel Identity Typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.18em] leading-none mb-8 flex flex-col gap-3 items-center">
              {/* First Line: Deep High-Contrast Emerald Green */}
              <span className="font-black text-[#2B7A4B] block tracking-[0.1em] antialiased text-3g sm:text-4xl uppercase mb-3">
                Welcome to
              </span>
              {/* Second Line: High-Contrast Core Brand Layer */}
              <span className="text-2xl sm:text-5xl lg:text-5xl tracking-[0.15em] uppercase font-black text-[#2B7A4B] block">
                HOTEL TAMARIND HAVEN
              </span>
            </h1>

            {/* Dedicated Manifesto Quote with Custom Deep Emerald Green Styling */}
            <p className="text-lg sm:text-xl lg:text-2xl font-serif tracking-wide leading-relaxed mb-12 text-[#1C2E24]">
              <span className="text-[#2B7A4B] font-black mr-1">“</span>
              <span className="text-[#1C2E24] font-black not-italic">
                Serve With Heart, Lead With Pride, Grow With Purpose.
              </span>
              <span className="text-[#2B7A4B] font-black ml-1">”</span>
            </p>
            
            {/* Premium Dual Action Triggers */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
              <Link 
                to="/book" 
                className="w-full sm:w-auto bg-[#1C2E24] text-white px-10 py-4.5 text-xs uppercase tracking-[0.25em] font-black rounded-none shadow-lg hover:bg-[#2B7A4B] transition-all duration-400 transform active:scale-[0.99] border border-[#1C2E24] hover:border-[#2B7A4B] text-center"
              >
                Book A Stay
              </Link>
              <Link 
                to="/accommodations" 
                className="w-full sm:w-auto bg-transparent text-[#1C2E24] px-10 py-4.5 text-xs uppercase tracking-[0.25em] font-black rounded-none hover:bg-[#1C2E24] hover:text-white transition-all duration-400 transform active:scale-[0.99] border-2 border-[#1C2E24] text-center"
              >
                Explore Accommodations
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Slide Control Strip - Modified to Center Layout Aesthetic */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 hidden lg:flex items-center justify-center">
          <div className="flex items-center space-x-4 bg-[#FDFDFB] px-5 py-2.5 border border-neutral-200 shadow-sm">
            <span className="text-[10px] uppercase tracking-widest text-[#1C2E24]/60 font-mono">0{currentImageIndex + 1}</span>
            <div className="flex space-x-2">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-none ${idx === currentImageIndex ? 'w-10 bg-[#2B7A4B]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'}`}
                  aria-label={`Maps to layout slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#1C2E24]/60 font-mono">0{heroImages.length}</span>
          </div>
        </div>
      </div>

      {/* ================= BRAND CONNECTION BAR (CONCIERGE MATRIX - REMOVED GOLD & REPLACED WITH SOLID GREEN REAL BUTTON STYLE) ================= */}
      <div className="bg-[#1C2E24] border-b border-[#2B7A4B]/30 text-[#FDFDFB] py-6 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Professional Architecture Real Button Wrapper */}
          <button className="flex items-center space-x-3.5 text-xs tracking-[0.2em] uppercase font-black bg-[#2B7A4B] text-white px-5 py-3 border border-[#2B7A4B] hover:bg-transparent hover:text-[#2B7A4B] transition-all duration-300 rounded-none cursor-pointer">
            <span className="inline-block w-2 h-2 rounded-none bg-white animate-pulse" />
            <span>24/7 Global Concierge Linkage Architecture:</span>
          </button>

          {/* Social Platforms Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] font-black uppercase tracking-[0.25em]">
            <a href="https://t.me" target="_blank" rel="noreferrer" className="text-white hover:text-[#2B7A4B] transition-all duration-300 transform hover:-translate-y-0.5">
              Telegram
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="text-white hover:text-[#2B7A4B] transition-all duration-300 transform hover:-translate-y-0.5">
              WhatsApp
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#2B7A4B] transition-all duration-300">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#2B7A4B] transition-all duration-300">
              Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#2B7A4B] transition-all duration-300">
              YouTube
            </a>
          </div>
        </div>
      </div>



{/* ================= SECTION: BRAND CORPORATE MOTTO ================= */}
<section className="max-w-5xl mx-auto py-15 px-2 sm:px-4">
  
  {/* The Philosophy Card Container */}
  <div className="bg-[#FDFDFB] border border-[#2B7A4B]/20 p-8 sm:p-12 shadow-lg rounded-sm text-center">
    
    <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#2B7A4B] font-black block mb-6">
      Our Institutional Philosophy
    </span>
    
    {/* Headline in Luxurious Gold */}
    <h2 className="text-4xl sm:text-3xl tracking-wide max-w-4xl mx-auto leading-tight mb-6 font-serif italic text-[#D4AF37]">
      <span className="font-bold not-italic tracking-[0.02em]">
        "Serve With Heart, Lead With Pride, Grow With Purpose."
      </span>
    </h2>

    <div className="w-16 h-[1px] bg-[#2B7A4B] mx-auto mb-10" />
    
    {/* The 5-Line Bold Green Text */}
    <p className="text-[#2B7A4B] font-bold text-justify leading-relaxed max-w-3xl mx-auto text-sm sm:text-base tracking-[0.02em]">
      Hotel Tamarind Haven harmonizes operational precision with refined hospitality, acting as a nexus for modern enterprise. 
      Our philosophy—to Serve with Heart, Lead with Pride, and Grow with Purpose—is embedded in every facet of our infrastructure. 
      Engineered for peak productivity and restoration, our suites feature secure, high-speed fiber connectivity and digital concierge services. 
      Strategically positioned just 20 minutes from the Ethiopian Airlines hub, we ensure seamless transit for every guest. 
      We provide a sophisticated, world-class oasis designed specifically for the discerning traveler and the global pioneer.
    </p>

    {/* CTA Button */}
    <div className="flex justify-center mt-10">
      <button className="group relative inline-flex items-center justify-center overflow-hidden border border-[#2B7A4B] bg-transparent px-10 py-3 text-[11px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#2B7A4B] transition-all duration-500 hover:text-white rounded-md">
        <span className="absolute inset-0 bg-[#2B7A4B] transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
        <span className="relative z-10 transition-colors duration-300">
          Secure Your Stay
        </span>
      </button>
    </div>
  </div>
</section>



      {/* ================= GRID: FEATURED SERVICES & LUXURY PATHWAYS ================= */}
      <section className="bg-[#FBFBFA] border-t border-b border-neutral-100 py-32 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#2B7A4B] font-black mb-3">Designed For Excellence</h3>
            <p className="text-2xl sm:text-4xl font-serif font-light text-[#1C2E24] tracking-wide">Premium Ecosystem Features</p>
            <div className="w-12 h-[1px] bg-[#2B7A4B]/30 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            
            {/* Feature Item 1: Culinary & Nightlife Outlets */}
            <Link to="/dining-nightlife" className="group bg-[#FFFFFF] p-6 rounded-none border border-neutral-200/60 hover:border-[#2B7A4B]/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="overflow-hidden mb-8 bg-[#1C2E24] aspect-[4/3] rounded-none relative">
                  <img 
                    src="/a.png" 
                    alt="Fine Dining Gastronomy" 
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <h4 className="text-base font-black uppercase tracking-widest mb-4 text-[#1C2E24] group-hover:text-[#2B7A4B] transition-colors flex items-center justify-between">
                  <span>Culinary & Nightlife Outlets</span>
                  <span className="text-xs font-serif italic text-[#2B7A4B]">01</span>
                </h4>

                {/* Sub-Page Registry Matrix */}
                <div className="space-y-3 pt-2 border-t border-neutral-100">
                  <div className="flex items-start space-x-2">
                    <span className="text-[#2B7A4B] text-xs font-bold">✔</span>
                    <div className="text-[11px] text-neutral-500 font-light tracking-wider leading-tight">
                      <strong className="text-[#1C2E24] font-bold uppercase block text-[10px] tracking-widest mb-0.5">2 Signature Restaurants</strong>
                      One dedicated to premium fine dining and another for an international buffet/all-day dining registry.
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#2B7A4B] text-xs font-bold">✔</span>
                    <div className="text-[11px] text-neutral-500 font-light tracking-wider leading-tight">
                      <strong className="text-[#1C2E24] font-bold uppercase block text-[10px] tracking-widest mb-0.5">The Lounge & Cafe</strong>
                      Sophisticated open spaces engineered for executive networking, artisanal coffees, and fresh morning pastries.
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#2B7A4B] text-xs font-bold">✔</span>
                    <div className="text-[11px] text-neutral-500 font-light tracking-wider leading-tight">
                      <strong className="text-[#1C2E24] font-bold uppercase block text-[10px] tracking-widest mb-0.5">Rooftop & Sky View VIP Bar</strong>
                      Exclusive atmospheric spaces offering premium reservation capabilities and panoramic city skyline views.
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[10px] uppercase tracking-[0.2em] font-black text-[#2B7A4B] mt-8 block group-hover:translate-x-1 transition-transform duration-300">
                Explore Menus & Reservations &rarr;
              </div>
            </Link>

            {/* Feature Item 2: Conferences */}
            <Link to="/conference-events" className="group bg-[#FFFFFF] p-5 rounded-none border border-neutral-200/60 hover:border-[#2B7A4B]/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="overflow-hidden mb-8 bg-[#1C2E24] aspect-[4/3] rounded-none relative">
                  <img 
                    src="/b.png" 
                    alt="MICE Conference Spaces" 
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h4 className="text-base font-black uppercase tracking-widest mb-3 text-[#1C2E24] group-hover:text-[#2B7A4B] transition-colors flex items-center justify-between">
                  <span>Corporate MICE Hubs</span>
                  <span className="text-xs font-serif italic text-[#2B7A4B]">02</span>
                </h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed tracking-widest">
                  Featuring 8 noise-insulated dynamic conference environments and an integrated executive boardroom equipped for secure operations.
                </p>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-black text-[#2B7A4B] mt-6 block group-hover:translate-x-1 transition-transform duration-300">
                Explore Hubs &rarr;
              </div>
            </Link>

            {/* Feature Item 3: Wellness */}
            <Link to="/wellness" className="group bg-[#FFFFFF] p-5 rounded-none border border-neutral-200/60 hover:border-[#2B7A4B]/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="overflow-hidden mb-8 bg-[#1C2E24] aspect-[4/3] rounded-none relative">
                  <img 
                    src="/c.png" 
                    alt="Wellness Spa & Gym" 
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h4 className="text-base font-black uppercase tracking-widest mb-3 text-[#1C2E24] group-hover:text-[#2B7A4B] transition-colors flex items-center justify-between">
                  <span>Physical Rejuvenation</span>
                  <span className="text-xs font-serif italic text-[#2B7A4B]">03</span>
                </h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed tracking-widest">
                  Re-energize within our expansive commercial gym space complete with isolated dry sauna thermal zones and dedicated spa massage layouts.
                </p>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-black text-[#2B7A4B] mt-6 block group-hover:translate-x-1 transition-transform duration-300">
                Review Health &rarr;
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= ACCESSIBILITY SERVICE OVERVIEW ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="bg-[#1C2E24] text-white p-12 sm:p-24 rounded-none relative overflow-hidden shadow-2xl border border-[#2B7A4B]/30">
          
          {/* Subtle watermark overlay background */}
          <div className="absolute top-0 right-0 p-8 text-[16rem] font-serif font-black text-white/[0.015] select-none pointer-events-none leading-none">
            EST
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#2B7A4B] font-black block mb-4">Complete Infrastructure Guarantee</span>
            <h4 className="text-2xl sm:text-4xl font-serif font-light mb-8 tracking-wide">Unrivaled Universal Property Accessibility</h4>
            <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed tracking-widest mb-12 max-w-xl mx-auto">
              Engineered systematically to cater to all guests with complete physical security. Our property deploys 3 specialized continuous high-capacity vertical elevators alongside highly visible, clearly demarcated priority parking arrangements.
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center bg-transparent border border-[#2B7A4B] text-[#2B7A4B] px-12 py-4.5 text-xs uppercase tracking-[0.25em] font-black hover:bg-[#2B7A4B] hover:text-[#1C2E24] transition-all duration-400 rounded-none shadow-xl active:scale-[0.99] transform"
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