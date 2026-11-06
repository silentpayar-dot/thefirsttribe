import React from 'react';
import { MURALS, TESTIMONIALS, MuralItem } from '../data/restaurantData';
import { Lock, Star, Sparkles } from 'lucide-react';

interface GuestReviewsSectionProps {
  onSelectMural: (mural: MuralItem) => void;
}

export const GuestReviewsSection: React.FC<GuestReviewsSectionProps> = ({
  onSelectMural,
}) => {
  return (
    <section 
      id="murals-reviews" 
      className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-parchment-luxury text-[#171b20] border-b border-[#cfcbbe]"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-1">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#1a2128] font-normal tracking-tight">
            What Our Guests Say
          </h2>
          <div className="w-16 h-0.5 bg-[#dfa24a] mx-auto mt-2"></div>
        </div>

        {/* 4 Column Grid: Murals on Top, Testimonial Cards Directly Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-start">
          {MURALS.map((mural, idx) => {
            const review = TESTIMONIALS[idx] || TESTIMONIALS[0];

            return (
              <div key={mural.id} className="flex flex-col space-y-3.5">
                
                {/* Mural Item Card */}
                <div 
                  onClick={() => onSelectMural(mural)}
                  className="group cursor-pointer select-none"
                  title="Click to view full heritage mural art"
                >
                  {/* Ornate Frame Image */}
                  <div className="relative rounded-sm overflow-hidden border-[2.5px] border-[#1c2229] shadow-md bg-[#0f141a]">
                    
                    {/* Inner corner decorative brackets */}
                    <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#dfa24a]/80 z-10 pointer-events-none"></div>
                    <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#dfa24a]/80 z-10 pointer-events-none"></div>
                    <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#dfa24a]/80 z-10 pointer-events-none"></div>
                    <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#dfa24a]/80 z-10 pointer-events-none"></div>

                    <div className="relative aspect-[16/7.5] sm:aspect-[16/8] overflow-hidden">
                      <img
                        src={mural.image}
                        alt={`${mural.title} - ${mural.subtitle}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Lock Icon Circle in Center (as in mockup) */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-black/75 border border-[#dfa24a]/70 flex items-center justify-center text-white shadow-lg backdrop-blur-[1px] transition-transform duration-300 group-hover:scale-110">
                          <Lock className="w-3.5 h-3.5 text-[#f5ebd8]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mural Subtitle Caption */}
                  <div className="pt-2 text-center">
                    <p className="text-[12px] sm:text-[13px] font-semibold text-[#1c232b] tracking-tight group-hover:text-[#946115] transition-colors">
                      {mural.title} - {mural.subtitle}
                    </p>
                  </div>
                </div>

                {/* Testimonial Card Directly Beneath (Dark Box with Gold Stars) */}
                <div className="bg-[#0b0e12] border border-[#21272e] rounded-lg p-4 sm:p-4.5 text-center flex flex-col justify-between space-y-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.3)] min-h-[148px]">
                  {/* 5 Gold Stars */}
                  <div className="flex items-center justify-center gap-1 text-[#dfa24a]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#dfa24a]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-[11.5px] sm:text-[12px] leading-snug text-[#ded8cb] font-normal italic">
                    {review.quote}
                  </blockquote>

                  {/* Author & City */}
                  <div className="pt-1 text-[11px] sm:text-[11.5px] font-medium text-[#c09647]">
                    - {review.author}, {review.city}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
