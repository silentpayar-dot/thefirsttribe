import React from 'react';
import { Menu, MessageCircle, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroSectionProps {
  onOpenMenu: () => void;
  onOpenReserve: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenMenu,
  onOpenReserve,
}) => {
  return (
    <section 
      id="hero" 
      className="relative w-full overflow-hidden bg-[#090c0f] border-b border-[#1f252c]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Typography and Call to Action */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 space-y-4 sm:space-y-5 lg:pr-4">
            
            {/* DEMO Green Pill Badge */}
            <div className="inline-flex items-center">
              <span className="bg-[#1f7e44] text-[#e8faef] text-xs sm:text-[13px] font-semibold tracking-wide px-3.5 py-1 rounded-full shadow-sm border border-[#279854]">
                DEMO VERSION - For Preview Only
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] leading-[1.15] text-[#fbf8f2] tracking-tight drop-shadow-sm font-normal">
              The First Tribe - Taste of Tradition in Peshawar
            </h1>

            {/* Subtitle */}
            <p className="text-[#c8c1b3] text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl font-light">
              Authentic Pashtun flavors meets modern dining — crafted with tradition, served with hospitality at Army Stadium Food Court.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* View Menu Button */}
              <button
                onClick={onOpenMenu}
                className="inline-flex items-center justify-center gap-2.5 bg-[#dfa24a] hover:bg-[#cfa542] text-[#0f1418] font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-all transform active:scale-95 shadow-[0_4px_16px_rgba(223,162,74,0.3)] cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-[#0f1418]" />
                <span>View Menu</span>
              </button>

              {/* Book a Table on WhatsApp Button */}
              <button
                onClick={onOpenReserve}
                className="inline-flex items-center justify-center gap-2.5 bg-[#1eb759] hover:bg-[#199d4c] text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-all transform active:scale-95 shadow-[0_4px_16px_rgba(30,183,89,0.3)] cursor-pointer"
              >
                {/* Custom WhatsApp Icon SVG */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Book a Table on WhatsApp</span>
              </button>
            </div>

            {/* Quick Micro Info */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#a2998a]">
              <span>📍 Army Stadium Food Court</span>
              <span>•</span>
              <span>⏰ 12:00 PM – 1:00 AM</span>
              <span>•</span>
              <span>⭐ Pashtun Hospitality</span>
            </div>
          </div>

          {/* Right Column: Restaurant Ambiance and Host at FFT Podium */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl border border-[#2b353f]/70 bg-[#0d1217] group">
              {/* Image of the authentic dining hall and host at podium */}
              <img
                src="./images/hero-host-clean.jpg"
                alt="Welcome to The First Tribe - Host and Ambiance at Army Stadium Peshawar"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Ambient lighting highlight & vignette */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
              
              {/* Subtle top-corner gold accent */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none bg-gradient-to-bl from-[#dfa24a]/20 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
