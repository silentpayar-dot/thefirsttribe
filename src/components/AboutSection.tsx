import React from 'react';
import { Sparkles, Shield, Heart, Award, Users } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AboutSectionProps {
  onOpenReserve: () => void;
  onOpenMenu: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenReserve,
  onOpenMenu,
}) => {
  return (
    <section 
      id="about" 
      className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#080b0e] text-[#ded8cb] border-b border-[#1c232b]"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#dfa24a] uppercase">
            Our Heritage & Story
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#f5ebd8] font-normal">
            Where Pashtun Hospitality Meets Modern Elegance
          </h2>
          <div className="w-16 h-0.5 bg-[#dfa24a] mx-auto mt-2"></div>
        </div>

        {/* 2 Column Story & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed text-[#b8b0a2]">
            <p>
              Nestled at the vibrant <span className="text-[#dfa24a] font-semibold">Army Stadium Food Court in Peshawar</span>, <strong className="text-white">The First Tribe</strong> was conceived with a heartfelt purpose: to honor centuries of Khyber culinary heritage while curating a luxurious, family-friendly contemporary dining ambiance.
            </p>
            <p>
              From our charcoal-grilled skewered BBQ and slow-cooked Shinwari lamb karahi cooked solely in rock salt and natural fat, to artisan wood-fired pepperoni pizzas and gourmet burgers — every plate is prepared fresh with the finest local ingredients and uncompromised quality.
            </p>
            <p className="italic text-[#dfa24a]/90 font-serif-luxury text-base sm:text-lg border-l-2 border-[#dfa24a] pl-4 py-1">
              "Melmastia (Hospitality) is not merely a service for us; it is our sacred code."
            </p>

            <div className="pt-3 flex flex-wrap gap-4">
              <button
                onClick={onOpenReserve}
                className="bg-[#dfa24a] hover:bg-[#ca923e] text-black font-bold px-5 py-2.5 rounded-lg text-sm transition-all shadow"
              >
                Reserve Your Experience
              </button>
              <button
                onClick={onOpenMenu}
                className="bg-[#141b22] hover:bg-[#1f2833] border border-[#2b3644] text-[#ded8cb] font-semibold px-5 py-2.5 rounded-lg text-sm transition-all"
              >
                Browse Menu
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            <div className="bg-[#0e1318] border border-[#222c37] p-4 rounded-xl text-center space-y-2">
              <Shield className="w-7 h-7 text-[#dfa24a] mx-auto" />
              <h4 className="font-serif-luxury text-white font-medium text-sm">Authentic Recipes</h4>
              <p className="text-xs text-[#8c949e]">Original tribal recipes passed down through generations</p>
            </div>

            <div className="bg-[#0e1318] border border-[#222c37] p-4 rounded-xl text-center space-y-2">
              <Heart className="w-7 h-7 text-[#dfa24a] mx-auto" />
              <h4 className="font-serif-luxury text-white font-medium text-sm">Pashtun Melmastia</h4>
              <p className="text-xs text-[#8c949e]">Warm welcoming service treating each guest like royal family</p>
            </div>

            <div className="bg-[#0e1318] border border-[#222c37] p-4 rounded-xl text-center space-y-2">
              <Award className="w-7 h-7 text-[#dfa24a] mx-auto" />
              <h4 className="font-serif-luxury text-white font-medium text-sm">Prime Quality</h4>
              <p className="text-xs text-[#8c949e]">100% fresh meat and premium hand-selected spices</p>
            </div>

            <div className="bg-[#0e1318] border border-[#222c37] p-4 rounded-xl text-center space-y-2">
              <Users className="w-7 h-7 text-[#dfa24a] mx-auto" />
              <h4 className="font-serif-luxury text-white font-medium text-sm">Family Ambiance</h4>
              <p className="text-xs text-[#8c949e]">Cozy private family dining areas and luxury plush seating</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
