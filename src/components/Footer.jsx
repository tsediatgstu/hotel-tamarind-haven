import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#111827] text-neutral-300 pt-12 pb-6 border-t border-[#2B7A4B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* ================= COLUMN 1: BRAND IDENTITY ================= */}
        <div>
          <h4 className="text-white font-black tracking-[0.15em] mb-4 uppercase text-base">
           HOTEL TAMARIND <span className="text-[#2B7A4B] font-serif italic font-medium">HAVEN</span>
          </h4>
          <p className="text-sm leading-relaxed text-neutral-400 font-light">
            A premium hospitality destination blending modern enterprise comfort with standard elite luxury.
          </p>
        </div>
        
        {/* ================= COLUMN 2: CONTACT SCHEDULING ================= */}
        <div>
          <h4 className="text-[#D4AF37] font-bold tracking-wider uppercase text-xs mb-4">Contact Info</h4>
          <p className="text-sm space-y-2 text-neutral-400 font-light leading-relaxed">
            <span className="text-[#2B7A4B]">📍</span> Bole District, Addis Ababa, Ethiopia<br />
            <span className="text-[#2B7A4B]">📞</span> +251 11 XXXXXXX<br />
            <span className="text-[#2B7A4B]">✉️</span> info@hoteltamarindhaven.com
          </p>
        </div>
        
        {/* ================= COLUMN 3: UTILITY FRAMEWORK ================= */}
        <div>
          <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-4">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-neutral-400 font-light">
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-200">TripAdvisor</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-200">Careers</a>
          </div>
        </div>

      </div>
      
      {/* ================= COPYRIGHT SUB-FRAMEWORK ================= */}
      <div className="border-t border-[#2B7A4B]/10 max-w-7xl mx-auto px-4 pt-6 text-center text-xs text-neutral-500 font-light">
        &copy; {new Date().getFullYear()} Hotel Tamarind Haven. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;