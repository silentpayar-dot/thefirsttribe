import React from 'react';
import { SIGNATURE_MENU, MenuItem } from '../data/restaurantData';
import { Plus, Eye } from 'lucide-react';

interface SignatureMenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
  onOpenFullMenu: () => void;
}

export const SignatureMenuSection: React.FC<SignatureMenuSectionProps> = ({
  onSelectItem,
  onAddToCart,
  onOpenFullMenu,
}) => {
  return (
    <section 
      id="signature-menu" 
      className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-teal-luxury text-white overflow-hidden border-b border-[#0f3c42]"
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0e4e57]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#dfa24a]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-1.5 mb-8 sm:mb-11">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#dfa24a] tracking-wide font-normal">
            Signature Menu
          </h2>
          <p className="text-[#a7ccc6] text-xs sm:text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto">
            A curated selection of our most loved dishes, prepared fresh daily
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3.5 xl:gap-4 items-stretch">
          {SIGNATURE_MENU.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between bg-[#070b0e] border border-[#2d3a3d] hover:border-[#dfa24a]/70 rounded-none transition-all duration-300 shadow-[0_4px_18px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Image Container with subtle inner gold border */}
              <div 
                onClick={() => onSelectItem(item)}
                className="relative w-full h-32 sm:h-36 overflow-hidden cursor-pointer bg-[#050709]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="bg-[#dfa24a] text-black text-xs font-bold px-2.5 py-1 rounded-sm flex items-center gap-1 shadow">
                    <Eye className="w-3.5 h-3.5" /> Details
                  </span>
                </div>

                {/* Subtle border separator */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#223538]"></div>
              </div>

              {/* Content Block */}
              <div className="p-3.5 flex flex-col flex-grow justify-between text-center space-y-2">
                <div>
                  <h3 className="font-serif-luxury text-lg text-[#f4ecd8] font-medium tracking-wide group-hover:text-[#dfa24a] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[12px] sm:text-[12.5px] text-[#97a5a8] leading-snug mt-1 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#1a2729] flex items-center justify-between">
                  <span className="text-[#dfa24a] font-bold text-sm tracking-wide">
                    {item.displayPrice}
                  </span>

                  <button
                    onClick={() => onAddToCart(item)}
                    className="text-xs bg-[#122225] hover:bg-[#dfa24a] text-[#c4deda] hover:text-black font-semibold px-2 py-1 rounded transition-colors flex items-center gap-1"
                    title="Add to WhatsApp Order"
                  >
                    <Plus className="w-3.5 h-3.5" /> Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Callout Bar */}
        <div className="mt-8 text-center">
          <button
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#dfa24a] hover:text-[#f7e3ba] border-b border-[#dfa24a]/60 hover:border-[#dfa24a] pb-1 transition-all"
          >
            Explore Complete Tribal Menu & Specialties →
          </button>
        </div>

      </div>
    </section>
  );
};
