import React, { useState, useEffect } from 'react';

function TamarindHavenPortfolio() {
  const [activeTab, setActiveTab] = useState('dining');
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = ['/club.png', '/deplom p.jpg', '/abay.png'];


  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const data = {
    dining: [
      { title: "Aetheria", tagline: "Fine Dining", desc: "Avant-garde culinary fusion with private salons.", img: "/club.png" },
      { title: "The Horizon Room", tagline: "International Buffet", desc: "Live-cooking theater for corporate galas.", img: "/horezen.png" },
      { title: "Sky View VIP Bar", tagline: "Rooftop Nightlife", desc: "Hyper-exclusive oasis with panoramic views.", img: "/bar.png" }
    ],
    events: [
      { name: "Tamarind Hall", cap: "500 Pax", img: "/tama.png", desc: "Grand ballroom for high-profile summits." },
      { name: "Abay Hall", cap: "300 Pax", img: "/abay.png", desc: "Sophisticated corporate conference venue." },
      { name: "Tana Hall", cap: "200 Pax", img: "/tana.png",desc: "Multi-media focused assembly hall." },
      { name: "Tekeze Hall", cap: "100 Pax",img: "/tekeze.png", desc: "Specialized training workshop space." },
      { name: "Baro Hall", cap: "80 Pax",img: "/baro.png", desc: "Dynamic team seminar environment." },
      { name: "Warka Hall", cap: "60 Pax", img: "/warka.png",desc: "Intimate executive brainstorming sanctuary." },
      { name: "Koka Business Hall", cap: "40 Pax", img: "/kokab.jpg",desc: "High-speed business negotiation hub." },
      { name: "Shebelle Board Room", cap: "30 Pax", img: "/shebele.jpg",desc: "Secure high-stakes executive boardroom." },
      { name: "Lalibela Studio", cap: "20 Pax", img: "/lalibela.jpg",desc: "Design-forward private briefing studio." }
    ],
    parking: [
      { name: "Walking Residents Parking", desc: "Secure, climate-controlled subterranean parking.", img: "/excu p.png" },
      { name: "VIP Parking", desc: "Private, high-security entry for VIP arrivals.", img: "/deplom p.jpg" },
      { name: "NightClub Parking", desc: "State-of-the-art supercharging matrix.", img: "/ev p.png" }
    ]
  };

  return (
    <div className="bg-[#FBFBFA] text-[#1C2E24] font-sans min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden border-b-4 border-[#D4AF37]">
        {heroImages.map((img, idx) => (
          <img key={img} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${heroIndex === idx ? 'opacity-100' : 'opacity-0'}`} alt="Hero View" />
        ))}
        <div className="absolute inset-0 bg-[#1C2E24]/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            <span className="text-[#D4AF37]">Tamarind</span> Haven
          </h1>
          <p className="text-white text-lg md:text-xl font-light tracking-[0.2em] max-w-2xl mx-auto border-t border-b border-white/30 py-4">
“Serve With Heart, Lead With Pride, Grow With Purpose.”

          </p>
        </div>
      </section>

      {/* TABS */}
      <div className="flex justify-center gap-8 py-10 bg-white shadow-sm">
        {['dining', 'events', 'parking'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} 
            className={`text-[11px] font-black uppercase tracking-[0.3em] pb-1 border-b-2 transition-all ${activeTab === tab ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-neutral-400 border-transparent hover:text-[#1C2E24]'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* DYNAMIC GRID */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data[activeTab].map((item, i) => (
            <div key={i} className="bg-white border p-6 flex flex-col hover:border-[#D4AF37] transition-all shadow-sm">
              <img src={item.img || item.image} alt={item.title || item.name} className="w-full h-48 object-cover mb-6" />
              <h3 className="text-sm font-black uppercase tracking-widest mb-1">{item.title || item.name}</h3>
              {item.tagline && <p className="text-[9px] uppercase tracking-widest text-[#2B7A4B] font-bold mb-4">{item.tagline}</p>}
              {item.cap && <p className="text-[9px] uppercase tracking-widest text-[#2B7A4B] font-bold mb-4">Capacity: {item.cap}</p>}
              <p className="text-[11px] text-neutral-600 leading-relaxed mb-6 flex-grow">{item.desc}</p>
              <button className="w-full border border-neutral-300 py-3 text-[10px] font-black uppercase hover:bg-[#1C2E24] hover:text-white transition-all">
                {activeTab === 'events' ? 'Request Proposal' : 'Explore Details'}
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-[#1C2E24] py-12 text-center text-white text-[10px] uppercase tracking-[0.2em]">
        © 2026 Hotel Tamarind Haven – Excellence in Every Detail
      </footer>
    </div>
  );
}

export default TamarindHavenPortfolio;