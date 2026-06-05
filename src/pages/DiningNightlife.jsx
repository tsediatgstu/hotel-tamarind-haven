import React from 'react';

function DiningNightlife() {
  const outlets = [
    {
      id: "01",
      title: "Aetheria – Fine Dining Gastronomy",
      tagline: "Epicurean Masterpieces & Private Salons",
      desc: "An avant-garde culinary journey combining ancestral heritage with modern global gastronomy techniques. Features an exclusive chef's table experience and discrete, soundproofed VIP rooms engineered for high-stakes corporate hosting.",
      highlights: ["Curated multi-course degustation menus", "Sommelier-led vintage wine pairing arrays", "Intimate architectural private dining enclosures"],
      img: "/w1.png"
    },
    {
      id: "02",
      title: "The Horizon Room – All-Day International Buffet",
      tagline: "Global Culinary Stations & Corporate Breakfasts",
      desc: "An expansive, live-cooking theater curated by international master chefs. Perfect for swift executive lunches or celebratory corporate galas, offering continuous multi-station displays from across the globe.",
      highlights: ["Artisanal live-carving and seafood displays", "Dedicated organic, wellness, and vegan lines", "High-capacity professional layout for delegations"],
      img: "/w2.png"
    },
    {
      id: "03",
      title: "The Solarium Lounge & Cafe",
      tagline: "Artisanal Roastery & Elite Corporate Networking Hub",
      desc: "A sprawling, sun-drenched architectural space designed exclusively for morning enterprise dialogues and evening unwinding. Serving legendary single-origin Ethiopian specialty coffees alongside crisp, hand-crafted French pastries.",
      highlights: ["In-house master barista brewing rituals", "High-speed VPN-optimized workspace connectivity", "Afternoon high tea and premium botanical pairings"],
      img: "/w3.png"
    },
    {
      id: "04",
      title: "Sky View VIP Rooftop Lounge",
      tagline: "Panoramic Elevation & Sovereign Mixology",
      desc: "Perched at the highest point of the city, this hyper-exclusive open-air oasis features panoramic capital skyline views. An elite atmosphere prioritizing extreme visual privacy, curated deep ambient house sets, and bespoke luxury liquid engineering.",
      highlights: ["Bespoke molecular cocktail formulations", "Climate-controlled private outdoor cabanas", "Strict VIP gatekeeping and secure private elevator access"],
      img: "/w4.png"
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#1C2E24] font-sans antialiased selection:bg-[#2B7A4B]/20 min-h-screen">
      
      {/* ================= HERO BLOCK ================= */}
      <section className="relative bg-[#1C2E24] py-32 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20 text-center overflow-hidden">
        {/* Subtle Luxury Pattern Background Overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-black block mb-4">
            Elite Gastronomic Ecosystem
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-wide text-white mb-6">
            Culinary & Nightlife Outlets
          </h1>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-neutral-400 text-xs sm:text-sm tracking-widest max-w-2xl mx-auto leading-relaxed font-light">
            Every dining destination inside Hotel Tamarind Haven features online reservation management capabilities, bespoke seasonal ingredient integration, and absolute privacy frameworks engineered for global leaders.
          </p>
        </div>
      </section>

      {/* ================= OUTLETS GRID REGISTRY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {outlets.map((outlet) => (
            <div 
              key={outlet.id} 
              className="group bg-[#FFFFFF] p-6 border border-neutral-200/70 shadow-sm hover:shadow-2xl hover:border-[#D4AF37]/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame Layer using your local asset string array mappings */}
                <div className="overflow-hidden mb-8 bg-[#1C2E24] aspect-[16/10] relative">
                  <img 
                    src={outlet.img} 
                    alt={outlet.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      // Fallback premium unsplash links in case local images are briefly building/missing
                      const defaults = [
                        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=800&q=80"
                      ];
                      e.target.src = defaults[parseInt(outlet.id) - 1];
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-4 right-4 bg-[#1C2E24] text-[#D4AF37] font-serif italic text-xs px-3 py-1.5 border border-[#D4AF37]/20 tracking-widest">
                    {outlet.id}
                  </span>
                </div>

                {/* Typography Block */}
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#2B7A4B] font-black block mb-1">
                  {outlet.tagline}
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-light tracking-wide text-[#1C2E24] mb-4 group-hover:text-[#2B7A4B] transition-colors">
                  {outlet.title}
                </h3>
                <p className="text-xs text-neutral-500 font-light leading-relaxed tracking-widest mb-6">
                  {outlet.desc}
                </p>

                {/* Spec List Features Matrix */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                  {outlet.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-[#D4AF37] text-xs font-bold">✔</span>
                      <span className="text-[11px] text-neutral-600 font-light tracking-wider leading-tight">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger Interface */}
              <div className="mt-8 pt-4 border-t border-neutral-500/10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-black text-[#D4AF37] group-hover:translate-x-1 transition-transform duration-300">
                  Explore Menu &bull; Reserve Table &rarr;
                </span>
                <button className="bg-transparent border border-[#1C2E24]/20 text-[#1C2E24] px-5 py-2 text-[9px] uppercase tracking-widest font-black hover:bg-[#1C2E24] hover:text-white transition-all duration-300">
                  Book Space
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ================= RESERVATION CAVEAT BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="bg-[#1C2E24] text-white p-8 sm:p-16 border border-[#D4AF37]/30 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-[#D4AF37]" />
          <div className="max-w-xl mx-auto">
            <h4 className="text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-black mb-3">
              Corporate & Diplomatic Buyouts
            </h4>
            <p className="text-neutral-300 text-xs font-light tracking-widest leading-relaxed mb-8">
              All architectural hospitality venues are fully customizable for exclusive private buyouts, executive boardroom lunch services, or closed-door diplomatic receptions.
            </p>
            <a 
              href="mailto:concierge@hoteltamarindhaven.com"
              className="inline-block bg-transparent border border-[#D4AF37] text-[#D4AF37] px-10 py-4 text-xs uppercase tracking-[0.25em] font-black hover:bg-[#D4AF37] hover:text-[#1C2E24] transition-all duration-400"
            >
              Contact Event Concierge
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default DiningNightlife;