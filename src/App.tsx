import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SignatureMenuSection } from './components/SignatureMenuSection';
import { GuestReviewsSection } from './components/GuestReviewsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MenuModal } from './components/MenuModal';
import { MuralModal } from './components/MuralModal';
import { ContactModal } from './components/ContactModal';
import { MenuItem, MuralItem, RESTAURANT_INFO } from './data/restaurantData';
import { MessageCircle, ShoppingBag } from 'lucide-react';

export default function App() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedMural, setSelectedMural] = useState<MuralItem | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  // Cart state for orders
  const [cart, setCart] = useState<{ item: MenuItem; count: number }[]>([]);
  const [activeSection, setActiveSection] = useState('home');

  // Add item to cart
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, count: c.count + 1 } : c
        );
      }
      return [...prev, { item, count: 1 }];
    });
  };

  // Remove item from cart
  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === itemId);
      if (existing && existing.count > 1) {
        return prev.map((c) =>
          c.item.id === itemId ? { ...c, count: c.count - 1 } : c
        );
      }
      return prev.filter((c) => c.item.id !== itemId);
    });
  };

  const handleClearCart = () => setCart([]);

  // Direct WhatsApp order action
  const handleOpenOrderWhatsApp = () => {
    if (cart.length > 0) {
      setIsMenuOpen(true);
    } else {
      const message = encodeURIComponent(
        `Salam! I would like to place an order at The First Tribe (Army Stadium Peshawar). Please share today's specials.`
      );
      window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${message}`, '_blank');
    }
  };

  // Track active scroll section for nav indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const hero = document.getElementById('hero');
      const menu = document.getElementById('signature-menu');
      const gallery = document.getElementById('murals-reviews');
      const about = document.getElementById('about');

      if (gallery && scrollPos >= gallery.offsetTop) {
        setActiveSection('gallery');
      } else if (about && scrollPos >= about.offsetTop) {
        setActiveSection('about');
      } else if (menu && scrollPos >= menu.offsetTop) {
        setActiveSection('menu');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="min-h-screen bg-[#07090b] text-[#f2ede4] font-sans antialiased selection:bg-[#dfa24a]/30 selection:text-white flex flex-col justify-between">
      {/* Top Navigation */}
      <Navbar
        onOpenReserve={() => setIsReserveOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Layout exactly reproducing the uploaded design */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenReserve={() => setIsReserveOpen(true)}
        />

        {/* Signature Menu Section (Teal Background with 5 Cards) */}
        <SignatureMenuSection
          onSelectItem={(item) => {
            setSelectedMenuItem(item);
            setIsMenuOpen(true);
          }}
          onAddToCart={(item) => handleAddToCart(item)}
          onOpenFullMenu={() => setIsMenuOpen(true)}
        />

        {/* Guest Reviews & Heritage Murals Section ("What Our Guests Say") */}
        <GuestReviewsSection
          onSelectMural={(mural) => setSelectedMural(mural)}
        />

        {/* Heritage & Tradition About Section */}
        <AboutSection
          onOpenReserve={() => setIsReserveOpen(true)}
          onOpenMenu={() => setIsMenuOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenOrderWhatsApp={handleOpenOrderWhatsApp}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Cart Quick Button if items exist */}
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="pointer-events-auto bg-[#dfa24a] hover:bg-[#ca923e] text-black font-bold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 transform active:scale-95 transition-all animate-bounce"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Cart ({totalCartCount})</span>
          </button>
        )}

        {/* Direct WhatsApp Quick Contact FAB */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
            "Salam! I want to contact The First Tribe Peshawar."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-[#1eb759] hover:bg-[#199d4c] text-white p-3.5 rounded-full shadow-[0_4px_20px_rgba(30,183,89,0.5)] transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title="Instant WhatsApp Chat"
          aria-label="WhatsApp Chat"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      </div>

      {/* Interactive Modals */}
      <ReservationModal
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
      />

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <MuralModal
        mural={selectedMural}
        onClose={() => setSelectedMural(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onOpenReserve={() => setIsReserveOpen(true)}
      />
    </div>
  );
}
