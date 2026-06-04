import React from 'react';

function ConferenceEvents() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-4">Conference & Events Hub</h1>
      <p className="text-center text-neutral-500 max-w-2xl mx-auto mb-12">
        Positioning Hotel Tamarind Haven as the premier region-wide MICE destination[cite: 1].
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
          <h2 className="text-2xl font-bold mb-3 text-[#2c1e11]">8 Scalable Conference Rooms[cite: 1]</h2>
          <p className="text-neutral-600 text-sm leading-relaxed mb-4">
            Flexible premium configurations ready to host intimate modern training groups of 20 pax up to full-scale corporate grand galas of 500 pax.
          </p>
          <span className="text-xs font-semibold bg-[#f5efe6] text-[#c5a880] px-3 py-1 rounded">
            Interactive 360° Virtual Tours Available
          </span>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
          <h2 className="text-2xl font-bold mb-3 text-[#2c1e11]">Executive Board Room[cite: 1]</h2>
          <p className="text-neutral-600 text-sm leading-relaxed mb-4">
            A high-tech sound-sealed boardroom crafted perfectly for high-level 1-on-1 executive meetings or critical corporate governance board sessions.
          </p>
          <span className="text-xs font-semibold bg-[#2c1e11] text-white px-3 py-1 rounded">
            Full Audio-Visual Infrastructure
          </span>
        </div>
      </div>
    </div>
  );
}

export default ConferenceEvents;