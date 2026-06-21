import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaTelegram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#2633CB] text-white pt-20 pb-10 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        
        {/* BRAND IDENTITY - BOLD GREEN FOCUS */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-sans text-4xl font-black tracking-tight text-[#2B7A4B]">
            HOTEL TAMARIND HAVEN 
          </h4>
          <p className="text-xs leading-relaxed max-w-sm font-medium tracking-wide uppercase text-white/80">
            A premium hospitality destination in Addis Ababa, blending authentic Ethiopian heritage with modern enterprise comfort and global luxury.
          </p>
        </div>
        
        {/* CONCIERGE */}
        <div>
          <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2B7A4B] mb-6">Concierge</h4>
          <div className="space-y-4 text-xs font-bold text-white/90">
            <p>Bole District, Addis Ababa, Ethiopia</p>
            <div className="flex flex-col space-y-2 pt-2">
              <a href="tel:+251994494884" className="flex items-center gap-2 hover:text-[#2B7A4B] transition-colors">
                <FaPhoneAlt /> Tel: +251 994 494 884
              </a>
              <a href="https://wa.me/254141043048" className="flex items-center gap-2 hover:text-[#2B7A4B] transition-colors">
                <FaWhatsapp /> Whatsapp: +254 141 043 048
              </a>
              <a href="https://t.me/211922912939" className="flex items-center gap-2 hover:text-[#2B7A4B] transition-colors">
                <FaTelegram /> Telegram: +211 922 912 939
              </a>
            </div>
          </div>
        </div>
        
        {/* OPERATIONS */}
        <div>
          <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2B7A4B] mb-6">Operations</h4>
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-widest font-bold text-white/90">
            <a href="#" className="hover:text-[#2B7A4B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#2B7A4B] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#2B7A4B] transition-colors">Careers</a>
            <a href="#" className="hover:text-[#2B7A4B] transition-colors">Digital Portal</a>
          </div>
        </div>
      </div>
      
      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] text-white/60 font-bold">
        <p>&copy; {new Date().getFullYear()} Hotel Tamarind Haven. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">
          Developed By: <span className="text-white">Tsedia @Tgstu</span> | 
          <a href="mailto:tsediatgstu@gmail.com" className="ml-2 hover:text-[#2B7A4B] transition-colors">tsediatgstu@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;