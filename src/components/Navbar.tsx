import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReserve: () => void;
  onOpenMenu: () => void;
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReserve,
  onOpenMenu,
  onOpenContact,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full z-30 select-none">
      {/* Top Left Angled "DEMO" Ribbon */}
      <div className="corner-ribbon">DEMO</div>

      {/* Main Luxury Dark Marble Nav */}
      <nav className="relative bg-[#07090b] border-b border-[#21262d]/60 px-4 sm:px-8 py-3.5 flex items-center justify-between text-[#f3ede2]">
        {/* Brand Logo & Emblem */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer pl-6 sm:pl-10 group"
        >
          <img 
            src="./images/emblem.png" 
            alt="The First Tribe Emblem" 
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-[0_2px_8px_rgba(223,162,74,0.3)] transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // fallback if image not loaded yet
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="font-cinzel tracking-[0.22em] text-base sm:text-lg font-bold text-[#f5ecd8] group-hover:text-[#dfa24a] transition-colors">
            THE FIRST TRIBE
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-7 lg:space-x-10 text-sm font-medium tracking-wide">
          <button
            onClick={() => scrollToSection('hero')}
            className={`transition-colors relative pb-1 ${
              activeSection === 'home'
                ? 'text-[#f5ecd8] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#dfa24a]'
                : 'text-[#bbb4a8] hover:text-[#dfa24a]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('signature-menu')}
            className={`transition-colors relative pb-1 ${
              activeSection === 'menu'
                ? 'text-[#f5ecd8] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#dfa24a]'
                : 'text-[#bbb4a8] hover:text-[#dfa24a]'
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection('murals-reviews')}
            className={`transition-colors relative pb-1 ${
              activeSection === 'gallery'
                ? 'text-[#f5ecd8] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#dfa24a]'
                : 'text-[#bbb4a8] hover:text-[#dfa24a]'
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`transition-colors relative pb-1 ${
              activeSection === 'about'
                ? 'text-[#f5ecd8] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#dfa24a]'
                : 'text-[#bbb4a8] hover:text-[#dfa24a]'
            }`}
          >
            About
          </button>
          <button
            onClick={onOpenReserve}
            className={`transition-colors relative pb-1 ${
              activeSection === 'reserve'
                ? 'text-[#f5ecd8] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#dfa24a]'
                : 'text-[#bbb4a8] hover:text-[#dfa24a]'
            }`}
          >
            Reserve
          </button>
        </div>

        {/* Contact CTA Button (Amber / Warm Gold Button) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="bg-[#dfa24a] hover:bg-[#caa242] active:scale-95 text-[#0f1418] font-semibold px-6 py-1.5 rounded-md text-sm transition-all shadow-[0_2px_10px_rgba(223,162,74,0.35)] cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenContact}
            className="bg-[#dfa24a] text-[#0f1418] font-semibold px-3 py-1 rounded text-xs"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-[#dcd6cc] hover:text-white hover:bg-neutral-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1014] border-b border-[#21262d] px-6 py-5 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-medium text-[#ded7ca]">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left py-2 hover:text-[#dfa24a] border-b border-[#1b2128]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('signature-menu')}
              className="text-left py-2 hover:text-[#dfa24a] border-b border-[#1b2128]"
            >
              Menu & Specialties
            </button>
            <button
              onClick={() => scrollToSection('murals-reviews')}
              className="text-left py-2 hover:text-[#dfa24a] border-b border-[#1b2128]"
            >
              Gallery & Heritage Murals
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 hover:text-[#dfa24a] border-b border-[#1b2128]"
            >
              About The First Tribe
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="text-left py-2 text-[#dfa24a] flex items-center gap-2 border-b border-[#1b2128]"
            >
              <Calendar className="w-4 h-4" /> Book a Table / Reservation
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMenu();
              }}
              className="text-left py-2 text-[#dfa24a] flex items-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4" /> View Full Menu
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent("Salam! I would like to order / reserve a table at The First Tribe, Army Stadium Peshawar.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1eb759] hover:bg-[#199d4c] text-white py-2.5 px-4 rounded-md font-semibold text-center text-sm flex items-center justify-center gap-2 shadow"
            >
              WhatsApp Us: {RESTAURANT_INFO.phonePrimary}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
