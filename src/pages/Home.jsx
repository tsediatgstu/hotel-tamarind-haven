import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube, FaPhone, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  // Array holding high-resolution local hotel assets placed in the public folder
  const heroImages = [
    '/a.png',  // High-End Executive Hotel Suite Interior
    '/b.png',  // Luxury Hotel Core Ambiance
    '/c.png',
    '/d.png'   // Premium Wellness Sanctuary Atmosphere
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Smooth automatic luxury slideshow engine (changes image every 5 seconds)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [heroImages.length]);

  return (
    <div className="bg-[#FFFFFF] text-[#1C2E24] font-sans antialiased">
      
      {/* ================= HERO SECTION (CRISP HIGH-CONTRAST LIGHT MULTI-STAGE DISPLAY) ================= */}
      <div className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between bg-[#FDFDFB] overflow-hidden border-b border-neutral-200">
        
        {/* Absolute Core Image Canvas - Optimized for Detail, Contrast, and Perfect Visibility */}
        <div className="absolute inset-0 z-0 bg-[#F5F5F2]">
          {heroImages.map((imgUrl, index) => (
            <img
              key={imgUrl}
              src={imgUrl}
              alt={`Tamarind Haven Ambience ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out mix-blend-multiply ${
                index === currentImageIndex ? 'opacity-95 scale-100 filter contrast-[1.08] brightness-[0.98]' : 'opacity-0 scale-102'
              }`}
              onError={(e) => {
                // Fallback elegant assets if local public file rendering misses
                const fallbacks = [
                  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=90",
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90",
                  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=90",
                  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=90"
                ];
                e.target.src = fallbacks[index];
              }}
            />
          ))}
          {/* Studio Light Balancing Veil: Maintains image detail clarity while guaranteeing pure crisp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFDFB]/90 via-[#FDFDFB]/60 to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-[#FDFDFB]/80 lg:hidden" />
        </div>

        {/* Hero Content Frame - Pure Bold Typography Centered with Absolute Legibility */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pt-32 pb-20 flex justify-center text-center">
          <div className="max-w-2xl flex flex-col items-center">

            {/* Master Hotel Identity Typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.18em] leading-none mb-8 flex flex-col gap-3 items-center">
              {/* First Line: Deep High-Contrast Emerald Green */}
              <span className="font-black text-[#2B7A4B] block tracking-[0.1em] antialiased text-3g sm:text-4xl uppercase mb-3">
                Welcome to
              </span>
              {/* Second Line: High-Contrast Core Brand Layer */}
              <span className="text-2xl sm:text-5xl lg:text-5xl tracking-[0.15em] uppercase font-black text-[#2B7A4B] block">
                HOTEL TAMARIND HAVEN
              </span>
            </h1>

            {/* Dedicated Manifesto Quote with Custom Deep Emerald Green Styling */}
            <p className="text-lg sm:text-xl lg:text-2xl font-serif tracking-wide leading-relaxed mb-12 text-[#1C2E24]">
              <span className="text-[#2B7A4B] font-black mr-1">“</span>
                <span className="text-[#D4AF37] font-black italic">
                  Serve With Heart, Lead With Pride, Grow With Purpose.
              </span>
              <span className="text-[#2B7A4B] font-black ml-1">”</span>
            </p>
            
            {/* Premium Dual Action Triggers */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
              <Link 
                to="/book" 
                className="w-full sm:w-auto bg-[#1C2E24] text-white px-10 py-4.5 text-xs uppercase tracking-[0.25em] font-black rounded-none shadow-lg hover:bg-[#2B7A4B] transition-all duration-400 transform active:scale-[0.99] border border-[#1C2E24] hover:border-[#2B7A4B] text-center"
              >
                Book A Stay
              </Link>
              <Link 
                to="/accommodations" 
                className="w-full sm:w-auto bg-transparent text-[#1C2E24] px-10 py-4.5 text-xs uppercase tracking-[0.25em] font-black rounded-none hover:bg-[#1C2E24] hover:text-white transition-all duration-400 transform active:scale-[0.99] border-2 border-[#1C2E24] text-center"
              >
                Explore Accommodations
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Slide Control Strip - Modified to Center Layout Aesthetic */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 hidden lg:flex items-center justify-center">
          <div className="flex items-center space-x-4 bg-[#FDFDFB] px-5 py-2.5 border border-neutral-200 shadow-sm">
            <span className="text-[10px] uppercase tracking-widest text-[#1C2E24]/60 font-mono">0{currentImageIndex + 1}</span>
            <div className="flex space-x-2">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-none ${idx === currentImageIndex ? 'w-10 bg-[#2B7A4B]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'}`}
                  aria-label={`Maps to layout slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#1C2E24]/60 font-mono">0{heroImages.length}</span>
          </div>
        </div>
      </div>

      {/* ================= BRAND CONNECTION BAR ================= */}
      <div className="bg-[#1C2E24] border-b border-[#2B7A4B]/30 text-[#FDFDFB] py-6 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <button className="flex items-center space-x-3.5 text-xs tracking-[0.2em] uppercase font-black bg-[#2B7A4B] text-white px-5 py-3 border border-[#2B7A4B] hover:bg-transparent hover:text-[#2B7A4B] transition-all duration-300 rounded-none cursor-pointer">
            <span className="inline-block w-2 h-2 rounded-none bg-white animate-pulse" />
            <span>24/7 Global Concierge Linkage Architecture:</span>
          </button>
        </div>
      </div>

      {/* ================= SECTION: BRAND CORPORATE MOTTO ================= */}
      <section className="max-w-5xl mx-auto py-15 px-2 sm:px-4">
        <div className="bg-[#FDFDFB] border border-[#2B7A4B]/18 p-6 sm:p-4 shadow-lg rounded-sm text-center">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#2B7A4B] font-black block mb-6">
            Our Institutional Philosophy
          </span>
          <h2 className="text-4xl sm:text-3xl tracking-wide max-w-4xl mx-auto leading-tight mb-6 font-serif italic text-[#D4AF37]">
            <span className="font-bold not-italic tracking-[0.02em]">
              "Serve With Heart, Lead With Pride, Grow With Purpose."
            </span>
          </h2>
          <div className="font-maiandra text-[#2B7A4B] text-justify leading-relaxed max-w-4xl mx-auto p-6 bg-[#FFFFFF]">
            <p className="mb-6 text-lg">
              Welcome to <strong>Hotel Tamarind Haven</strong>. At Tamarind Haven, we believe true luxury is a deep immersion. 
              Nestled in the heart of modern comfort, our spaces are designed with the clean lines of 21st-century architecture, 
              subtly woven with the vibrant textures, royal gold accents, and rich cultural tapestry of Ethiopia. 
              Here, every guest is treated not just as a visitor, but as a blessing. From the aromatic whisper of 
              our morning freshly roasted coffee to our impeccably curated spaces, we invite you to discover a 
              sanctuary where world-class service meets an ancient soul.
            </p>
            <p className="mb-6 text-lg">
              The very identity of our hotel is inspired by the majestic <strong>Tamarind Tree</strong>, which stands 
              proudly across North and Central Gondar, as well as the fertile lands of Ethiopia. The Tamarind is a 
              true marvel of nature—a long-lasting, deep-rooted giant that never runs dry. Whether facing the 
              heavy rainy seasons or the harshest droughts, it remains lush, vibrant, and beautifully green. 
              Because it is deep and wide-rooted, it stands unyielding and does not easily shake. This resilient 
              endurance forms the bedrock of our foundation, promising our guests an unwavering, rock-solid 
              standard of five-star hospitality that stands timeless against the changing seasons.
            </p>
            <h2 className="text-2xl font-bold text-[#1C2E24] mb-4">
              Our promise: "Serve With Heart, Lead With Pride, Grow With Purpose."
            </h2>
            <ul className="list-none mb-8 space-y-4 text-lg">
              <li><strong>• We Serve With Heart:</strong> Grounded in the legendary warmth of Ethiopian hospitality, our service is deeply personal, intuitive, and genuine—ensuring you feel entirely at home from the moment you step through our doors.</li>
              <li><strong>• We Lead With Pride:</strong> Like the wide-reaching crown of the Tamarind tree, we take immense pride in showcasing the absolute best of our rich culture, architectural elegance, and world-class service standards on a global stage.</li>
              <li><strong>• We Grow With Purpose:</strong> Driven by deep roots and intentional excellence, we continuously evolve our spaces and experiences to create a meaningful, lasting, and unshakable impact for our guests and our community.</li>
            </ul>
            <p className="mb-8 text-lg">
              Just like the unique fruit of the Tamarind tree—which delivers a magnificent, balanced contrast of sour and sweet—our property 
              offers a multi-layered experience. We seamlessly blend the high-energy excitement of premium city nightlife and 
              state-of-the-art corporate business execution with the sweet, tranquil sanctuary of absolute relaxation and 
              heartfelt cultural connection.
            </p>
            <h2 className="text-2xl font-bold text-[#1C2E24] mb-6">
              Premium Outlets for Unforgettable Memories:
            </h2>
            <ul className="list-none space-y-4 text-lg mb-8">
              <li><strong>120 Luxury Guest Rooms and Suites:</strong> Beautifully balancing minimalist styling with bespoke local artistry and smart-comfort amenities.</li>
              <li><strong>3 Signature Dining Outlets and Culinary Lounges:</strong> Showcasing a masterfully curated fusion of international fine dining, a vibrant rooftop lounge experience, and a modern tribute to the legendary Ethiopian coffee ceremony.</li>
              <li><strong>8 State-of-the-Art Conference Halls and Meeting Rooms:</strong> Scalable, premium venues fully equipped with advanced projectors, high-end PA systems, and high-speed Wi-Fi to flawlessly elevate your corporate events.</li>
              <li><strong>1 Fully Equipped Wellness Center and Spa:</strong> Designed as a tranquil haven featuring a professional-grade fitness center, private steam and sauna rooms, and rejuvenating treatments.</li>
              <li><strong>1 Executive Business Center:</strong> Providing a quiet, high-speed, and fully connected workspace tailored specifically for the discerning corporate traveler.</li>
            </ul>
            <p className="text-center font-bold text-xl italic text-[#1C2E24] pt-6 border-t-2 border-[#1C2E24]">
              Step into a world where modern sophistication gracefully honors the cradle of hospitality. Welcome to your haven.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <button className="group relative inline-flex items-center justify-center overflow-hidden border border-[#2B7A4B] bg-transparent px-10 py-3 text-[11px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#2B7A4B] transition-all duration-500 hover:text-white rounded-md">
              <span className="absolute inset-0 bg-[#2B7A4B] transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative z-10 transition-colors duration-300">
                Secure Your Stay
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= GRID: FEATURED SERVICES & LUXURY PATHWAYS ================= */}
      <section className="bg-[#FBFBFA] border-t border-b border-neutral-100 py-32 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#2B7A4B] font-black mb-3">Designed For Excellence</h3>
            <p className="text-2xl sm:text-4xl font-serif font-light text-[#1C2E24] tracking-wide">Premium Ecosystem Features</p>
            <div className="w-12 h-[1px] bg-[#2B7A4B]/30 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {/* Feature Item 1: Culinary & Nightlife Outlets */}
            <Link to="/dining-nightlife" className="group bg-[#FFFFFF] p-6 rounded-none border border-neutral-200/60 hover:border-[#2B7A4B]/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="overflow-hidden mb-8 bg-[#1C2E24] aspect-[4/3] rounded-none relative">
                  <img src="/a.png" alt="Fine Dining Gastronomy" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h4 className="text-base font-black uppercase tracking-widest mb-4 text-[#1C2E24] group-hover:text-[#2B7A4B] transition-colors flex items-center justify-between">
                  <span>Culinary & Nightlife Outlets</span>
                  <span className="text-xs font-serif italic text-[#2B7A4B]">01</span>
                </h4>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black text-[#2B7A4B] mt-8 block group-hover:translate-x-1 transition-transform duration-300">
                Explore Menus & Reservations &rarr;
              </div>
            </Link>

            {/* Feature Item 2: Conferences */}
            <Link to="/conference-events" className="group bg-[#FFFFFF] p-5 rounded-none border border-neutral-200/60 hover:border-[#2B7A4B]/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="overflow-hidden mb-8 bg-[#1C2E24] aspect-[4/3] rounded-none relative">
                  <img src="/b.png" alt="MICE Conference Spaces" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h4 className="text-base font-black uppercase tracking-widest mb-3 text-[#1C2E24] group-hover:text-[#2B7A4B] transition-colors flex items-center justify-between">
                  <span>Corporate MICE Hubs</span>
                  <span className="text-xs font-serif italic text-[#2B7A4B]">02</span>
                </h4>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-black text-[#2B7A4B] mt-6 block group-hover:translate-x-1 transition-transform duration-300">
                Explore Hubs &rarr;
              </div>
            </Link>

            {/* Feature Item 3: Wellness */}
            <Link to="/wellness" className="group bg-[#FFFFFF] p-5 rounded-none border border-neutral-200/60 hover:border-[#2B7A4B]/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="overflow-hidden mb-8 bg-[#1C2E24] aspect-[4/3] rounded-none relative">
                  <img src="/c.png" alt="Wellness Spa & Gym" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h4 className="text-base font-black uppercase tracking-widest mb-3 text-[#1C2E24] group-hover:text-[#2B7A4B] transition-colors flex items-center justify-between">
                  <span>Physical Rejuvenation</span>
                  <span className="text-xs font-serif italic text-[#2B7A4B]">03</span>
                </h4>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-black text-[#2B7A4B] mt-6 block group-hover:translate-x-1 transition-transform duration-300">
                Review Health &rarr;
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ACCESSIBILITY SERVICE OVERVIEW ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="bg-[#1C2E24] text-white p-12 sm:p-24 rounded-none relative overflow-hidden shadow-2xl border border-[#2B7A4B]/30">
          <div className="absolute top-0 right-0 p-8 text-[16rem] font-serif font-black text-white/[0.015] select-none pointer-events-none leading-none">
            EST
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#2B7A4B] font-black block mb-4">Complete Infrastructure Guarantee</span>
            <h4 className="text-2xl sm:text-4xl font-serif font-light mb-8 tracking-wide">Unrivaled Universal Property Accessibility</h4>
            <Link to="/services" className="inline-flex items-center bg-transparent border border-[#2B7A4B] text-[#2B7A4B] px-12 py-4.5 text-xs uppercase tracking-[0.25em] font-black hover:bg-[#2B7A4B] hover:text-[#1C2E24] transition-all duration-400 rounded-none shadow-xl active:scale-[0.99] transform">
              Review Guest Services &nbsp; &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL AND CONTACT FOOTER ================= */}
      <div className="flex flex-col items-center gap-8 py-10 bg-[#1C2E24]">
        {/* Social Platforms */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-black uppercase tracking-[0.25em]">
          {[
            { name: 'Facebook', icon: FaFacebook, link: 'https://facebook.com/hoteltamarindhaven' },
            { name: 'Instagram', icon: FaInstagram, link: 'https://instagram.com/hoteltamarindhaven' },
            { name: 'LinkedIn', icon: FaLinkedin, link: 'https://linkedin.com/in/hoteltamarindhaven' },
            { name: 'TikTok', icon: FaTiktok, link: 'https://tiktok.com/@hoteltamarindhaven' },
            { name: 'Twitter', icon: FaTwitter, link: 'https://twitter.com/hoteltamarindhaven' },
            { name: 'YouTube', icon: FaYoutube, link: 'https://youtube.com/hoteltamarindhaven' },
          ].map((social) => (
            <a key={social.name} href={social.link} target="_blank" rel="noreferrer" 
               className="flex flex-col items-center gap-2 text-white hover:text-[#2B7A4B] transition-all">
              <social.icon className="text-xl" />
              {social.name}
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-8 text-white text-sm border-t border-white/20 pt-6 mt-2">
          <a href="tel:+251994494884" className="flex items-center gap-2 hover:text-[#2B7A4B]">
            <FaPhone /> +251 994 494 884
          </a>
          <a href="https://wa.me/254141043048" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#2B7A4B]">
            <FaWhatsapp /> +254 141 043 048
          </a>
          <a href="https://t.me/211922912939" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#2B7A4B]">
            <FaTelegram /> +211 922 912 939
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;