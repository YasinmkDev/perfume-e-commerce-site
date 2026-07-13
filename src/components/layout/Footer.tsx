import React, { useState } from 'react';
import { GhostButton } from '../ui/GhostButton';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#181818] text-[#ffffff] border-t border-[#313131] pt-16 md:pt-20 pb-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-14 md:space-y-16">
        {/* Upper Zone: Brand Monolith Statement & Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 md:pb-12 border-b border-[#313131]">
          <div className="space-y-4 max-w-2xl">
            {/* Branding Lockup */}
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 border border-[#ffc000] rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#ffc000]" />
              </div>
              <span className="font-lambo text-[13px] md:text-[14px] text-[#ffffff] tracking-[0.06em] uppercase">
                AUTOMOBILI PARFUMS
              </span>
              <span className="text-[#494949] font-mono text-[11px]">·</span>
              <span className="font-lambo text-[11px] md:text-[12px] text-[#ffc000] tracking-[0.023em]">
                SANT’AGATA BOLOGNESE
              </span>
            </div>

            <h2 className="font-lambo text-[30px] sm:text-[40px] md:text-[54px] lg:text-[64px] leading-[0.98] tracking-[0.023em] uppercase">
              NOT AN ACCESSORY. AN ACCELERATION.
            </h2>
          </div>

          {/* Newsletter Box */}
          <div className="w-full lg:w-96 space-y-3">
            <p className="font-lambo text-[11px] md:text-[12px] text-[#7d7d7d] tracking-[0.023em] uppercase">
              THE PRIVATE OLFATTIVA DISPATCH
            </p>
            {subscribed ? (
              <div className="p-4 bg-[#202020] border border-[#ffc000] text-[#ffc000] font-lambo text-[12px] md:text-[13px]">
                ACCESS GRANTED. YOU WILL RECEIVE PRIVATE HARVEST ALLOCATIONS.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0">
                <input
                  type="email"
                  required
                  placeholder="ENTER CLIENT EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#202020] border border-[#494949] text-[#ffffff] font-lambo text-[13px] px-4 py-3.5 w-full focus:outline-none focus:border-[#ffc000] placeholder:text-[#7d7d7d]"
                />
                <button
                  type="submit"
                  className="bg-[#ffc000] text-[#000000] font-lambo text-[13px] px-6 py-3.5 hover:bg-[#917300] transition-colors border-none cursor-pointer whitespace-nowrap"
                  style={{ letterSpacing: '0.0230em' }}
                >
                  JOIN
                </button>
              </form>
            )}
            <p className="text-[11px] text-[#7d7d7d] font-sans">
              Strictly limited invitations to reserve annual flacon vintages. Never shared.
            </p>
          </div>
        </div>

        {/* Middle Zone: Directory Columns (Vertical Stack on mobile <768px, 4-Cols on Desktop) */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-10 md:gap-8 lg:gap-10 text-[13px]">
          {/* Column 1: Collezioni */}
          <div className="space-y-4">
            <h3 className="font-lambo text-[13px] md:text-[14px] text-[#ffffff] tracking-[0.023em] border-b border-[#313131] pb-2 uppercase">
              COLLEZIONI
            </h3>
            <ul className="space-y-3 md:space-y-2.5 list-none p-0 m-0">
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('collection')}>
                  ALL MASTER FLACONS
                </GhostButton>
              </li>
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('pdp', 'giallo-corsa-extrait')}>
                  GIALLO CORSA · EXTRAIT
                </GhostButton>
              </li>
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('pdp', 'carbon-fibre-vapor')}>
                  CARBON FIBRE VAPOR
                </GhostButton>
              </li>
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('pdp', 'cuoio-di-sant-agata')}>
                  CUOIO DI SANT’AGATA
                </GhostButton>
              </li>
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('pdp', 'aero-blanc-pur')}>
                  AERO BLANC PUR
                </GhostButton>
              </li>
            </ul>
          </div>

          {/* Column 2: The Atelier */}
          <div className="space-y-4">
            <h3 className="font-lambo text-[13px] md:text-[14px] text-[#ffffff] tracking-[0.023em] border-b border-[#313131] pb-2 uppercase">
              THE ATELIER
            </h3>
            <ul className="space-y-3 md:space-y-2.5 list-none p-0 m-0">
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('atelier')}>
                  SANT’AGATA LABORATORY
                </GhostButton>
              </li>
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('atelier')}>
                  TITANIUM & OBSIDIAN FLACONS
                </GhostButton>
              </li>
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('atelier')}>
                  RAW MATERIAL PROVENANCE
                </GhostButton>
              </li>
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('profiler')}>
                  FIND YOUR SCENT PROFILE
                </GhostButton>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Care */}
          <div className="space-y-4">
            <h3 className="font-lambo text-[13px] md:text-[14px] text-[#ffffff] tracking-[0.023em] border-b border-[#313131] pb-2 uppercase">
              CLIENT CARE
            </h3>
            <ul className="space-y-3 md:space-y-2.5 list-none p-0 m-0">
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('concierge')}>
                  WHITE GLOVE DISPATCH
                </GhostButton>
              </li>
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('concierge')}>
                  COMPLIMENTARY SAMPLES
                </GhostButton>
              </li>
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('concierge')}>
                  RETURNS & AUTHENTICATION
                </GhostButton>
              </li>
              <li>
                <GhostButton theme="dark" onClick={() => onNavigate('concierge')}>
                  FLACON REFILL SERVICE
                </GhostButton>
              </li>
            </ul>
          </div>

          {/* Column 4: Atelier Address */}
          <div className="space-y-4">
            <h3 className="font-lambo text-[13px] md:text-[14px] text-[#ffffff] tracking-[0.023em] border-b border-[#313131] pb-2 uppercase">
              ATELIER ADDRESS
            </h3>
            <div className="space-y-2 text-[#7d7d7d] font-sans">
              <p className="font-lambo text-[#ffffff] text-[13px]">AUTOMOBILI PARFUMS S.P.A.</p>
              <p>Via Modena 12, 40019</p>
              <p>Sant’Agata Bolognese (BO), Italy</p>
              <p className="pt-2 text-[#ffc000] font-mono break-all text-[12px]">
                concierge@automobiliparfums.com
              </p>
              <p className="text-[11px] text-[#494949] pt-2">
                Certified Carbon Neutral Atelier Manufacturing
              </p>
            </div>
          </div>
        </div>

        {/* Lower Zone: Responsive Stacking (<768px flex-col, >=768px flex-row) */}
        <div className="pt-8 border-t border-[#313131] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] text-[#7d7d7d] font-sans">
          {/* Brand Copyright and Certification */}
          <div className="space-y-1.5">
            <p className="text-[#f5f5f5] font-lambo text-[12px] tracking-[0.023em]">
              © {new Date().getFullYear()} AUTOMOBILI PARFUMS S.P.A. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[#7d7d7d] text-[11px]">
              ENGINEERED & BOTTLED IN EMILIA-ROMAGNA, ITALY.
            </p>
          </div>

          {/* Legal and Policy Links: Stacked on mobile (<768px), inline on desktop */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-x-5 sm:gap-y-2 pt-2 md:pt-0 border-t md:border-t-0 border-[#313131]">
            <span className="hover:text-[#ffffff] cursor-pointer whitespace-nowrap transition-colors py-0.5">
              PRIVACY POLICY
            </span>
            <span aria-hidden="true" className="text-[#494949] hidden sm:inline">·</span>
            <span className="hover:text-[#ffffff] cursor-pointer whitespace-nowrap transition-colors py-0.5">
              TERMS OF SALE
            </span>
            <span aria-hidden="true" className="text-[#494949] hidden sm:inline">·</span>
            <span className="hover:text-[#ffffff] cursor-pointer whitespace-nowrap transition-colors py-0.5">
              CERTIFICATE OF AUTHENTICITY
            </span>
            <span aria-hidden="true" className="text-[#494949] hidden sm:inline">·</span>
            <span className="hover:text-[#ffffff] cursor-pointer whitespace-nowrap transition-colors py-0.5">
              COOKIE SETTINGS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
