import React from 'react';
import { X, Sparkles, MapPin, Share2 } from 'lucide-react';
import { MuralItem, RESTAURANT_INFO } from '../data/restaurantData';

interface MuralModalProps {
  mural: MuralItem | null;
  onClose: () => void;
}

export const MuralModal: React.FC<MuralModalProps> = ({ mural, onClose }) => {
  if (!mural) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0b0f14] border border-[#2b353f] rounded-xl shadow-2xl text-[#ded8cb] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1e2732] flex items-center justify-between bg-[#06080b]">
          <div>
            <span className="text-[11px] font-semibold tracking-widest text-[#dfa24a] uppercase">
              Tribal Heritage Artwork Wall
            </span>
            <h3 className="font-serif-luxury text-xl text-[#f7f3ea] font-medium">
              {mural.title} — {mural.subtitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Framed Image */}
          <div className="relative rounded-lg overflow-hidden border border-[#263442] shadow-xl bg-black">
            <img
              src={mural.image}
              alt={mural.title}
              className="w-full h-auto max-h-[360px] object-cover"
            />
          </div>

          <div className="space-y-3">
            <h4 className="font-serif-luxury text-lg text-[#dfa24a]">
              Cultural Story & Craftsmanship
            </h4>
            <p className="text-sm text-[#ded8cb] leading-relaxed">
              {mural.description}
            </p>
            <p className="text-xs text-[#a09a8e] leading-relaxed bg-[#11171f] p-3 rounded-lg border border-[#1e2733]">
              {mural.details}
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-[#898377] border-t border-[#1a232e]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#dfa24a]" />
              Painted live at The First Tribe, Army Stadium Food Court Peshawar
            </span>
            <button
              onClick={onClose}
              className="bg-[#dfa24a] text-black font-semibold px-4 py-1.5 rounded hover:bg-[#ca923e]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
