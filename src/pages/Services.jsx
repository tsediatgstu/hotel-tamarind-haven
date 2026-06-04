import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const rooms = [
    { 
      name: "The Grand Tamarind Ballroom", 
      capacity: "Up to 500 Pax", 
      image: "/ac.png",
      fallback: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      desc: "An architectural masterpiece engineered for high-profile international summits, prestigious product rollouts, and grand gala dinners. Features advanced acoustic treatment, synchronized ambient lighting grids, and seamless integration with our elite culinary team." 
    },
    { 
      name: "Executive Board Room", 
      capacity: "Dedicated Private Sessions", 
      image: "/ad.png",
      fallback: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80",
      desc: "An isolated sanctuary of absolute corporate privacy designed for high-stakes executive decisions and 1-on-1 strategic alignments. Equipped with state-of-the-art secure encrypted teleconferencing matrices and ultra-ergonomic leather configurations." 
    },
    { 
      name: "Synergy Workshops & Suites", 
      capacity: "20 - 120 Pax (6 Rooms)", 
      image: "/ae.png",
      fallback: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80",
      desc: "Six highly scalable, modular event environments meticulously configured for interactive corporate tracks, agility workshops, and breakout panels. Fully supported by automated thermal zoning and dedicated, hyper-responsive digital infrastructure." 
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#1C2E24] font-sans antialiased selection:bg-[#2B7A4B]/20">
      
      {/* ================= HERO BANNER ================= */}
      <div className="relative bg-[#1C2E24] py-32 text-center text-white overflow-hidden min-h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ab.png" 
            alt="MICE Premium Ambience" 
            className="w-full h-full object-cover opacity-25 scale-100"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C2E24]/50 via-[#132019]/80 to-[#1C2E24]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-black block mb-4">Elite Corporate Infrastructure</span>
          <h1 className="text-4xl sm:text-6xl font-serif italic mb-6 tracking-wide text-white">Conference &amp; Events Hub</h1>
          <div className="w-16 h-[1.5px] bg-[#D4AF37] mx-auto mb-6 rounded-full" />
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Positioning your enterprise at the epicenter of premier MICE excellence, backed by uncompromised back-of-house operational precision.
          </p>
        </div>
      </div>

      {/* ================= OPERATIONAL EXCELLENCE INTRO BLOCK ================= */}
      <section className="bg-[#1C2E24]/5 border-b border-neutral-100 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#2B7A4B] font-black block mb-2">The Sovereign Standard</span>
          <h2 className="text-2xl sm:text-3xl font-light text-[#1C2E24] tracking-tight">Seamless Execution, Invisible Support</h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-light max-w-2xl mx-auto leading-relaxed mt-3">
            Every square meter of our dynamic meeting architecture is amplified by dedicated back-of-house logistical routing. Our specialists operate behind concealed service galleries to ensure flawless timing, gourmet catering delivery, and instant technical deployment without ever disrupting your timeline.
          </p>
        </div>
      </section>

      {/* ================= SPACE SPECIFICATIONS GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {rooms.map((room, idx) => (
            <div 
              key={idx} 
              className="group bg-[#FFFFFF] rounded-2xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-2xl hover:border-neutral-200 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="h-60 overflow-hidden bg-[#1C2E24] relative">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = room.fallback;
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-[#1C2E24]/80 backdrop-blur-md border border-[#D4AF37]/30 px-3 py-1 rounded-md">
                    <span className="text-[10px] text-[#D4AF37] font-serif italic">Configuration 0{idx + 1}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-8">
                  <span className="inline-block text-[10px] bg-[#2B7A4B]/10 text-[#2B7A4B] px-3 py-1 rounded-md font-black tracking-widest uppercase mb-4">
                    {room.capacity}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-[#1C2E24] mb-3 group-hover:text-[#2B7A4B] transition-colors duration-300">
                    {room.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed tracking-wide">
                    {room.desc}
                  </p>
                </div>
              </div>

              {/* Action Frame */}
              <div className="p-8 pt-0">
                <div className="w-full h-[1px] bg-neutral-100 mb-6" />
                <button className="w-full text-center bg-transparent border border-neutral-200 text-[#1C2E24] py-3.5 rounded-xl text-xs font-black uppercase tracking-[0.15em] hover:bg-[#1C2E24] hover:text-white hover:border-[#1C2E24] transition-all duration-300">
                  Request Proposal
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STRATEGIC VIRTUAL TOURS INTEGRATION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="bg-[#2B7A4B] text-white rounded-3xl p-8 sm:p-16 shadow-2xl relative overflow-hidden border-b-8 border-[#D4AF37]">
          {/* Subtle Watermark background vector */}
          <div className="absolute bottom-0 right-0 p-4 text-[14rem] font-serif font-black text-white/[0.02] select-none pointer-events-none leading-none transform translate-y-12 translate-x-6">
            360°
          </div>
          
          <div className="relative z-10 max-w-3xl flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-black block mb-3">Interactive Digital Asset</span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">Immersive 360° Virtual Tour</h2>
              <p className="text-neutral-200 text-xs sm:text-sm font-light leading-relaxed tracking-wide max-w-xl">
                Experience an instantaneous, high-fidelity spatial walkthrough of our luxury Presidential Suites and grand corporate conference halls. Evaluate scale, sightlines, and structural elegance directly from your executive device.
              </p>
            </div>
            
            <div className="flex items-center whitespace-nowrap">
              <button className="bg-white text-[#1C2E24] px-10 py-5 text-xs uppercase tracking-[0.2em] font-black rounded-xl shadow-xl hover:bg-[#D4AF37] hover:text-[#1C2E24] transition-all duration-300 transform active:scale-[0.98]">
                Launch Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;