import React from 'react';

function Wellness() {
  const facilities = [
    {
      id: "01",
      title: "State-of-the-Art Fitness Center",
      tagline: "Professional-Grade Training Environment",
      desc: "Our expansive, high-performance gym is equipped with elite Olympic-level training arrays, custom conditioning zones, and dedicated personal coaching frameworks. Designed with direct basement and secure indoor parking integration for seamless, private access.",
      highlights: ["Full basement & secure indoor parking access", "Advanced biometric entry & monitoring systems", "Dedicated elite personal training advisors"]
    },
    {
      id: "02",
      title: "Therapeutic Steam & Sauna Suites",
      tagline: "Absolute Privacy & Physical Restoration",
      desc: "Engineered for deep detoxification and metabolic recovery. This custom sanctuary features specialized thermal zones alongside ultra-exclusive private chambers tailored specifically for corporate teams or personal relaxation.",
      highlights: ["4 Private Couples Treatment Rooms", "2 Specialized Family Thermal Rooms", "Signature Tamarind-infused aromatherapy steam arrays"]
    },
    {
      id: "03",
      title: "Sovereign Accessibility & Logistics",
      tagline: "Seamless Mobility Infrastructure",
      desc: "Architecturally engineered to guarantee swift, unhindered movement across all hospitality zones. Featuring top-tier high-speed vertical transportation systems and dedicated accessible layouts prioritizing ease of transit.",
      highlights: ["3 Next-generation high-speed intelligent elevators", "Dedicated, secure parking bays for guests with disabilities", "Zero-step step-free luxury transitions throughout the property"]
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#1C2E24] font-sans antialiased selection:bg-[#2B7A4B]/20 min-h-screen">
      
      {/* ================= HERO RECOVERY LAYER ================= */}
      <section className="relative bg-[#1C2E24] py-32 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-black block mb-4">
            Sanctuary & Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-wide text-white mb-6">
            Wellness & Infrastructure
          </h1>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-neutral-400 text-xs sm:text-sm tracking-widest max-w-2xl mx-auto leading-relaxed font-light">
            A meticulous convergence of high-performance health architecture, sensory restoration arrays, and elite universal accessibility frameworks.
          </p>
        </div>
      </section>

      {/* ================= UTILITY GRID MATRIX ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {facilities.map((fac) => (
            <div 
              key={fac.id} 
              className="group bg-[#FFFFFF] p-8 border border-neutral-200/70 shadow-sm hover:shadow-2xl hover:border-[#D4AF37]/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#2B7A4B] font-black">
                    {fac.tagline}
                  </span>
                  <span className="text-xs font-serif italic text-[#D4AF37] font-bold">
                    {fac.id}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-light tracking-wide text-[#1C2E24] mb-4 group-hover:text-[#2B7A4B] transition-colors">
                  {fac.title}
                </h3>
                
                <p className="text-xs text-neutral-500 font-light leading-relaxed tracking-widest mb-6">
                  {fac.desc}
                </p>

                {/* Technical Highlights */}
                <div className="space-y-3 pt-4 border-t border-neutral-100">
                  {fac.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2.5">
                      <span className="text-[#D4AF37] text-xs font-bold">✔</span>
                      <span className="text-[11px] text-neutral-600 font-light tracking-wider leading-tight">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interaction Footer */}
              <div className="mt-10 pt-4 border-t border-neutral-500/10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-black text-[#D4AF37] group-hover:translate-x-1 transition-transform duration-300">
                  Explore Facility &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Wellness;