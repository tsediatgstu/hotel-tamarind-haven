import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const rooms = [
  {
    title: 'Standard Room',
    image: '/sta.png',
    availableNumber: 80,
    startingPrice: '80',
    descriptionsList: [
      'A beautiful and comfortable room built specially for business travelers.',
      'Simple and open layout that lets in plenty of natural daylight.',
      'Smart air conditioning that automatically updates when you walk in.'
    ],
    highlights: ['Comfortable office desk', 'Super fast Wi-Fi', '55” Smart TV', 'Blackout curtains']
  },
  {
    title: 'Twin Room',
    image: '/t.png',
    availableNumber: 10,
    startingPrice: '110',
    descriptionsList: [
      'Perfect for business partners traveling together who still want their own space.',
      'Separate sleeping and desk areas so two people can work comfortably.',
      'Thick, quiet walls to block out noise so you can focus or rest.'
    ],
    highlights: ['Two single beds', 'Split-screen TV mode', 'Noise-canceling glass', 'Fast charging ports']
  },
  {
    title: 'Deluxe Room',
    image: '/dl.png',
    availableNumber: 10,
    startingPrice: '150',
    descriptionsList: [
      'A large, high-end room featuring beautiful views of the city skyline.',
      'Decorated with lovely modern art pieces and high-quality furniture.',
      'Great mix of a cozy bed space and a relaxing sitting area.'
    ],
    highlights: ['King premium bed', 'Private city-view balcony', 'Espresso machine', 'Walk-in closet']
  },
  {
    title: 'Suite Room',
    image: '/su.png',
    availableNumber: 10,
    startingPrice: '250',
    descriptionsList: [
      'A large apartment-style room with a separate living room and bedroom.',
      'Perfect layout for hosting guests or relaxing in total privacy.',
      'Includes easy-to-use smart controls for the entire room layout.'
    ],
    highlights: ['Separate living area', 'Kitchenette setup', 'Personal concierge tablet', 'Evening chocolates']
  },
  {
    title: 'Presidential Suite',
    image: '/pr.png',
    availableNumber: 5,
    startingPrice: '500',
    descriptionsList: [
      'Our finest and most luxurious room built for VIPs and top executives.',
      'Excellent security features for complete privacy and peace of mind.',
      'Comes with private, round-the-clock service to handle everything you need.'
    ],
    highlights: ['Personal butler service', 'Fingerprint security', '75” Surround sound TV', 'Jacuzzi & Steam']
  },
  {
    title: 'Family Room',
    image: '/fam.png',
    availableNumber: 5,
    startingPrice: '300',
    descriptionsList: [
      'A massive connected room designed to keep the whole family close.',
      'Combines a large central sitting area with separate bedrooms.',
      'Includes a fully equipped kitchen area for family cooking and dining.'
    ],
    highlights: ['Two Queen beds', 'Connecting safety doors', 'Kid-friendly controls', 'Full kitchen appliances']
  }
];

function Accommodations() {
  const navigate = useNavigate();
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = ['/sta.png', '/t.png', '/dl.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FBFBFA] min-h-screen">
      
      {/* HERO CAROUSEL */}
      <section className="relative h-[40vh] flex flex-col items-center justify-center text-center overflow-hidden border-b-4 border-[#2B7A4B] mb-16">
        {heroImages.map((img, idx) => (
          <img key={img} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${heroIndex === idx ? 'opacity-100' : 'opacity-0'}`} alt="Hero" />
        ))}
        <div className="absolute inset-0 bg-[#1C2E24]/70" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            <span className="text-[#D4AF37]"> Our Accommodation</span>
          </h1>
         
        </div>
      </section>
        {/* HEADER */}
      <header className="py-1 text-center px-4">
        <h2 className="text-xl md:text-2xl font-serif text-[#1C2E24] leading-relaxed">
"A sanctuary for the modern executive, blending sophisticated global design
 with state-of-the-art technology. Experience absolute privacy, refined comfort, 
 and the timeless warmth of Ethiopian hospitality."
  </h2>
      </header>

      {/* ROOM GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="flex flex-col bg-white border border-neutral-200 hover:border-[#2B7A4B]/50 transition-all duration-500 group shadow-sm hover:shadow-2xl">
              
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#1C2E24] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                  {room.availableNumber} Units Left
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 border-l-2 border-[#2B7A4B]">
                  <p className="text-[9px] text-neutral-500 uppercase font-bold">From</p>
                  <p className="text-lg font-black text-[#1C2E24]">${room.startingPrice}</p>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#2B7A4B] uppercase mb-4" style={{ fontFamily: "'Maiandra GD', sans-serif" }}>
                  {room.title}
                </h3>
                
                <ul className="mb-6 space-y-2 flex-grow">
                  {room.descriptionsList.map((desc, dIndex) => (
                    <li key={dIndex} className="text-neutral-600 text-xs leading-relaxed flex items-start">
                      <span className="text-[#2B7A4B] mr-2 mt-1">✦</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="text-[9px] uppercase tracking-widest font-black text-[#1C2E24] mb-3">Key Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.highlights.map((h, hIndex) => (
                      <span key={hIndex} className="bg-neutral-100 px-2 py-1 text-[9px] font-bold text-neutral-600 uppercase border border-neutral-200">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/book')}
                  className="w-full bg-[#1C2E24] text-white py-3 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-[#2B7A4B] transition-all duration-300"
                >
                  Reserve Suite
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accommodations;