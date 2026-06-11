import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';

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
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(79,134,247,0.15)] border border-[#4f86f7]/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* LEFT COLUMN: HERITAGE & CONTACTS */}
        <div className="lg:col-span-5 bg-[#0F172A] p-10 flex flex-col justify-between text-white">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4f86f7] mb-4 block">
              Heritage Meets Modernity
            </span>
            <h2 className="text-4xl font-serif leading-tight mb-6">
              Tamarind Haven <br/>
              <span className="text-[#4f86f7] font-sans font-light text-2xl tracking-widest uppercase">Addis Ababa</span>
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed font-light border-l-2 border-[#4f86f7] pl-4">
              Blending the timeless soul of Ethiopian hospitality with the precision of modern global luxury.
            </p>
          </div>

          <div className="space-y-6 mt-12">
            {[
              { label: 'Concierge Desk', val: '+251 994 494 884', icon: '📞' },
              { label: 'WhatsApp Priority', val: '+254 141 043 048', icon: '💬' },
              { label: 'Telegram Direct', val: '+211 922 912 939', icon: '✈️' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4 border-b border-white/5 pb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4f86f7]/10 text-lg">
                  {item.icon}
                </span>
                <div>
                  <p className="text-[9px] font-bold text-[#4f86f7] uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm font-medium tracking-wide">{item.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-[10px] text-neutral-500 uppercase tracking-widest">
            Bole District, Addis Ababa, Ethiopia
          </div>
        </div>

        {/* RIGHT COLUMN: BOOKING ENGINE */}
        <div className="lg:col-span-7 p-10 bg-white">
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button onClick={() => setActiveTab('form')} className={`py-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all ${activeTab === 'form' ? 'bg-[#4f86f7] text-white shadow-lg' : 'bg-neutral-100 text-neutral-500'}`}>
              Booking Engine
            </button>
            <button onClick={() => setActiveTab('call')} className={`py-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all ${activeTab === 'call' ? 'bg-[#4f86f7] text-white shadow-lg' : 'bg-neutral-100 text-neutral-500'}`}>
              Direct Contact
            </button>
          </div>

          {activeTab === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <select name="selectedRoom" onChange={handleInputChange} className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-[#4f86f7] outline-none">
                <option>Select Room Profile</option>
                <option value="Presidential">Presidential Cultural Suite</option>
                <option value="Deluxe">Deluxe Heritage Room</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input type="date" name="checkIn" onChange={handleInputChange} className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-sm" />
                <input type="date" name="checkOut" onChange={handleInputChange} className="p-4 bg-neutral-200 rounded-xl text-sm" />
              </div>
              <button type="submit" className="w-full py-4 bg-[#0F172A] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#4f86f7] transition-all">
                Finalize Reservation
              </button>
            </form>
          ) : (
            <div className="p-8 bg-[#4f86f7]/5 border border-[#4f86f7]/20 rounded-2xl text-center">
              <h4 className="text-sm font-bold text-[#4f86f7] mb-2 uppercase tracking-widest">Connect Directly</h4>
              <p className="text-xs text-neutral-600 mb-6">Our concierge team is available 24/7 to assist with cultural tours and elite accommodation requests.</p>
              <a href="tel:+251994494884" className="block w-full py-4 bg-[#4f86f7] text-white rounded-xl font-black uppercase tracking-widest text-xs">
                Call Concierge Now
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookNow;