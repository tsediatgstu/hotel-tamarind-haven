import React from 'react';

function DiningNightlife() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-12">Culinary & Nightlife Outlets[cite: 1]</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border rounded-lg">
          <h3 className="font-bold text-lg mb-2">2 Signature Restaurants[cite: 1]</h3>
          <p className="text-sm text-neutral-600">Fine dining culinary curation alongside an expansive multi-station international buffet outlet.</p>
        </div>
        <div className="bg-white p-6 border rounded-lg">
          <h3 className="font-bold text-lg mb-2">The Lounge & Cafe[cite: 1]</h3>
          <p className="text-sm text-neutral-600">Artisanal local coffee, crisp hand-crafted fresh pastries, and elite corporate networking layout setups.</p>
        </div>
        <div className="bg-white p-6 border rounded-lg">
          <h3 className="font-bold text-lg mb-2">Rooftop Sky View VIP Bar[cite: 1]</h3>
          <p className="text-sm text-neutral-600">Immersive exclusive atmosphere pairing unique premium mixology with panoramic capital city skyline views.</p>
        </div>
      </div>
    </div>
  );
}

export default DiningNightlife;