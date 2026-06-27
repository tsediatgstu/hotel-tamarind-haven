import React, { useState, useEffect } from 'react';

function Wellness() {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = ['/gal.jpg', '/stemS1.jpg', '/crlb.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const facilities = [
    { title: "Tamarind Haven Steam & Sauna", desc: "Dual-zone thermal sanctuary for intense purification and deep muscle relief. The ultimate sanctuary for executive rejuvenation.", img: "/stemS.jpg" },
    { title: "Tamarind Haven  Gym", desc: "Achieve peak conditioning in our expansive gym, featuring Olympic-grade equipment and advanced biometric tracking.", img: "/gym.jpg" },
    { title: "Tamarind Haven Cryotherapy Recovery Lab", desc: "Sub-zero temperatures to accelerate muscle repair and reduce systemic inflammation for elite performance.", img: "/crlb.jpg" },
    { title: "Tamarind Haven Wellness Lounge", desc: "Private space for post-treatment rest, serving antioxidant-rich refreshments and nutrient-dense infusions.", img: "/willl.jpg" },
    { title: "Tamarind Haven Diagnostic Health Clinic", desc: "On-site specialists providing real-time data to tailor your recovery and fitness journey.", img: "/dhealth.jpg" },
    { title: "Tamarind Haven Bio-Secure Sanctuary", desc: "Advanced entry systems ensuring absolute privacy for high-profile guests requiring secure, private access.", img: "/sancu.jpg" }
  ];

  return (
    <div className="bg-neutral-70 min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-[40vh] flex flex-col items-center justify-center text-center overflow-hidden border-b-4 border-[#2B7A4B]">
        {heroImages.map((img, idx) => (
          <img key={img} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${heroIndex === idx ? 'opacity-100' : 'opacity-0'}`} />
        ))}
        <div className="absolute inset-0 bg-[#1C2E24]/70" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-4xl font-serif text-white mb-6">
            <span className="text-[#D4AF37]">Wellness & Infrastructure</span>
          </h1>
        </div>
      </section>

      {/* FACILITIES GRID - UPDATED IMAGE AREA */}
<section className="max-w-7xl mx-auto px-4 py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {facilities.map((fac, i) => (
      <div key={i} className="bg-white border border-neutral-200 p-8 hover:border-[#2B7A4B] transition-all shadow-sm">
        
        {/* Fixed Size Image Container */}
        <div className="w-full h-56 my-6 bg-neutral-100 overflow-hidden relative">
          <img 
            src={fac.img} 
            alt={fac.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
          />
        </div>

        <h3 className="text-sm font-black uppercase tracking-widest mb-4 text-[#2B7A4B]">
          {fac.title}
        </h3>
        <p className="text-[11px] text-neutral-600 leading-relaxed mb-6">{fac.desc}</p>
        
        <button className="w-full border border-[#2B7A4B] text-[#2B7A4B] py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#2B7A4B] hover:text-white transition-all">
          Book Session
        </button>
      </div>
    ))}
  </div>
</section>
      
      <footer className="py-12 text-center text-[#2B7A4B] text-[10px] uppercase tracking-[0.3em]">
        © 2026 Hotel Tamarind Haven – Excellence in Every Detail
      </footer>
    </div>
  );
}

export default Wellness;