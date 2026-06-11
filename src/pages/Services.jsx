import React from 'react';

function Services() {
  const outlets = [
    { 
      name: "Tamarind Restaurant", 
      tag: "Signature Fine Dining", 
      image: "/tama res.png", 
      desc: "A theatrical fusion of global technique and Ethiopian soul. We utilize precise French pan-searing and Italian reductions to elevate premium local ingredients.",
      menuLabel: "View Seasonal Menu",
      resLabel: "Reserve Your Table"
    },
    { 
      name: "Angereb Restaurant", 
      tag: "Heritage Sanctuary", 
      image: "/angereb r.png", 
      desc: "An eternal source of authentic heritage. We honor the 'Gursha' tradition through slow-simmered Wats, 100% pure Teff Injera, and a sensory coffee ceremony.",
      menuLabel: "Explore Heritage Menu",
      resLabel: "Reserve Cultural Experience"
    },
    { 
      name: "Tamarind Lounge & Café", 
      tag: "Artisanal Oasis", 
      image: "/tama l.png", 
      desc: "An oasis of resilience and refined flavor. The perfect blend of sweet and sour contrasts, serving artisanal pastries, organic highland coffee, and savory light bites.",
      menuLabel: "View Café Menu",
      resLabel: "Explore Lounge Menu"
    },
    { 
      name: "Tamarind Club", 
      tag: "Exclusive VIP Sky-Lounge", 
      image: "/club.png", 
      desc: "The pinnacle of prestige. An ultra-exclusive sanctuary offering bespoke service, high-security privacy, and our signature Sunset Canapés & Cocktail Hour.",
      menuLabel: "Explore Suite Perks",
      resLabel: "Inquire About Membership"
    },
    { 
      name: "Sky View VIP Bar", 
      tag: "High-Altitude Nightlife", 
      image: "/bar.png", 
      desc: "Addis Ababa's premier rooftop destination. Experience high-altitude mixology, 360-degree panoramic city views, and curated sets in an electric luxury atmosphere.",
      menuLabel: "View Cocktail Menu",
      resLabel: "Reserve Rooftop Table"
    },
    { 
      name: "Private Dining Enclaves", 
      tag: "Intimate Excellence", 
      image: "/private.png", 
      desc: "High-security enclaves crafted for the most significant conversations. Tailored for private corporate boardroom dinners or elite, intimate family celebrations.",
      menuLabel: "View Banquet Menu",
      resLabel: "Request Private Booking"
    }
  ];

  return (
    <div className="bg-[#FBFBFA] text-[#1C2E24] font-sans">
      
      {/* HEADER */}
      <header className="py-24 text-center px-4">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#2B7A4B] font-black mb-4">Culinary & Nightlife Portfolio</p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-6" style={{ fontFamily: "'Maiandra GD', sans-serif" }}>
          Serve With Heart, Lead With Pride
        </h1>
        <div className="w-20 h-[2px] bg-[#2B7A4B] mx-auto" />
      </header>

      {/* OUTLETS GRID */}
      <main className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outlets.map((outlet, idx) => (
            <article key={idx} className="group bg-white border border-neutral-200 hover:border-[#2B7A4B] transition-all duration-500 flex flex-col shadow-sm hover:shadow-2xl">
              
              {/* Image & Tag */}
              <div className="h-64 overflow-hidden relative">
                <img src={outlet.image} alt={outlet.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#1C2E24] text-white px-4 py-1 text-[9px] font-bold uppercase tracking-widest">
                  {outlet.tag}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold uppercase mb-4" style={{ fontFamily: "'Maiandra GD', sans-serif" }}>
                  {outlet.name}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-8 flex-grow">
                  {outlet.desc}
                </p>
                
                {/* Custom Action Buttons */}
                <div className="mt-auto space-y-3">
                  <button className="w-full border border-neutral-300 py-3 text-[10px] font-bold uppercase tracking-widest hover:border-[#2B7A4B] hover:text-[#2B7A4B] transition-all">
                    {outlet.menuLabel}
                  </button>
                  <button className="w-full bg-[#2B7A4B] text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#1C2E24] transition-all">
                    {outlet.resLabel}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* FOOTER CTA */}
      <footer className="bg-[#1C2E24] py-20 text-center text-white">
        <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">The Tamarind Haven Experience</h2>
        <p className="text-neutral-400 text-sm mb-10 max-w-xl mx-auto px-4">
          Discover a world where traditional heritage meets five-star global luxury. We invite you to experience the heartbeat of Addis Ababa.
        </p>
        <button className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-[#D4AF37] hover:text-[#1C2E24] transition-all">
          Download Culinary Brochure
        </button>
      </footer>
    </div>
  );
}

export default Services;