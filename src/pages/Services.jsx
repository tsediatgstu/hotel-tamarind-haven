import React, { useState, useEffect } from 'react';

function Services() {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = ['/tama res.png', '/angereb r.png', '/club.png'];

  // Hero carousel cycling every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const outlets = [
    { 
      name: "Tamarind Restaurant", 
      image: "/tama res.png", 
      desc: "A theatrical fusion of global technique and Ethiopian soul. We utilize precise French pan-searing and Italian reductions to elevate premium local ingredients.",
      menuLabel: "View Seasonal Menu",
      resLabel: "Reserve Your Table"
    },
    { 
      name: "Angereb Restaurant", 
      image: "/angereb r.png", 
      desc: "An eternal source of authentic heritage. We honor the 'Gursha' tradition through slow-simmered Wats, 100% pure Teff Injera, and a sensory coffee ceremony.",
      menuLabel: "Explore Heritage Menu",
      resLabel: "Reserve Cultural Experience"
    },
    { 
      name: "Tamarind Lounge & Café", 
      image: "/tama l.png", 
      desc: "An oasis of resilience and refined flavor. The perfect blend of sweet and sour contrasts, serving artisanal pastries, organic highland coffee, and savory light bites.",
      menuLabel: "View Café Menu",
      resLabel: "Explore Lounge Menu"
    },
    { 
      name: "Tamarind Club", 
      image: "/club.png", 
      desc: "The pinnacle of prestige. An ultra-exclusive sanctuary offering bespoke service, high-security privacy, and our signature Sunset Canapés & Cocktail Hour.",
      menuLabel: "Explore Suite Perks",
      resLabel: "Inquire About Membership"
    },
    { 
      name: "Sky View VIP Bar", 
      image: "/bar.png", 
      desc: "Addis Ababa's premier rooftop destination. Experience high-altitude mixology, 360-degree panoramic city views, and curated sets in an electric luxury atmosphere.",
      menuLabel: "View Cocktail Menu",
      resLabel: "Reserve Rooftop Table"
    },
    { 
      name: "Bua Private Dining", 
      image: "/privateD.jpg", 
      desc: "High-security enclaves crafted for the most significant conversations. Tailored for private corporate boardroom dinners or elite, intimate family celebrations.",
      menuLabel: "View Banquet Menu",
      resLabel: "Request Private Booking"
    }
  ];

  return (
    <div className="bg-[#FBFBFA] text-[#1C2E24] font-sans">
      
      {/* HERO CAROUSEL */}
      <section className="relative h-[40vh] flex flex-col items-center justify-center text-center overflow-hidden border-b-4 border-[#2B7A4B] mb-16">
        {heroImages.map((img, idx) => (
          <img key={img} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${heroIndex === idx ? 'opacity-100' : 'opacity-0'}`} alt="Hero" />
        ))}
        <div className="absolute inset-0 bg-[#1C2E24]/70" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            <span className="text-[#D4AF37]"> Our Services</span>
          </h1>
        </div>
      </section>

      {/* HEADER */}
      <header className="py-12 text-center px-4">
        <h2 className="text-xl md:text-2xl font-serif text-[#2B7A4B] font-bold leading-relaxed">
          "Curated for the discerning, our services offer a seamless blend of luxury, privacy, and absolute comfort."
        </h2>
      </header>

      {/* OUTLETS GRID - UPDATED FOR CENTERED ALIGNMENT AND BOLD TITLES */}
<main className="max-w-7xl mx-auto px-4 pb-24">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {outlets.map((outlet, idx) => (
      <article key={idx} className="group bg-white border border-neutral-200 hover:border-[#2B7A4B] transition-all duration-500 flex flex-col shadow-sm hover:shadow-2xl items-center text-center">
        
        <div className="h-64 overflow-hidden relative w-full">
          <img src={outlet.image} alt={outlet.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        
        <div className="p-8 flex flex-col flex-grow w-full items-center">
          {/* Title now explicitly bolded with font-bold */}
          <h3 className="text-xl font-bold uppercase mb-4 text-[#2B7A4B] font-bold" style={{ fontFamily: "'Maiandra GD', sans-serif" }}>
            {outlet.name}
          </h3>
          
          <p className="text-xs text-neutral-600 leading-relaxed mb-8 flex-grow">
            {outlet.desc}
          </p>
          
          <div className="mt-auto space-y-3 w-full">
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
    </div>
  );
}

export default Services;