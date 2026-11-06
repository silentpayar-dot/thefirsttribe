import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenOrderWhatsApp: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenOrderWhatsApp,
  onOpenContact,
}) => {
  return (
    <footer className="relative w-full bg-[#06080a] text-[#ded8cb] border-t border-[#1d232a] select-none">
      {/* Upper Footer Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
          
          {/* Left: Emblem + Brand Name */}
          <div className="flex items-center gap-3">
            <img
              src="./images/emblem.png"
              alt="The First Tribe Emblem"
              className="w-8 h-8 object-contain drop-shadow"
            />
            <span className="font-cinzel tracking-[0.22em] text-base sm:text-lg font-bold text-[#f5ecd8]">
              THE FIRST TRIBE
            </span>
          </div>

          {/* Center: Contact Info */}
          <div className="flex flex-col items-center space-y-1.5">
            <h4 
              onClick={onOpenContact}
              className="font-serif-luxury text-base sm:text-lg text-[#dfa24a] font-medium cursor-pointer hover:underline"
            >
              Contact Us
            </h4>
            <div className="flex items-center text-xs sm:text-sm text-[#e4ded3] font-medium">
              <a
                href={`tel:${RESTAURANT_INFO.phonePrimary.replace(/-/g, '')}`}
                className="flex items-center gap-2 hover:text-[#dfa24a] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#dfa24a]" />
                <span className="font-semibold tracking-wider">{RESTAURANT_INFO.phonePrimary}</span>
              </a>
            </div>
            <p className="text-[11px] text-[#868d95] pt-0.5">
              Army Stadium Food Court, Peshawar
            </p>
          </div>

          {/* Right: Order on WhatsApp Green Pill Button */}
          <div>
            <button
              onClick={onOpenOrderWhatsApp}
              className="inline-flex items-center gap-2.5 bg-[#1eb759] hover:bg-[#199d4c] active:scale-95 text-white font-bold px-6 py-2.5 rounded-full text-sm sm:text-base shadow-[0_4px_16px_rgba(30,183,89,0.35)] transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Order on WhatsApp</span>
            </button>
          </div>

        </div>
      </div>

      {/* Lower Copyright Strip */}
      <div className="border-t border-[#161b21] py-4 px-4 text-center text-xs text-[#828890]">
        <p>
          © 2024 The First Tribe. All rights reserved. | Designed with tradition & elegance.
        </p>
      </div>
    </footer>
  );
};
