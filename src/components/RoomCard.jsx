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
    <div className="bg-white border border-neutral-200 shadow-sm overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-[#2B7A4B] hover:shadow-xl">
      {/* Image Gallery Showcase */}
      <div className="h-56 bg-neutral-100 flex items-center justify-center text-neutral-400 font-bold tracking-widest uppercase text-xs">
        [ Image Gallery ]
      </div>
      
      <div className="p-8 flex flex-col flex-grow items-center text-center">
        {/* Title Updated: Bold and Centered */}
        <h3 className="text-sm font-black uppercase tracking-widest mb-1 text-[#2B7A4B]">
          {title}
        </h3>
        
        {/* Inventory Badge */}
        <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-4">
          Availability: {inventory}
        </span>
        
        {/* Description */}
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
          {description}
        </p>
        
        {/* Highlights List */}
        <ul className="text-[11px] space-y-2 text-neutral-600 mb-8 flex-grow">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex justify-center items-center">
              <span className="text-[#D4AF37] mr-2 text-xs">◆</span>
              {item}
            </li>
          ))}
        </ul>
        
        {/* Button Updated to match green theme */}
        <button 
          onClick={handleSelect} 
          className="w-full border border-[#2B7A4B] py-3 text-[10px] font-black uppercase text-[#2B7A4B] hover:bg-[#2B7A4B] hover:text-white transition-all duration-300"
        >
          Book Directly
        </button>
      </div>
    </div>
  );
}

export default RoomCard;