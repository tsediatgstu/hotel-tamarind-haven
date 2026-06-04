import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';

function BookNow() {
  const { bookingData, setBookingData } = useBooking();
  // State to toggle between 'form' and 'call' on the right side
  const [activeTab, setActiveTab] = useState('form');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation Request Transmitted!\nRoom: ${bookingData.selectedRoom || 'Unselected'}\nCheck-in: ${bookingData.checkIn}\nCheck-out: ${bookingData.checkOut}\nGuests: ${bookingData.guests}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F1E6] via-[#FBFBFA] to-[#EAE5D8] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center antialiased">
      <div className="max-w-6xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-neutral-200/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12 transform transition-all">
        
        {/* ================= LEFT COLUMN: PERMANENT CONCIERGE INFORMATION ================= */}
        <div className="lg:col-span-5 bg-[#0F172A] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden border-b-8 lg:border-b-0 lg:border-r-8 border-[#2B7A4B]">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#2B7A4B]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <span className="block text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#DD9494] font-black mb-4 leading-relaxed">
              "SERVE WITH HEART, LEAD WITH PRIDE, GROW WITH PURPOSE."
            </span>
            <h2 className="text-3xl sm:text-4xl tracking-[0.12em] uppercase text-white font-black leading-none mb-3">
              TAMARIND <span className="text-[#2B7A4B] font-serif italic font-normal block sm:inline">HAVEN</span>
            </h2>
            <div className="w-12 h-[3px] bg-[#2B7A4B] mb-6 rounded-full" />
            <p className="text-xs sm:text-sm text-neutral-400 font-light tracking-wide leading-relaxed mb-8">
              Welcome to our central reservations ecosystem. Effortlessly lock in your luxury accommodations digitally or patch directly into our live concierge desk.
            </p>
          </div>

          {/* Core Contacts Channel Stack */}
          <div className="space-y-5 my-auto relative z-10">
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-neutral-500 uppercase border-b border-neutral-800 pb-3">
              Verified Booking Desk
            </h3>
            
            {/* Phone Entry */}
            <div className="flex items-center space-x-4 p-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors duration-200">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#2B7A4B]/10 text-[#2B7A4B] text-base shadow-inner">📞</span>
              <div>
                <p className="text-[9px] font-extrabold text-neutral-500 uppercase tracking-widest">Main Reception</p>
                <a href="tel:+25111XXXXXXX" className="text-sm text-white font-semibold hover:text-[#DD9494] transition-colors tracking-wide">
                  +251 11 XXXXXXX
                </a>
              </div>
            </div>

            {/* WhatsApp Integration Quick-link */}
            <div className="flex items-center space-x-4 p-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors duration-200">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#22C55E]/10 text-[#22C55E] text-base shadow-inner">💬</span>
              <div>
                <p className="text-[9px] font-extrabold text-neutral-500 uppercase tracking-widest">Instant WhatsApp</p>
                <a href="https://wa.me/2519XXXXXXXX" target="_blank" rel="noreferrer" className="text-sm text-[#22C55E] font-semibold hover:text-[#4ade80] transition-colors tracking-wide flex items-center">
                  Chat Safely Now <span className="ml-1 text-xs">↗</span>
                </a>
              </div>
            </div>

            {/* Email Entry */}
            <div className="flex items-center space-x-4 p-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors duration-200">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#2B7A4B]/10 text-[#2B7A4B] text-base shadow-inner">✉️</span>
              <div>
                <p className="text-[9px] font-extrabold text-neutral-500 uppercase tracking-widest">Official Email</p>
                <a href="mailto:frontdesk@hoteltamarindhaven.com" className="text-sm text-neutral-200 font-medium hover:text-[#DD9494] transition-colors break-all text-xs tracking-tight">
                  frontdesk@hoteltamarindhaven.com
                </a>
              </div>
            </div>

            {/* Telegram Entry */}
            <div className="flex items-center space-x-4 p-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors duration-200">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] text-base shadow-inner">✈️</span>
              <div>
                <p className="text-[9px] font-extrabold text-neutral-500 uppercase tracking-widest">Telegram Channel</p>
                <a href="https://t.me/TamarindHavenHotel" target="_blank" rel="noreferrer" className="text-sm text-white font-medium hover:text-[#DD9494] transition-colors">
                  @TamarindHavenHotel
                </a>
              </div>
            </div>
          </div>

          {/* Left Footer Meta */}
          <div className="pt-6 border-t border-neutral-800 text-[11px] text-neutral-400 font-light space-y-1.5 relative z-10">
            <p className="flex items-center"><span className="text-[#2B7A4B] mr-2">📍</span> Bole District, Addis Ababa, Ethiopia</p>
            <p className="flex items-center"><span className="text-[#DD9494] mr-2">🔑</span> Check-in: 2:00 PM | Check-out: 12:00 PM</p>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: DYNAMIC BOOKING & CALL SYSTEM ================= */}
        <div className="lg:col-span-7 p-6 sm:p-12 flex flex-col justify-center bg-white">
          
          {/* GLASSMORPHIC HEADLINE TABS */}
          <div className="grid grid-cols-2 gap-2 mb-10 bg-neutral-100 p-1.5 rounded-xl border border-neutral-200/70 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={`py-3.5 text-xs font-black uppercase tracking-widest rounded-lg transition-all duration-300 transform active:scale-[0.98] ${
                activeTab === 'form'
                  ? 'bg-[#2B7A4B] text-white shadow-lg shadow-[#2B7A4B]/20 font-extrabold'
                  : 'text-neutral-500 hover:text-[#2B7A4B] hover:bg-neutral-200/50'
              }`}
            >
              📋 Booking Engine
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('call')}
              className={`py-3.5 text-xs font-black uppercase tracking-widest rounded-lg transition-all duration-300 transform active:scale-[0.98] ${
                activeTab === 'call'
                  ? 'bg-[#2B7A4B] text-white shadow-lg shadow-[#2B7A4B]/20 font-extrabold'
                  : 'text-neutral-500 hover:text-[#2B7A4B] hover:bg-neutral-200/50'
              }`}
            >
              📞 Direct Concierge
            </button>
          </div>

          {/* DYNAMIC SECTIONS CODES */}
          {activeTab === 'form' ? (
            /* ================= VIEW A: COMPREHENSIVE BOOKING REVENUE ENGINE ================= */
            <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-1">Secure Accommodations</h3>
                <p className="text-xs text-neutral-500 font-light">Fill out your travel itineraries below to crosscheck real-time suite block allocations.</p>
              </div>

              {/* Suite Selection dropdown */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-700 mb-2">
                  Select Room Profile
                </label>
                <div className="relative group">
                  <select
                    name="selectedRoom"
                    value={bookingData.selectedRoom}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-50 hover:bg-neutral-100/70 border border-neutral-300 text-neutral-800 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B7A4B] focus:border-[#2B7A4B] text-sm font-medium appearance-none cursor-pointer transition-all duration-200 shadow-sm"
                  >
                    <option value="">-- Click to reveal room tiers --</option>
                    <option value="Standard Room">Standard Room (80 Keys Available)</option>
                    <option value="Twin Room">Twin Room (10 Keys Available)</option>
                    <option value="Deluxe Room">Deluxe Room (10 Keys Available)</option>
                    <option value="Suite Room">Suite Room (10 Keys Available)</option>
                    <option value="Presidential Suite">Presidential Suite (5 Keys Available)</option>
                    <option value="Family Room">Family Room (5 Keys Available)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#2B7A4B] group-hover:translate-y-0.5 transition-transform">▼</div>
                </div>
                {bookingData.selectedRoom && (
                  <div className="mt-2.5 p-3 bg-[#2B7A4B]/5 border border-[#2B7A4B]/20 rounded-lg text-xs text-[#2B7A4B] font-semibold flex items-center animate-slideUp">
                    <span className="text-[#DD9494] mr-2">★</span> Allocated Portfolio Tier: <strong className="ml-1 text-neutral-900 font-bold">{bookingData.selectedRoom}</strong>
                  </div>
                )}
              </div>

              {/* Date Input Matrices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-700 mb-2">Check-In</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={bookingData.checkIn}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-neutral-50 border border-neutral-300 text-neutral-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2B7A4B] text-sm font-medium transition-all shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-700 mb-2">Check-Out</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={bookingData.checkOut}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-neutral-50 border border-neutral-300 text-neutral-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2B7A4B] text-sm font-medium transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Guest Matrix Button Selectors */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-700 mb-2">Total Guest Capacity</label>
                <div className="grid grid-cols-5 gap-2.5">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBookingData(prev => ({ ...prev, guests: num }))}
                      className={`py-3 rounded-xl text-xs font-black border transition-all duration-200 transform active:scale-95 ${
                        bookingData.guests === num
                          ? 'bg-[#2B7A4B] text-white border-[#2B7A4B] shadow-lg shadow-[#2B7A4B]/20'
                          : 'bg-neutral-50 text-neutral-700 border-neutral-300 hover:border-[#2B7A4B] hover:bg-white shadow-sm'
                      }`}
                    >
                      {num}{num === 5 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Premium Submission Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2B7A4B] to-[#1E5735] hover:from-[#DD9494] hover:to-[#CE8383] text-white hover:text-[#0F172A] py-4.5 rounded-xl font-black uppercase text-xs tracking-[0.25em] transition-all duration-300 shadow-xl shadow-neutral-900/10 hover:shadow-[#DD9494]/20 transform active:scale-[0.98] mt-4"
              >
                Verify Availability &amp; Reserve Room
              </button>
            </form>
          ) : (
            /* ================= VIEW B: HIGHLY LUXURIOUS DIRECT CHANNELS MATRIX ================= */
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-1">Direct Operational Connections</h3>
                <p className="text-xs text-neutral-500 font-light">Tap any interface block below to prompt instantaneous high-priority routing to our local dispatch lines.</p>
              </div>

              <div className="space-y-3.5">
                {/* WHATSAPP HIGH PRIORITY ACTION BLOCK */}
                <a 
                  href="https://wa.me/2519XXXXXXXX" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-4.5 bg-gradient-to-r from-[#22C55E]/5 to-[#22C55E]/0 hover:from-[#22C55E]/10 border-2 border-[#22C55E]/20 hover:border-[#22C55E] rounded-xl transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-11 h-11 flex items-center justify-center bg-[#22C55E] text-white rounded-xl text-xl shadow-md transform group-hover:scale-110 transition-transform">💬</span>
                    <div>
                      <p className="text-sm font-black text-neutral-900 tracking-wide flex items-center">
                        Secure Corporate WhatsApp <span className="ml-2 inline-block w-2 h-2 bg-[#22C55E] rounded-full animate-ping" />
                      </p>
                      <p className="text-xs text-neutral-500 font-light">Instant text replies, digital quote sheets, &amp; receipts</p>
                    </div>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#22C55E] group-hover:translate-x-1 transition-transform">Text Agent →</span>
                </a>

                {/* Line Item 1 */}
                <a 
                  href="tel:+25111XXXXXXX" 
                  className="flex items-center justify-between p-4.5 bg-neutral-50 hover:bg-[#2B7A4B]/5 border border-neutral-200 hover:border-[#2B7A4B] rounded-xl transition-all duration-200 group shadow-sm"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-11 h-11 flex items-center justify-center bg-white rounded-xl border border-neutral-300 group-hover:border-[#2B7A4B] text-xl shadow-inner">🛎️</span>
                    <div>
                      <p className="text-sm font-bold text-neutral-900">Front Desk Desk &amp; Front-House</p>
                      <p className="text-xs text-neutral-500 font-light">General check-in timelines &amp; localized luggage valet help</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#2B7A4B] group-hover:text-[#DD9494] transition-colors">Call Line →</span>
                </a>

                {/* Line Item 2 */}
                <a 
                  href="tel:+25111YYYYYYY" 
                  className="flex items-center justify-between p-4.5 bg-neutral-50 hover:bg-[#2B7A4B]/5 border border-neutral-200 hover:border-[#2B7A4B] rounded-xl transition-all duration-200 group shadow-sm"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-11 h-11 flex items-center justify-center bg-white rounded-xl border border-neutral-300 group-hover:border-[#2B7A4B] text-xl shadow-inner">👔</span>
                    <div>
                      <p className="text-sm font-bold text-neutral-900">Executive Corporate Sales</p>
                      <p className="text-xs text-neutral-500 font-light">Conference layouts, group allocations, &amp; custom pricing structures</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#2B7A4B] group-hover:text-[#DD9494] transition-colors">Call Line →</span>
                </a>
              </div>

              {/* Messaging Quick Warning Callout */}
              <div className="bg-[#0F172A]/5 border border-[#2B7A4B]/10 p-4.5 rounded-xl text-center shadow-inner">
                <p className="text-xs text-neutral-600 font-medium">
                  Looking for alternative feeds? Launch our live portal channel on Telegram anytime via:{' '}
                  <a href="https://t.me/TamarindHavenHotel" target="_blank" rel="noreferrer" className="text-[#2B7A4B] underline font-black hover:text-[#DD9494] transition-colors">
                    @TamarindHavenHotel
                  </a>
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default BookNow;