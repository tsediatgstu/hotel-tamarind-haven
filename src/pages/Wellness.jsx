import React, { useState, useEffect } from 'react';

function Wellness() {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = ['/gal.jpg', '/stemS.jpg', '/crlb.jpg'];

  // Hero carousel cycling every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const facilities = [
    { title: "Steam & Sauna Suites", tag: "THERAPEUTIC DETOX", desc: "Dual-zone thermal sanctuary for intense purification and deep muscle relief. The ultimate sanctuary for executive rejuvenation.", img: "/stemS.jpg" },
    { title: "Elite Performance Gym", tag: "FITNESS CENTER", desc: "Achieve peak conditioning in our expansive gym, featuring Olympic-grade equipment and advanced biometric tracking.", img: "/gym.jpg" },
    { title: "Cryotherapy Recovery Lab", tag: "METABOLIC HEALING", desc: "Sub-zero temperatures to accelerate muscle repair and reduce systemic inflammation for elite performance.", img: "/crlb.jpg" },
    { title: "Executive Wellness Lounge", tag: "CELLULAR REJUVENATION", desc: "Private space for post-treatment rest, serving antioxidant-rich refreshments and nutrient-dense infusions.", img: "/willl.jpg" },
    { title: "Diagnostic Health Clinic", tag: "PRECISION WELLNESS", desc: "On-site specialists providing real-time data to tailor your recovery and fitness journey.", img: "/dhealth.jpg" },
    { title: "Bio-Secure Sanctuary", tag: "TOTAL EXCLUSIVITY", desc: "Advanced entry systems ensuring absolute privacy for high-profile guests requiring secure, private access.", img: "/sancu.jpg" }
  ];

  return (
    <div className="bg-[#4f86f7]/5 min-h-screen font-sans">
      
      {/* HERO CAROUSEL */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden border-b-4 border-[#4f86f7]">
        {heroImages.map((img, idx) => (
          <img key={img} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${heroIndex === idx ? 'opacity-100' : 'opacity-0'}`} />
        ))}
        <div className="absolute inset-0 bg-[#1C2E24]/70" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Sanctuary & <span className="text-[#4f86f7]">Infrastructure</span>
          </h1>
          <p className="text-white text-lg font-light tracking-[0.2em] max-w-2xl mx-auto border-t border-b border-white/30 py-4">
            Where elite physical restoration meets sovereign logistical precision.
          </p>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilities.map((fac, i) => (
            <div key={i} className="bg-white border border-[#4f86f7]/20 p-8 hover:border-[#4f86f7] transition-all shadow-lg group">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#4f86f7] font-black">{fac.tag}</span>
              
              <div className="h-48 my-6 bg-[#4f86f7]/5 overflow-hidden">
                <img src={fac.img} alt={fac.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <h3 className="text-lg font-serif mb-3 text-[#1C2E24]">{fac.title}</h3>
              <p className="text-[11px] text-neutral-600 leading-relaxed mb-6">{fac.desc}</p>
              
              <button className="w-full bg-[#1C2E24] text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#4f86f7] transition-colors">
                Book Session
              </button>
            </div>
          ))}
        </div>
      </section>
      
      <footer className="py-12 text-center text-[#4f86f7] text-[10px] uppercase tracking-[0.3em]">
        © 2026 Hotel Tamarind Haven – Excellence in Every Detail
      </footer>
    </div>
  );
}

export default Wellness;