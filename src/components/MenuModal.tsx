import React, { useState } from 'react';
import { X, Search, Plus, Minus, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { EXPANDED_MENU, MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { item: MenuItem; count: number }[];
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onClearCart: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'bbq', label: 'BBQ & Grills' },
    { id: 'traditional', label: 'Traditional Karahi & Rice' },
    { id: 'pizza', label: 'Wood-Fired Pizza' },
    { id: 'fastfood', label: 'Burgers & Fried Chicken' },
    { id: 'drinks', label: 'Drinks & Kahwa' },
  ];

  const filteredItems = EXPANDED_MENU.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartTotal = cart.reduce(
    (sum, entry) => sum + entry.item.price * entry.count,
    0
  );
  const totalItemsCount = cart.reduce((sum, entry) => sum + entry.count, 0);

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;
    
    let orderLines = cart
      .map(
        (c) => `• ${c.count}x ${c.item.name} (${c.item.displayPrice}) = PKR ${(c.item.price * c.count).toLocaleString()}`
      )
      .join('\n');

    const message = `*New Order - The First Tribe (Army Stadium Peshawar)*

Order Items:
${orderLines}

*Total: PKR ${cartTotal.toLocaleString()}*

📍 Delivery / Takeaway / Dine-in
Please confirm order preparation time. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl h-[90vh] bg-[#0b0e12] border border-[#2b353f] rounded-xl shadow-2xl flex flex-col text-[#ded8cb] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1c242d] flex items-center justify-between bg-[#06080a] flex-shrink-0">
          <div className="flex items-center gap-3">
            <img src="./images/emblem.png" alt="Logo" className="w-7 h-7 object-contain" />
            <div>
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#dfa24a] font-medium leading-none">
                The First Tribe — Dining Menu
              </h2>
              <p className="text-[11px] text-[#938b7e] mt-1">
                Army Stadium Food Court, Peshawar • Freshly prepared daily
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="px-6 py-3 border-b border-[#171e27] bg-[#0e1217] flex flex-col sm:flex-row gap-3 items-center justify-between flex-shrink-0">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#dfa24a] text-black font-bold'
                    : 'bg-[#151b22] text-[#b5ada1] hover:text-white hover:bg-[#1f2832]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-60">
            <Search className="w-4 h-4 text-neutral-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151b22] border border-[#232c37] rounded-full pl-8 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dfa24a]"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="p-6 overflow-y-auto flex-grow space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const inCart = cart.find((c) => c.item.id === item.id);

              return (
                <div
                  key={item.id}
                  className="bg-[#0f141a] border border-[#1f2933] hover:border-[#dfa24a]/50 rounded-lg p-3.5 flex gap-3.5 transition-all shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-md object-cover flex-shrink-0 border border-[#25303c]"
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif-luxury font-medium text-base text-[#f7f2e7]">
                          {item.name}
                        </h4>
                        <span className="text-xs font-bold text-[#dfa24a]">
                          {item.displayPrice}
                        </span>
                      </div>
                      {item.tagline && (
                        <p className="text-[11px] text-[#caa25c] mt-0.5">
                          {item.tagline}
                        </p>
                      )}
                      <p className="text-[11.5px] text-[#8e97a2] mt-1 line-clamp-2 leading-tight">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-end">
                      {inCart ? (
                        <div className="flex items-center gap-2 bg-[#1b232c] px-2 py-1 rounded">
                          <button
                            onClick={() => onRemoveFromCart(item.id)}
                            className="p-1 hover:text-red-400"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold text-[#dfa24a]">
                            {inCart.count}
                          </span>
                          <button
                            onClick={() => onAddToCart(item)}
                            className="p-1 hover:text-green-400"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => onAddToCart(item)}
                          className="bg-[#dfa24a] hover:bg-[#ca923e] text-black font-semibold text-xs px-3 py-1.5 rounded flex items-center gap-1 transition-all"
                        >
                          <Plus className="w-3.5 h-3.5" /> Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Cart / Checkout Strip */}
        {cart.length > 0 && (
          <div className="px-6 py-3.5 border-t border-[#1e2630] bg-[#07090c] flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#dfa24a] text-black flex items-center justify-center font-bold text-sm">
                {totalItemsCount}
              </div>
              <div>
                <p className="text-xs text-[#9d9587]">Order Subtotal:</p>
                <p className="text-base font-bold text-[#dfa24a]">
                  PKR {cartTotal.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={onClearCart}
                className="text-xs text-neutral-400 hover:text-neutral-200 underline px-2 py-1"
              >
                Clear
              </button>
              <button
                onClick={handleCheckoutWhatsApp}
                className="bg-[#1eb759] hover:bg-[#199d4c] text-white font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm flex items-center gap-2 shadow"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Send Order via WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
