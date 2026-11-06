import React from 'react';
import { X, Phone, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReserve: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onOpenReserve,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0b0e12] border border-[#2b353f] rounded-xl shadow-2xl text-[#ded8cb] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1c242d] flex items-center justify-between bg-[#06080a]">
          <div className="flex items-center gap-2.5">
            <img src="./images/emblem.png" alt="Emblem" className="w-6 h-6 object-contain" />
            <h3 className="font-serif-luxury text-xl text-[#dfa24a] font-medium">
              Contact The First Tribe
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
        <div className="p-6 space-y-5 text-sm">
          {/* Location Box */}
          <div className="bg-[#10161d] border border-[#1f2834] rounded-lg p-4 space-y-2">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#dfa24a] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white">Restaurant Location</h4>
                <p className="text-xs text-[#a9a296] mt-0.5 leading-relaxed">
                  {RESTAURANT_INFO.address}
                </p>
                <a
                  href="https://maps.google.com/?q=Army+Stadium+Food+Court+Peshawar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#dfa24a] hover:underline mt-2 font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Timings Box */}
          <div className="bg-[#10161d] border border-[#1f2834] rounded-lg p-4 flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#dfa24a] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Opening Hours</h4>
              <p className="text-xs text-[#a9a296] mt-0.5">
                {RESTAURANT_INFO.hours}
              </p>
              <p className="text-[11px] text-[#55b97f] mt-1">
                ● Currently Open for Dine-in, Takeaway & WhatsApp Deliveries
              </p>
            </div>
          </div>

          {/* Direct Phone Numbers */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider text-[#9d9486] font-semibold">
              Direct Inquiries & Table Bookings
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phonePrimary.replace(/-/g, '')}`}
                className="bg-[#141b23] hover:bg-[#1a232e] border border-[#253241] p-3 rounded-lg flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#dfa24a]" />
                  <span className="font-mono text-sm font-semibold text-white">
                    {RESTAURANT_INFO.phonePrimary}
                  </span>
                </div>
                <span className="text-[11px] text-[#dfa24a] group-hover:underline">Call</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneSecondary.replace(/-/g, '')}`}
                className="bg-[#141b23] hover:bg-[#1a232e] border border-[#253241] p-3 rounded-lg flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#dfa24a]" />
                  <span className="font-mono text-sm font-semibold text-white">
                    {RESTAURANT_INFO.phoneSecondary}
                  </span>
                </div>
                <span className="text-[11px] text-[#dfa24a] group-hover:underline">Call</span>
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent("Salam! I want to inquire about The First Tribe Peshawar.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#1eb759] hover:bg-[#199d4c] text-white py-2.5 px-4 rounded-lg font-bold text-center text-xs sm:text-sm flex items-center justify-center gap-2 shadow"
            >
              Chat on WhatsApp
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenReserve();
              }}
              className="flex-1 bg-[#dfa24a] hover:bg-[#ca923e] text-black py-2.5 px-4 rounded-lg font-bold text-center text-xs sm:text-sm"
            >
              Book Table Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
