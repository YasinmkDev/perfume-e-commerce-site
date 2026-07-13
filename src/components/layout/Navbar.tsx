import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../../lib/cartStore';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
}) => {
  const { totalCount, openDrawer } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: string, param?: string) => {
    setMobileMenuOpen(false);
    onNavigate(view, param);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#202020] h-[64px] border-b border-[#313131] transition-colors duration-200">
        <div className="max-w-[1440px] mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          {/* Left Zone: Hamburger + MENU label */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center gap-2 text-[#ffffff] hover:text-[#ffc000] transition-colors bg-transparent border-none cursor-pointer p-0 font-lambo text-[12px] tracking-[0.023em]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="hidden sm:inline">MENU</span>
            </button>

            {/* Desktop Navigation Links (4-5 single-line uppercase links) */}
            <nav className="hidden lg:flex items-center gap-8 pl-6 border-l border-[#313131]">
              <button
                onClick={() => handleNav('collection')}
                className={`font-lambo text-[13px] tracking-[0.023em] uppercase bg-transparent border-none p-0 cursor-pointer transition-colors ${
                  currentView === 'collection' ? 'text-[#ffc000]' : 'text-[#ffffff] hover:text-[#ffc000]'
                }`}
              >
                COLLEZIONE OLFATTIVA
              </button>
              <button
                onClick={() => handleNav('atelier')}
                className={`font-lambo text-[13px] tracking-[0.023em] uppercase bg-transparent border-none p-0 cursor-pointer transition-colors ${
                  currentView === 'atelier' ? 'text-[#ffc000]' : 'text-[#ffffff] hover:text-[#ffc000]'
                }`}
              >
                SANT’AGATA ATELIER
              </button>
              <button
                onClick={() => handleNav('profiler')}
                className={`font-lambo text-[13px] tracking-[0.023em] uppercase bg-transparent border-none p-0 cursor-pointer transition-colors ${
                  currentView === 'profiler' ? 'text-[#ffc000]' : 'text-[#ffffff] hover:text-[#ffc000]'
                }`}
              >
                SCENT PROFILER
              </button>
              <button
                onClick={() => handleNav('concierge')}
                className={`font-lambo text-[13px] tracking-[0.023em] uppercase bg-transparent border-none p-0 cursor-pointer transition-colors ${
                  currentView === 'concierge' ? 'text-[#ffc000]' : 'text-[#ffffff] hover:text-[#ffc000]'
                }`}
              >
                CLIENT CARE
              </button>
            </nav>
          </div>

          {/* Center Zone: Automobili Parfums Brand Wordmark */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 text-center bg-transparent border-none cursor-pointer p-0 group"
          >
            {/* Hexagonal Shield / Bull Icon Accent */}
            <div className="w-5 h-5 border border-[#ffffff] group-hover:border-[#ffc000] rotate-45 flex items-center justify-center transition-colors">
              <div className="w-2 h-2 bg-[#ffc000] rotate-0" />
            </div>
            <span className="font-lambo text-[15px] md:text-[18px] tracking-[0.06em] text-[#ffffff] group-hover:text-[#ffc000] transition-colors uppercase whitespace-nowrap">
              AUTOMOBILI PARFUMS
            </span>
          </button>

          {/* Right Zone: Search + Bag with Live Counter */}
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenSearch}
              className="text-[#ffffff] hover:text-[#ffc000] transition-colors bg-transparent border-none cursor-pointer p-1"
              aria-label="Search Fragrances"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <button
              onClick={openDrawer}
              className="relative inline-flex items-center gap-2 text-[#ffffff] hover:text-[#ffc000] transition-colors bg-transparent border-none cursor-pointer p-1 font-lambo text-[12px] tracking-[0.023em]"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">BAG</span>
              {totalCount > 0 && (
                <span className="bg-[#ffc000] text-[#000000] font-mono text-[10px] font-bold px-1.5 py-0.5 leading-none">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-Down Mobile / Expanded Editorial Navigation Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] z-30 bg-[#202020] text-[#ffffff] border-t border-[#313131] flex flex-col justify-between p-8 md:p-16 overflow-y-auto">
          <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="font-lambo text-[11px] text-[#7d7d7d] tracking-[0.023em]">
                COLLEZIONI & HAUTE PARFUMERIE
              </p>
              <ul className="space-y-4 list-none p-0 m-0">
                <li>
                  <button
                    onClick={() => handleNav('collection')}
                    className="font-lambo text-[28px] md:text-[40px] text-left hover:text-[#ffc000] transition-colors bg-transparent border-none cursor-pointer p-0 uppercase"
                  >
                    ALL FLACONS & EXTRACTS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('pdp', 'giallo-corsa-extrait')}
                    className="font-lambo text-[20px] md:text-[28px] text-[#7d7d7d] hover:text-[#ffffff] transition-colors bg-transparent border-none cursor-pointer p-0 uppercase"
                  >
                    GIALLO CORSA · FLAGSHIP
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('pdp', 'carbon-fibre-vapor')}
                    className="font-lambo text-[20px] md:text-[28px] text-[#7d7d7d] hover:text-[#ffffff] transition-colors bg-transparent border-none cursor-pointer p-0 uppercase"
                  >
                    CARBON FIBRE VAPOR
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('pdp', 'cuoio-di-sant-agata')}
                    className="font-lambo text-[20px] md:text-[28px] text-[#7d7d7d] hover:text-[#ffffff] transition-colors bg-transparent border-none cursor-pointer p-0 uppercase"
                  >
                    CUOIO DI SANT’AGATA
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('pdp', 'aero-blanc-pur')}
                    className="font-lambo text-[20px] md:text-[28px] text-[#7d7d7d] hover:text-[#ffffff] transition-colors bg-transparent border-none cursor-pointer p-0 uppercase"
                  >
                    AERO BLANC PUR
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-6 border-t md:border-t-0 md:border-l border-[#313131] pt-8 md:pt-0 md:pl-12">
              <p className="font-lambo text-[11px] text-[#7d7d7d] tracking-[0.023em]">
                CLIENT PRIVILEGES & INQUIRIES
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => handleNav('profiler')}
                  className="block font-lambo text-[20px] text-left hover:text-[#ffc000] transition-colors bg-transparent border-none cursor-pointer p-0 uppercase"
                >
                  INTERACTIVE SCENT PROFILER
                </button>
                <button
                  onClick={() => handleNav('atelier')}
                  className="block font-lambo text-[20px] text-left hover:text-[#ffc000] transition-colors bg-transparent border-none cursor-pointer p-0 uppercase"
                >
                  THE SANT’AGATA ATELIER & CRAFTSMANSHIP
                </button>
                <button
                  onClick={() => handleNav('concierge')}
                  className="block font-lambo text-[20px] text-left hover:text-[#ffc000] transition-colors bg-transparent border-none cursor-pointer p-0 uppercase"
                >
                  WHITE GLOVE SHIPPING & CARE
                </button>
              </div>

              <div className="pt-8 border-t border-[#313131] text-[13px] text-[#7d7d7d] font-sans">
                <p className="font-lambo text-[#ffffff] text-[14px] mb-1">CONCIERGE DESK</p>
                <p>Monday – Saturday: 09:00 – 19:00 CET</p>
                <p className="text-[#ffc000] font-mono mt-1">concierge@automobiliparfums.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
