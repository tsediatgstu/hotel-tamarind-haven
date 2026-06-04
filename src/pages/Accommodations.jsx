import React from 'react';
import RoomCard from '../components/RoomCard';

const rooms = [
  {
    title: 'Standard Room',
    inventory: 80,
    description: 'Smart Comfort[cite: 1]',
    highlights: ['Ergonomic work desk & chair', 'Fiber-backed high-speed Wi-Fi', '55” Smart TV with streaming apps', 'Soundproof windows & blackout curtains']
  },
  {
    title: 'Twin Room',
    inventory: 10,
    description: 'Corporate Flexibility[cite: 1]',
    highlights: ['Two premium twin beds with orthopedic mattresses', 'Shared workspace with dual charging stations', '55” Smart TV with split-screen capability', 'Noise-canceling windows for group stays']
  },
  {
    title: 'Deluxe Room',
    inventory: 10,
    description: 'Premium Views[cite: 1]',
    highlights: ['King-size bed with luxury linens', 'Balcony with panoramic city views', 'Espresso machine + premium tea selection', 'Walk-in wardrobe with luggage bench']
  },
  {
    title: 'Suite Room',
    inventory: 10,
    description: 'Extended Luxury[cite: 1]',
    highlights: ['Separate living & sleeping areas', 'Kitchenette with microwave & fridge', 'Personalized concierge tablet', 'Signature tamarind chocolate ritual']
  },
  {
    title: 'Presidential Suite',
    inventory: 5,
    description: 'The Pinnacle of Prestige[cite: 1]',
    highlights: ['Private dining room & butler service', 'Secure entry with biometric lock', '75” Smart TV + surround sound system', 'Jacuzzi + steam shower']
  },
  {
    title: 'Family Room',
    inventory: 5,
    description: 'Connected Comfort[cite: 1]',
    highlights: ['Two queen beds + sofa bed', 'Interconnecting option configurations', 'Child-friendly amenities & parental controls', 'Private full kitchen facility']
  }
];

function Accommodations() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2">Our Accommodation Portfolio</h1>
        <p className="text-neutral-500">Every single room category features custom 400-thread count Egyptian linens & smart climate sensors.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </div>
  );
}

export default Accommodations;