import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

function RoomCard({ title, inventory, highlights, description }) {
  const navigate = useNavigate();
  const { setBookingData } = useBooking();

  const handleSelect = () => {
    setBookingData(prev => ({ ...prev, selectedRoom: title }));
    navigate('/book');
  };

  return (
    <div className="bg-[#F7F5EE] rounded-lg shadow-md border border-[#2B7A4B]/20 overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl">
      {/* Image Gallery Showcase Placeholder */}
      <div className="h-52 bg-[#111827]/90 flex items-center justify-center text-neutral-400 font-medium border-b border-[#2B7A4B]/10 tracking-widest uppercase text-xs">
        [ Image Gallery Showcase ]
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Card Header Area */}
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 className="text-xl font-bold text-[#111827] tracking-wide">{title}</h3>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#2B7A4B]/10 text-[#2B7A4B] px-2.5 py-1 rounded-full whitespace-nowrap">
            Inventory: {inventory}
          </span>
        </div>
        
        {/* Dynamic Category Sub-line */}
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4AF37] mb-4">{description}</p>
        
        {/* Core Accommodations Highlights Framework */}
        <ul className="text-sm space-y-2 text-neutral-700 mb-6 flex-grow font-light">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-[#D4AF37] mr-2.5 text-base leading-none">★</span>
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
        
        {/* Premium Transaction Trigger Button */}
        <button 
          onClick={handleSelect} 
          className="w-full bg-[#2B7A4B] text-white py-3 rounded font-bold uppercase text-xs tracking-[0.15em] hover:bg-[#D4AF37] hover:text-[#111827] shadow-sm transition-all duration-300 transform active:scale-[0.98]"
        >
          Book Directly
        </button>
      </div>
    </div>
  );
}

export default RoomCard;