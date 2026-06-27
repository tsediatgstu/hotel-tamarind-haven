import React, { useState, useEffect } from 'react';

function TamarindHavenPortfolio() {
  const [activeTab, setActiveTab] = useState('events'); // Defaulting to events
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = ['/lalibela.jpg', '/deplom p.jpg', '/abay.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const data = {
    events: [
      { name: "Tamarind Hall", cap: "500 Pax", img: "/tama.png", desc: "Grand ballroom for high-profile summits." },
      { name: "Abay Hall", cap: "300 Pax", img: "/abay.png", desc: "Sophisticated corporate conference venue." },
      { name: "Tana Hall", cap: "200 Pax", img: "/tana.png", desc: "Multi-media focused assembly hall." },
      { name: "Tekeze Hall", cap: "100 Pax", img: "/tekeze.png", desc: "Specialized training workshop space." },
      { name: "Baro Hall", cap: "80 Pax", img: "/baro.png", desc: "Dynamic team seminar environment." },
      { name: "Warka Hall", cap: "60 Pax", img: "/warka.png", desc: "Intimate executive brainstorming sanctuary." },
      { name: "Koka Business Hall", cap: "40 Pax", img: "/kokab.jpg", desc: "High-speed business negotiation hub." },
      { name: "Shebelle Board Room", cap: "30 Pax", img: "/shebele.jpg", desc: "Secure high-stakes executive boardroom." },
      { name: "Lalibela Studio", cap: "20 Pax", img: "/lalibela.jpg", desc: "Design-forward private briefing studio." }
    ],
    parking: [
      { name: "Walking Residents Parking", desc: "Secure, climate-controlled subterranean parking.", img: "/excu p.png" },
      { name: "VIP Parking", desc: "Private, high-security entry for VIP arrivals.", img: "/deplom p.jpg" },
      { name: "NightClub Parking", desc: "State-of-the-art supercharging matrix.", img: "/ev p.png" }
    ]
  };

  return (
    <div className="bg-[#FBFBFA] text-[#2B7A4B] font-sans min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-[40vh] flex flex-col items-center justify-center text-center overflow-hidden border-b-4 border-[#2B7A4B]">
        {heroImages.map((img, idx) => (
          <img key={img} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${heroIndex === idx ? 'opacity-100' : 'opacity-0'}`} alt="Hero View" />
        ))}
        <div className="absolute inset-0 bg-[#2B7A4B]/60" />
        <div className="relative z-14 px-7">
          <h1 className="text-3xl md:text-4xl font-serif text-white mb-6">
            <span className="text-[#D4AF37]">Our Meeting & Events Hall With VIP parking </span>
          </h1>
        </div>
      </section>

      {/* TABS */}
      <div className="flex justify-center gap-8 py-10 bg-white shadow-sm">
        {['events', 'parking'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} 
            className={`text-[11px] font-black uppercase tracking-[0.3em] pb-1 border-b-2 transition-all ${activeTab === tab ? 'text-[#2B7A4B] border-[#2B7A4B]' : 'text-neutral-400 border-transparent hover:text-[#2B7A4B]'}`}>
            {tab}
          </button>
        ))}
      </div>

     {/* DYNAMIC GRID - UPDATED TITLES TO GREEN */}
<main className="max-w-7xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {data[activeTab].map((item, i) => (
      <div key={i} className="bg-white border p-6 flex flex-col hover:border-[#2B7A4B] transition-all shadow-sm">
        <img src={item.img} alt={item.name} className="w-full h-48 object-cover mb-6" />
        
        {/* Title now using Heritage Green */}
        <h3 className="text-sm font-black uppercase tracking-widest mb-1 text-[#2B7A4B]">
          {item.name}
        </h3>
        
        {item.cap && <p className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-4">Capacity: {item.cap}</p>}
        <p className="text-[11px] text-neutral-600 leading-relaxed mb-6 flex-grow">{item.desc}</p>
        
        {/* Button updated to match green theme */}
        <button className="w-full border border-[#2B7A4B] py-3 text-[10px] font-black uppercase text-[#2B7A4B] hover:bg-[#2B7A4B] hover:text-white transition-all">
          {activeTab === 'events' ? 'Request Proposal' : 'Explore Details'}
        </button>
      </div>
    ))}
  </div>
</main>

     
    </div>
  );
}

export default TamarindHavenPortfolio;