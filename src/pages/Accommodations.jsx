import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const rooms = [
  {
    title: 'Standard Room',
    image: '/sta.png',
    availableNumber: 80,
    descriptionsList: [
      'A beautiful and comfortable room built specially for business travelers.',
      'Simple and open layout that lets in plenty of natural daylight.',
      'Smart air conditioning that automatically updates when you walk in.'
    ],
    highlights: ['Comfortable office desk and executive chair', 'Super fast and reliable Wi-Fi internet', '55” Smart TV to easily stream your favorite apps', 'Quiet soundproof windows and dark blackout curtains']
  },
  {
    title: 'Twin Room',
    image: '/t.png',
    availableNumber: 10,
    descriptionsList: [
      'Perfect for business partners traveling together who still want their own space.',
      'Separate sleeping and desk areas so two people can work comfortably.',
      'Thick, quiet walls to block out noise so you can focus or rest.'
    ],
    highlights: ['Two single beds with comfortable back support', 'Shared desk with multiple fast phone and laptop chargers', '55” Smart TV with a helpful split-screen mode', 'Special noise-canceling glass to block outside sounds']
  },
  {
    title: 'Deluxe Room',
    image: '/d.png',
    availableNumber: 10,
    descriptionsList: [
      'A large, high-end room featuring beautiful views of the city skyline.',
      'Decorated with lovely modern art pieces and high-quality furniture.',
      'Great mix of a cozy bed space and a relaxing sitting area.'
    ],
    highlights: ['Large King bed with premium high-quality sheets', 'Private balcony with great views of the city below', 'Premium espresso machine and free tea selection', 'Large walk-in closet with a handy luggage bench']
  },
  {
    title: 'Suite Room',
    image: '/Su.png',
    availableNumber: 10,
    descriptionsList: [
      'A large apartment-style room with a separate living room and bedroom.',
      'Perfect layout for hosting guests or relaxing in total privacy.',
      'Includes easy-to-use smart controls for the entire room layout.'
    ],
    highlights: ['Big separate living room and bedroom spaces', 'Small kitchen area with a microwave and refrigerator', 'Personal tablet to contact the front desk instantly', 'Free signature chocolates left on your bed every evening']
  },
  {
    title: 'Presidential Suite',
    image: '/p.png',
    availableNumber: 5,
    descriptionsList: [
      'Our finest and most luxurious room built for VIPs and top executives.',
      'Excellent security features for complete privacy and peace of mind.',
      'Comes with private, round-the-clock service to handle everything you need.'
    ],
    highlights: ['Private dining room and personal butler service', 'High-security door locks with fingerprint entry', 'Huge 75” Smart TV with a full surround-sound system', 'Relaxing bathroom Jacuzzi and built-in steam shower']
  },
  {
    title: 'Family Room',
    image: '/f.png',
    availableNumber: 5,
    descriptionsList: [
      'A massive connected room designed to keep the whole family close.',
      'Combines a large central sitting area with separate bedrooms.',
      'Includes a fully equipped kitchen area for family cooking and dining.'
    ],
    highlights: ['Two large Queen beds and a comfortable sofa bed', 'Connecting doors to join multiple rooms safely together', 'Kid-friendly features and safe TV controls for parents', 'Full kitchen setup with clean cooking appliances']
  }
];

function Accommodations() {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Inter:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#FFFFFF]">
      
      {/* ================= HERO HEADER SECTION ================= */}
      <div className="text-center mb-12" style={{ fontFamily: "'Cinzel', serif" }}>
        <span className="font-black text-[#2B7A4B] block tracking-[0.25em] antialiased text-[11px] uppercase mb-2">
          Luxury Living Spaces
        </span>
        <h1 className="text-2xl sm:text-3xl font-black mb-2 text-[#1C2E24] uppercase tracking-[0.1em] antialiased">
          Our Accommodation Portfolio
        </h1>
        <div className="w-12 h-0.5 bg-[#1C2E24] mx-auto mb-4"></div>
        <p className="text-neutral-700 font-sans font-black text-[11px] max-w-xl mx-auto tracking-wide leading-relaxed">
          Every beautifully designed room features premium Egyptian cotton sheets, automated temperature controls, and high-end modern finishes.
        </p>
      </div>

      {/* ================= EXTRA BOLD GRID LIST ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <div key={index} className="flex flex-col bg-[#FFFFFF] border-[1.5px] border-[#1C2E24] hover:border-[#2B7A4B] transition-colors duration-300 rounded-none overflow-hidden group">
            
            {/* Component Image Frame */}
            <div className="relative overflow-hidden aspect-[4/3] bg-neutral-100 border-b-[1.5px] border-[#1C2E24] rounded-none">
              <img 
                src={room.image} 
                alt={room.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
              {/* EXTRA BOLD BADGE */}
              <div className="absolute top-2 right-2 bg-[#1C2E24] text-white font-sans font-black text-[9px] uppercase tracking-widest px-2.5 py-1 border-[1px] border-[#2B7A4B] rounded-none">
                Available Rooms: <span className="text-[#2B7A4B] ml-0.5 font-black">{room.availableNumber}</span>
              </div>
            </div>

            {/* Tightened Padding Container */}
            <div className="p-4 flex flex-col flex-grow">
              {/* Extra Bold Title Layout */}
              <h3 className="text-base font-black text-[#1C2E24] uppercase tracking-wide mb-2.5 border-b-[1.5px] border-[#1C2E24] pb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                {room.title}
              </h3>
              
              {/* 
                ===============================================================
                MODIFIED SECTION: DESCRIPTIONS ONLY
                Changed font to 'Inter', set color to professional dark slate (#334155),
                and softened font weight to medium (font-medium) for high-end contrast.
                ===============================================================
              */}
              <div className="mb-3 flex-grow">
                <ul className="space-y-1.5">
                  {room.descriptionsList.map((desc, dIndex) => (
                    <li 
                      key={dIndex} 
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-[#334155] text-[11px] font-medium tracking-normalComplex leading-relaxed flex items-start"
                    >
                      <span className="text-[#2B7A4B] font-black mr-1.5 text-xs select-none">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Room Amenities Section Header */}
              <div className="mb-4">
                <h4 className="text-[9px] uppercase tracking-widest font-black text-[#1C2E24] mb-1.5">
                  Room Amenities
                </h4>
                <ul className="grid grid-cols-1 gap-1">
                  {room.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-neutral-800 font-sans text-[10px] font-bold tracking-wide flex items-center">
                      <span className="w-1 h-1 bg-[#2B7A4B] rounded-none mr-2 block flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extra Bold Zero-Radius Booking Button */}
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-[#2B7A4B] text-white font-sans font-black text-[9px] uppercase tracking-[0.25em] py-2.5 rounded-none hover:bg-[#1C2E24] transition-all duration-300 shadow-sm transform active:scale-[0.98]"
              >
                Reserve Luxury Suite
              </button>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Accommodations;