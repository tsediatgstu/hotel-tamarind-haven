import React from 'react';

function ConferenceEvents() {
  const halls = [
    { name: "Tamarind Hall", capacity: "500 Pax", img: "/tamarind.png", desc: "Our flagship grand ballroom. An architectural masterpiece engineered for international summits and high-profile gala events." },
    { name: "Abay Hall", capacity: "300 Pax", img: "/abay.png", desc: "A sophisticated, light-filled venue perfect for large-scale corporate conferences and professional keynote assemblies." },
    { name: "Tana Hall", capacity: "200 Pax", desc: "Designed for mid-sized assemblies, offering perfect acoustic balance for interactive presentations and multi-media sessions." },
    { name: "Tekeze Hall", capacity: "100 Pax", desc: "An efficient, professional space tailored for departmental briefings, specialized training, and collaborative corporate workshops." },
    { name: "Baro Hall", capacity: "80 Pax", desc: "A versatile breakout environment configured for dynamic team sessions and mid-level executive seminars." },
    { name: "Warka Hall", capacity: "60 Pax", desc: "An intimate and focused sanctuary, perfectly suited for strategy planning and smaller-scale executive brainstorming." },
    { name: "Koka Business Hall", capacity: "40 Pax", desc: "A high-speed connectivity hub designed for seamless business negotiations and focused, high-level presentations." },
    { name: "Shebelle Board Room", capacity: "30 Pax", desc: "The pinnacle of privacy. A boardroom setting optimized for high-stakes executive decisions and secure board-level alignments." },
    { name: "Lalibela Studio", capacity: "20 Pax", desc: "Our most exclusive, design-forward studio for private briefings, media interviews, or ultra-private one-on-one consulting." }
  ];

  return (
    <div className="bg-[#FBFBFA] text-[#1C2E24] font-sans">
      
      {/* HERO SECTION */}
      <div className="py-24 text-center border-b border-neutral-200 bg-[#FFFFFF]">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#2B7A4B] font-black mb-4">Conference Architecture</p>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6">Venues & Specifications</h1>
        <p className="text-neutral-500 max-w-xl mx-auto tracking-widest uppercase text-[10px]">
          Nine distinct venues engineered for global standards, logistical precision, and executive comfort.
        </p>
      </div>

      {/* VENUE GRID */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {halls.map((hall, idx) => (
            <div key={idx} className="group bg-white border border-neutral-200 hover:border-[#2B7A4B] transition-all duration-500 flex flex-col shadow-sm hover:shadow-2xl">
              <div className="h-60 overflow-hidden relative">
                <img src={hall.img} alt={hall.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#1C2E24] text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                  {hall.capacity}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4">{hall.name}</h3>
                <p className="text-[11px] text-neutral-600 leading-relaxed mb-8 flex-grow">{hall.desc}</p>
                
                <button className="w-full bg-[#2B7A4B] text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#1C2E24] transition-all">
                  Request Proposal
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#1C2E24] py-20 text-center text-white">
        <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Streamline Your Event Logistics</h2>
        <button className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#D4AF37] hover:text-[#1C2E24] transition-all">
          Download All Floor Plans
        </button>
      </section>
    </div>
  );
}

export default ConferenceEvents;