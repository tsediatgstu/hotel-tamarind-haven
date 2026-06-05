import React from 'react';

function ConferenceEvents() {
  // Array of local conference high-resolution image assets
  const eventImages = [
    { src: '/c1.png', alt: 'Grand Gala General Assembly' },
    { src: '/c2.png', alt: 'Executive Corporate Governance Boardroom' },
    { src: '/c3.png', alt: 'Scalable Interactive Symphony Hall Layout' },
    { src: '/c4.png', alt: 'Integrated Back-of-House Logistical Support Zone' }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#1C2E24] font-sans antialiased min-h-screen selection:bg-[#2B7A4B]/20">
      
      {/* ================= HERO SECTOR ================= */}
      <div className="relative bg-[#FDFDFB] border-b border-neutral-200/80 py-28 lg:py-36 overflow-hidden">
        {/* Architectural Subtle Grid Overlay */}
        <div className="absolute inset-0 z-0 bg-[#F5F5F2] opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1C2E24_1px,transparent_1px),linear-gradient(to_bottom,#1C2E24_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-5" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#2B7A4B] font-black block mb-5">
            MICE Global Standards
          </span>
          <h1 className="text-3xl sm:text-5xl uppercase tracking-[0.22em] leading-tight mb-6 font-black text-[#1C2E24]">
            Conference & <br className="sm:hidden" /> Events Hub
          </h1>
          <div className="w-16 h-[1.5px] bg-[#2B7A4B] mx-auto mb-8" />
          <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed tracking-[0.15em] font-medium uppercase">
            Positioning Hotel Tamarind Haven as the premier region-wide MICE destination. Engineered for high-stakes corporate assembly.
          </p>
        </div>
      </div>

      {/* ================= EDITORIAL IMAGERY MATRIX ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {eventImages.map((img, index) => (
            <div key={index} className="overflow-hidden bg-[#1C2E24] aspect-[3/4] relative group border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-500">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700 filter contrast-[1.05] brightness-[0.95]"
                onError={(e) => {
                  const fallbacks = [
                    "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80",
                    "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=600&q=80",
                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                  ];
                  e.target.src = fallbacks[index];
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E24]/90 via-[#1C2E24]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                <span className="text-[9px] font-mono tracking-[0.25em] uppercase block text-[#2B7A4B] font-bold mb-1.5">VENUE FRAMEWORK 0{index + 1}</span>
                <p className="text-xs uppercase tracking-[0.12em] font-black leading-snug">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CORPORATE SPECIFICATIONS MATRICES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: 8 Conference Rooms */}
          <div className="bg-[#FFFFFF] p-10 rounded-none border-t-2 border-t-[#2B7A4B] border-x border-b border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
            <div>
              <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-neutral-100">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#1C2E24]">
                  8 Scalable Rooms
                </h2>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-bold">ALPHA ZONE</span>
              </div>
              <p className="text-[13px] text-neutral-600 font-normal leading-relaxed tracking-wide mb-8">
                Flexible premium configuration matrices engineered seamlessly to accommodate anywhere from an intimate corporate training workshop of 20 pax up to full-scale grand galas of 500 pax.
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] font-black uppercase bg-[#1C2E24] text-white px-5 py-3.5 w-full text-center">
                 CAPACITY MATRIX: 20 — 500 PAX
              </div>
            </div>
          </div>

          {/* Card 2: Executive Boardroom */}
          <div className="bg-[#FFFFFF] p-10 rounded-none border-t-2 border-t-[#1C2E24] border-x border-b border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
            <div>
              <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-neutral-100">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#1C2E24]">
                  Executive Board Room
                </h2>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-bold">PRIME LAYER</span>
              </div>
              <p className="text-[13px] text-neutral-600 font-normal leading-relaxed tracking-wide mb-8">
                A high-tech, acoustically sound-isolated environment engineered for high-level 1-on-1 enterprise alignments, secure negotiations, or critical governance board sessions.
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] font-black uppercase bg-[#2B7A4B] text-white px-5 py-3.5 w-full text-center">
                SECURE AV INFRASTRUCTURE CORE
              </div>
            </div>
          </div>

          {/* Card 3: Operational Excellence */}
          <div className="bg-[#FFFFFF] p-10 rounded-none border-t-2 border-t-neutral-300 border-x border-b border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
            <div>
              <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-neutral-100">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#1C2E24]">
                  Operational Excellence
                </h2>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-bold">BACK END</span>
              </div>
              <p className="text-[13px] text-neutral-600 font-normal leading-relaxed tracking-wide mb-8">
                Dedicated back-of-house architectural support optimized strategically for each distinct event space. Delivers flawless logistical transitions, custom catering setups, and tech support timelines.
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] font-black uppercase bg-transparent text-[#1C2E24] border border-[#1C2E24] px-5 py-[13px] w-full text-center">
                REAL-TIME SERVICE DEPLOYMENT
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ConferenceEvents;