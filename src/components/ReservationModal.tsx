import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('4 Guests');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('08:00 PM');
  const [seatingArea, setSeatingArea] = useState('Luxury Velvet Lounge');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Table Reservation Request - The First Tribe (Peshawar)*
• Name: ${name || 'Valued Guest'}
• Contact: ${phone || 'Not provided'}
• Guests: ${guests}
• Date: ${date}
• Time: ${time}
• Preferred Seating: ${seatingArea}
${notes ? `• Special Notes: ${notes}` : ''}
📍 Location: Army Stadium Food Court, Peshawar`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0c1014] border border-[#2b353f] rounded-xl shadow-2xl text-[#ded8cb] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#1f2730] flex items-center justify-between bg-[#07090b]">
          <div className="flex items-center gap-2.5">
            <img src="./images/emblem.png" alt="Emblem" className="w-6 h-6 object-contain" />
            <h3 className="font-serif-luxury text-xl text-[#dfa24a] font-medium">
              Reserve a Table
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
          <p className="text-xs text-[#a49d91]">
            Experience genuine Pashtun hospitality at Army Stadium Food Court, Peshawar. Reserve your table instantly via WhatsApp.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-[#c8bfb0] mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Asad Khan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#131920] border border-[#27323e] rounded-lg px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-[#dfa24a]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#c8bfb0] mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="0300-1234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#131920] border border-[#27323e] rounded-lg px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-[#dfa24a]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-[#c8bfb0] mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#dfa24a]" /> Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#131920] border border-[#27323e] rounded-lg px-2.5 py-2 text-white focus:outline-none focus:border-[#dfa24a]"
              >
                <option value="2 Guests">2 Guests (Couple)</option>
                <option value="4 Guests">4 Guests</option>
                <option value="6 Guests">6 Guests</option>
                <option value="8 Guests">8 Guests (Family)</option>
                <option value="12+ Guests">12+ Large Tribe</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#c8bfb0] mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#dfa24a]" /> Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#131920] border border-[#27323e] rounded-lg px-2 py-2 text-white focus:outline-none focus:border-[#dfa24a]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#c8bfb0] mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#dfa24a]" /> Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-[#131920] border border-[#27323e] rounded-lg px-2 py-2 text-white focus:outline-none focus:border-[#dfa24a]"
              >
                <option value="01:00 PM">01:00 PM (Lunch)</option>
                <option value="03:00 PM">03:00 PM (Afternoon)</option>
                <option value="06:30 PM">06:30 PM (Evening)</option>
                <option value="08:00 PM">08:00 PM (Dinner)</option>
                <option value="09:30 PM">09:30 PM (Late Dinner)</option>
                <option value="11:00 PM">11:00 PM (Night Owls)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#c8bfb0] mb-1">
              Preferred Dining Ambiance
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                'Luxury Velvet Lounge',
                'Traditional Dastarkhwan',
                'Family Dining Hall',
                'Open Terrace',
              ].map((area) => (
                <button
                  type="button"
                  key={area}
                  onClick={() => setSeatingArea(area)}
                  className={`px-3 py-2 rounded-lg border text-left transition-colors ${
                    seatingArea === area
                      ? 'bg-[#dfa24a]/20 border-[#dfa24a] text-[#f5ecd8] font-semibold'
                      : 'bg-[#131920] border-[#252f3a] text-neutral-400 hover:text-white'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#c8bfb0] mb-1">
              Special Requests / Dietary Notes
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Birthday celebration, High chair needed, Pre-order Shinwari Karahi"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#131920] border border-[#27323e] rounded-lg px-3 py-1.5 text-white placeholder-neutral-500 focus:outline-none focus:border-[#dfa24a] text-xs resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#1eb759] hover:bg-[#199d4c] active:scale-[0.99] text-white font-bold py-3 rounded-lg text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Book Table on WhatsApp ({RESTAURANT_INFO.phonePrimary})</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
