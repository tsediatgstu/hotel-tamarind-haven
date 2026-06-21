import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { FaPhoneAlt, FaWhatsapp, FaTelegram } from 'react-icons/fa';

function BookNow() {
  const { bookingData, setBookingData } = useBooking();
  const [activeTab, setActiveTab] = useState('form');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation Request Submitted for ${bookingData.selectedRoom}`);
  };

  return (
    <div className="min-h-screen bg-[#f8faff] py-16 px-4 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(38,51,203,0.15)] border border-[#2633CB]/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* LEFT COLUMN: HERITAGE & CONTACTS */}
        <div className="lg:col-span-5 bg-[#2633CB] p-10 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-4xl font-serif leading-tight mb-6">
              Tamarind Haven <br/>
              <span className="text-white/60 font-sans font-light text-2xl tracking-widest uppercase">Addis Ababa</span>
            </h2>
            <p className="text-xs text-white/70 leading-relaxed font-light border-l-2 border-white/30 pl-4">
              Blending the timeless soul of Ethiopian hospitality with the precision of modern global luxury.
            </p>
          </div>

          <div className="space-y-6 mt-12">
            {[
              { label: 'Concierge Desk', val: '+251 994 494 884', icon: <FaPhoneAlt /> },
              { label: 'WhatsApp Priority', val: '+254 141 043 048', icon: <FaWhatsapp /> },
              { label: 'Telegram Direct', val: '+211 922 912 939', icon: <FaTelegram /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4 border-b border-white/10 pb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-lg">
                  {item.icon}
                </span>
                <div>
                  <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm font-medium tracking-wide">{item.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-[10px] text-white/40 uppercase tracking-widest">
            Bole District, Addis Ababa, Ethiopia
          </div>
        </div>

        {/* RIGHT COLUMN: BOOKING ENGINE */}
        <div className="lg:col-span-7 p-10 bg-white">
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button onClick={() => setActiveTab('form')} className={`py-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all ${activeTab === 'form' ? 'bg-[#2633CB] text-white shadow-lg' : 'bg-neutral-100 text-neutral-500'}`}>
              Booking Engine
            </button>
            <button onClick={() => setActiveTab('call')} className={`py-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all ${activeTab === 'call' ? 'bg-[#2633CB] text-white shadow-lg' : 'bg-neutral-100 text-neutral-500'}`}>
              Direct Contact
            </button>
          </div>

          {activeTab === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <select name="selectedRoom" onChange={handleInputChange} className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-[#2633CB] outline-none transition-all">
                <option value="">Select Room Profile</option>
                <option value="Standard">Standard Room</option>
                <option value="Twin">Twin Room</option>
                <option value="Deluxe">Deluxe Heritage Room</option>
                <option value="Suite">Suite Room</option>
                <option value="Presidential">Presidential Cultural Suite</option>
                <option value="Family">Family Room</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input type="date" name="checkIn" onChange={handleInputChange} className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-[#2633CB] outline-none" />
                <input type="date" name="checkOut" onChange={handleInputChange} className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-[#2633CB] outline-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-[#2633CB] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#1f29a3] transition-all shadow-lg">
                Finalize Reservation
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="p-8 bg-[#2633CB]/5 border border-[#2633CB]/20 rounded-2xl text-center">
                <h4 className="text-sm font-bold text-[#2633CB] mb-4 uppercase tracking-widest">Connect Directly</h4>
                <div className="space-y-3">
                  <a href="tel:+251994494884" className="flex items-center justify-center gap-3 py-3 bg-[#2633CB] text-white rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#1f29a3]">
                    <FaPhoneAlt /> Call Concierge
                  </a>
                  <a href="https://wa.me/254141043048" className="flex items-center justify-center gap-3 py-3 bg-[#25D366] text-white rounded-xl font-bold uppercase tracking-widest text-[10px]">
                    <FaWhatsapp /> WhatsApp Us
                  </a>
                  <a href="https://t.me/211922912939" className="flex items-center justify-center gap-3 py-3 bg-[#0088cc] text-white rounded-xl font-bold uppercase tracking-widest text-[10px]">
                    <FaTelegram /> Telegram Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookNow;