import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#4f86f7] text-white pt-16 pb-8 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* BRAND IDENTITY */}
        <div className="space-y-4">
          <h4 className="font-serif text-2xl tracking-widest uppercase">
            Tamarind <span className="font-light italic text-white/80">Haven</span>
          </h4>
          <p className="text-xs leading-relaxed text-white/70 font-light tracking-wide uppercase">
            A premium hospitality destination blending Ethiopian heritage with global luxury standards.
          </p>
        </div>
        
        {/* CONTACT INFORMATION */}
        <div>
          <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-white/50 mb-6">Global Contact Desk</h4>
          <div className="space-y-4 text-xs font-medium">
            <div className="flex items-start space-x-3">
              <span className="mt-0.5">📍</span>
              <p>Bole District,<br/>Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex items-center space-x-3">
              <span>📞</span>
              <a href="tel:+251994494884" className="hover:text-black transition-colors">+251 994 494 884</a>
            </div>
            <div className="flex items-center space-x-3">
              <span>💬</span>
              <a href="https://wa.me/254141043048" className="hover:text-black transition-colors">+254 141 043 048</a>
            </div>
            <div className="flex items-center space-x-3">
              <span>✈️</span>
              <a href="https://t.me/211922912939" className="hover:text-black transition-colors">+211 922 912 939</a>
            </div>
          </div>
        </div>
        
        {/* QUICK LINKS */}
        <div>
          <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-white/50 mb-6">Operational Links</h4>
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Corporate Careers</a>
            <a href="#" className="hover:text-black transition-colors">Digital Concierge</a>
          </div>
        </div>
      </div>
      
      {/* COPYRIGHT & DEVELOPER CREDIT */}
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 pt-8 text-center text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold space-y-2">
        <p>&copy; {new Date().getFullYear()} Hotel Tamarind Haven. All Rights Reserved.</p>
        <p>
          System Architect: <span className="text-white">Tsedia @Tgstu</span> | 
          <a href="mailto:tsediatgstu@gmail.com" className="ml-2 hover:text-black transition-colors">tsediatgstu@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;