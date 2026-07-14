import React from 'react';
import { HERO_CAMPAIGN, FRAGRANCES } from '../data/fragrances';
import { GialloButton } from '../components/ui/GialloButton';
import { GhostButton } from '../components/ui/GhostButton';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductCard } from '../components/product/ProductCard';
import { ArrowRight, ShieldCheck, Flame, Compass } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string, param?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const featuredFragrances = FRAGRANCES.slice(0, 3);
  const secondaryFragrances = FRAGRANCES.slice(3, 6);

  return (
    <div className="w-full">
      {/* 1. CINEMATIC HERO STAGE (Full-Bleed Dark Canvas #202020 / #000000) */}
      <section className="relative min-h-[92vh] flex items-end bg-[#202020] text-[#ffffff] overflow-hidden pt-20">
        {/* Full-Bleed Photographic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_CAMPAIGN.image}
            alt="Automobili Parfums Hero Spotlight"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
          />
          {/* Subtle Directional Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#202020]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-[#202020]/60 to-transparent" />
        </div>

        {/* Content Column (Max 55% Viewport Width Left-Aligned) */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 py-16 md:py-24 space-y-6">
          <div className="space-y-3 max-w-2xl">
            <p className="font-lambo text-[12px] md:text-[14px] text-[#ffc000] tracking-[0.023em] uppercase">
              {HERO_CAMPAIGN.eyebrow}
            </p>

            <h1
              className="font-lambo text-[48px] sm:text-[70px] md:text-[90px] lg:text-[110px] leading-[0.92] tracking-[0.023em] text-[#ffffff] uppercase"
              style={{ letterSpacing: '0.0230em' }}
            >
              SHOWROOM BLACK.
              <br />
              <span className="text-[#ffc000]">ONE YELLOW SPARK.</span>
            </h1>

            <p className="font-lambo text-[14px] md:text-[17px] text-[#f5f5f5] max-w-xl leading-relaxed tracking-[0.023em] uppercase pt-2">
              {HERO_CAMPAIGN.subheading}
            </p>
          </div>

          {/* Primary Giallo Action Button (The single yellow hit of the hero) */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <GialloButton
              onClick={() => onNavigate('pdp', HERO_CAMPAIGN.featuredProductId)}
              className="text-[15px] md:text-[17px]"
            >
              DISCOVER GIALLO CORSA EXTRAIT
            </GialloButton>

            <GhostButton
              theme="dark"
              onClick={() => onNavigate('collection')}
              className="text-[14px] md:text-[16px]"
            >
              EXPLORE ALL 6 FLACONS
            </GhostButton>
          </div>
        </div>

        {/* Carousel Navigation Pips (Signature Lamborghini Hero Feature) */}
        <div className="absolute bottom-8 right-8 z-10 hidden sm:flex items-center gap-6 text-[#ffffff]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-0.5 bg-[#ffc000]" />
            <div className="w-10 h-0.5 bg-[#7d7d7d]" />
          </div>
          <span className="font-mono text-[11px] text-[#7d7d7d]">EDIZIONE 2026</span>
        </div>
      </section>

      {/* 2. LIGHT EDITORIAL BAND: THE 3-COLUMN FEATURED FLACON GRID (#ffffff) */}
      <section className="bg-[#ffffff] text-[#202020] py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-12">
          {/* Section Opener Row */}
          <SectionHeading
            title="COLLEZIONE SPECIALE"
            eyebrow="HIGH-OCTANE OLFACTORY MONOLITHS"
            actionText="VIEW COMPLETE CATALOG"
            onActionClick={() => onNavigate('collection')}
            theme="light"
          />

          {/* 3-Column Story / Product Grid with 24px Gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFragrances.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(slug) => onNavigate('pdp', slug)}
                surfaceTheme="light"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. DARK PRODUCT SHOWCASE STAGE (#202020) */}
      <section className="bg-[#202020] text-[#ffffff] py-20 md:py-28 border-t border-[#313131]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-16">
          <SectionHeading
            title="THE ANATOMY OF GIALLO CORSA"
            eyebrow="HAUTE EXTRAIT SPECIFICATIONS"
            actionText="READ MASTER PERFUMER NOTES"
            onActionClick={() => onNavigate('pdp', 'giallo-corsa-extrait')}
            theme="dark"
          />

          {/* Asymmetric Technical Grid (Flacon on left, Technical Pyramid on right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] max-h-[440px] max-w-[420px] mx-auto w-full bg-[#161616] border border-[#313131] overflow-hidden">
              <img
                src={FRAGRANCES[0].images[0]}
                alt="Giallo Corsa Architecture"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 bg-[#000000]/90 px-4 py-2 border border-[#494949]">
                <p className="font-lambo text-[10px] text-[#ffc000]">FLACON PROVENANCE</p>
                <p className="font-lambo text-[14px] text-[#ffffff]">GRADE-5 MACHINED TITANIUM</p>
              </div>
            </div>

            {/* Olfactory Spec Breakdown */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="font-lambo text-[12px] text-[#ffc000] tracking-[0.023em]">
                  32% EXTRAIT CONCENTRATION
                </span>
                <h3 className="font-lambo text-[32px] md:text-[44px] leading-tight uppercase text-[#ffffff]">
                  AN EXPLOSION OF RAW SAFFRON AND TUSCAN SADDLE LEATHER.
                </h3>
                <p className="text-[14px] text-[#7d7d7d] font-sans leading-relaxed">
                  Conceived in the same wind-tunnel workshops where carbon aerodynamics are perfected.
                  Every drop balances hot friction with cold metallic amber.
                </p>
              </div>

              {/* 3-Tier Olfactory Architecture Accordion / Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#313131]">
                <div className="p-5 bg-[#181818] border border-[#313131] space-y-2">
                  <span className="font-lambo text-[11px] text-[#7d7d7d]">01 · TOP ACCORD</span>
                  <h4 className="font-lambo text-[18px] text-[#ffffff]">KASHMIR SAFFRON</h4>
                  <p className="text-[12px] text-[#7d7d7d] font-sans">
                    Hand-harvested red stigmas with Italian Bergamot & Pink Peppercorn.
                  </p>
                </div>

                <div className="p-5 bg-[#181818] border border-[#313131] space-y-2">
                  <span className="font-lambo text-[11px] text-[#ffc000]">02 · HEART ACCORD</span>
                  <h4 className="font-lambo text-[18px] text-[#ffffff]">TUSCAN LEATHER</h4>
                  <p className="text-[12px] text-[#7d7d7d] font-sans">
                    Santa Croce full-grain hide, Apennine Black Cypress & Smoked Styrax.
                  </p>
                </div>

                <div className="p-5 bg-[#181818] border border-[#313131] space-y-2">
                  <span className="font-lambo text-[11px] text-[#7d7d7d]">03 · BASE ACCORD</span>
                  <h4 className="font-lambo text-[18px] text-[#ffffff]">BURNT BIRCH TAR</h4>
                  <p className="text-[12px] text-[#7d7d7d] font-sans">
                    Wood pyrolysis, Java vetiver root & metallic skin amber.
                  </p>
                </div>
              </div>

              {/* Direct Route Action */}
              <div className="pt-2">
                <GialloButton
                  onClick={() => onNavigate('pdp', 'giallo-corsa-extrait')}
                >
                  RESERVE GIALLO CORSA FLACON ($395)
                </GialloButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MARBLE GRAY EDITORIAL BAND (#f5f5f5) */}
      <section className="bg-[#f5f5f5] text-[#202020] py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-12">
          <SectionHeading
            title="COLLEZIONE METALLI & CORSA"
            eyebrow="AERODYNAMIC & WOOD ACCORDS"
            actionText="EXPLORE ALL FLACONS"
            onActionClick={() => onNavigate('collection')}
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryFragrances.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(slug) => onNavigate('pdp', slug)}
                surfaceTheme="marble"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CRAFTSMANSHIP & ATELIER PROVENANCE (Full-Bleed Editorial Band) */}
      <section className="bg-[#181818] text-[#ffffff] py-20 md:py-28 border-t border-[#313131]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-16">
          <div className="max-w-2xl space-y-3">
            <p className="font-lambo text-[12px] text-[#ffc000] tracking-[0.023em]">
              SANT’AGATA CRAFTSMANSHIP CODE
            </p>
            <h2 className="font-lambo text-[36px] md:text-[54px] leading-tight uppercase">
              ZERO PLASTIC. ZERO ROUNDED COMPROMISE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#202020] border border-[#313131] space-y-4">
              <Flame className="w-6 h-6 text-[#ffc000]" />
              <h3 className="font-lambo text-[24px] uppercase text-[#ffffff]">
                32% EXTRAIT PURITY
              </h3>
              <p className="text-[13px] text-[#7d7d7d] font-sans leading-relaxed">
                Standard eau de parfum lingers for 4 to 6 hours. Our extraits use ultra-concentrated botanical absolutes delivering 18+ hours of relentless, linear projection.
              </p>
            </div>

            <div className="p-8 bg-[#202020] border border-[#313131] space-y-4">
              <ShieldCheck className="w-6 h-6 text-[#ffc000]" />
              <h3 className="font-lambo text-[24px] uppercase text-[#ffffff]">
                580G OBSIDIAN GLASS
              </h3>
              <p className="text-[13px] text-[#7d7d7d] font-sans leading-relaxed">
                Forged from high-density flint glass and coated in light-impervious smoked obsidian to preserve the volatile saffron and leather molecules from UV degradation.
              </p>
            </div>

            <div className="p-8 bg-[#202020] border border-[#313131] space-y-4">
              <Compass className="w-6 h-6 text-[#ffc000]" />
              <h3 className="font-lambo text-[24px] uppercase text-[#ffffff]">
                INDIVIDUAL SERIAL NUMBERS
              </h3>
              <p className="text-[13px] text-[#7d7d7d] font-sans leading-relaxed">
                Each flacon is laser-engraved with its unique batch year and serial certification at our Emilia-Romagna facility, accompanied by a registered certificate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE PROFILER CALLOUT BAND */}
      <section className="bg-[#202020] text-[#ffffff] py-16 border-t border-[#313131]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-lambo text-[12px] text-[#ffc000] tracking-[0.023em]">
              OLFACTORY MATCHING ENGINE
            </span>
            <h3 className="font-lambo text-[28px] md:text-[36px] uppercase">
              NOT SURE WHICH SCENT SIGNATURE DEFINES YOU?
            </h3>
            <p className="text-[13px] text-[#7d7d7d] font-sans">
              Answer 3 brief questions on driving climate, note preference, and intensity to reveal your match.
            </p>
          </div>

          <button
            onClick={() => onNavigate('profiler')}
            className="font-lambo text-[14px] bg-[#ffffff] text-[#000000] hover:bg-[#ffc000] px-8 py-4 uppercase border-none cursor-pointer tracking-[0.023em] transition-colors whitespace-nowrap"
          >
            START SCENT PROFILER →
          </button>
        </div>
      </section>
    </div>
  );
};
