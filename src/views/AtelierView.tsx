import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GialloButton } from '../components/ui/GialloButton';

interface AtelierViewProps {
  onNavigate: (view: string, param?: string) => void;
}

export const AtelierView: React.FC<AtelierViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#202020] text-[#ffffff] min-h-screen pt-24 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-20">
        {/* Header Block */}
        <div className="border-b border-[#313131] pb-12 space-y-4 max-w-3xl">
          <p className="font-lambo text-[12px] text-[#ffc000] tracking-[0.023em]">
            SANT’AGATA BOLOGNESE · LABORATORIO OLFATTIVO
          </p>
          <h1 className="font-lambo text-[44px] md:text-[68px] leading-[0.95] uppercase">
            MACHINED PERFUMERY. RAW SENSUAL FORCE.
          </h1>
          <p className="font-sans text-[15px] text-[#7d7d7d] leading-relaxed">
            Where automotive wind-tunnel dynamics, computational material chemistry, and four generations of Italian artisanal extraction converge.
          </p>
        </div>

        {/* Pillar 1: The Monolithic Flacon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-lambo text-[12px] text-[#ffc000]">01 · THE VESSEL ARCHITECTURE</span>
            <h2 className="font-lambo text-[36px] md:text-[48px] uppercase leading-tight">
              580 GRAMS OF SMOKED OBSIDIAN CRYSTAL
            </h2>
            <p className="font-sans text-[14px] text-[#7d7d7d] leading-relaxed">
              Standard commercial fragrance bottles use lightweight, blown soda-lime glass with curved edges. Automobili Parfums flacons are forged from ultra-dense optical crystal with zero rounded fillets — 90° precision bevels cut using diamond tooling.
            </p>
            <div className="p-6 bg-[#181818] border border-[#313131] space-y-2 text-[13px] font-mono text-[#f5f5f5]">
              <div className="flex justify-between border-b border-[#313131] pb-1.5">
                <span className="text-[#7d7d7d]">WALL THICKNESS</span>
                <span>14.5 MM SOLID BASE</span>
              </div>
              <div className="flex justify-between border-b border-[#313131] pb-1.5">
                <span className="text-[#7d7d7d]">UV BLOCK EFFICIENCY</span>
                <span>99.4% SOLAR ABSORPTION</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7d7d7d]">TOLERANCE SPEC</span>
                <span>±0.08 MM PERIMETER</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-[4/3] bg-[#181818] border border-[#313131] p-8 flex flex-col justify-center">
            <p className="font-lambo text-[24px] text-[#ffffff] mb-4">
              "WE REFUSED ALL ROUNDED CONTOURS. A FLACON SHOULD REST IN THE PALM LIKE A MILLED ENGINE PISTON."
            </p>
            <p className="font-lambo text-[12px] text-[#ffc000]">
              — CHIEF ATELIER INDUSTRIAL DESIGNER
            </p>
          </div>
        </div>

        {/* Pillar 2: Raw Ingredients & Extraction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-[#313131] pt-16">
          <div className="lg:col-span-6 aspect-[4/3] bg-[#181818] border border-[#313131] p-8 flex flex-col justify-center order-2 lg:order-1">
            <p className="font-lambo text-[24px] text-[#ffffff] mb-4">
              "WHEN YOU SMELL SADDLE LEATHER AT 300 KM/H, IT IS NOT A NOSTALGIC SMELL. IT IS OXYGENATED TENSION."
            </p>
            <p className="font-lambo text-[12px] text-[#ffc000]">
              — AURELIEN GUICHARD, MASTER NOSE
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="font-lambo text-[12px] text-[#ffc000]">02 · RAW BOTANICAL PURITY</span>
            <h2 className="font-lambo text-[36px] md:text-[48px] uppercase leading-tight">
              SUPERCRITICAL CO2 & HYDRAULIC EXTRACTION
            </h2>
            <p className="font-sans text-[14px] text-[#7d7d7d] leading-relaxed">
              We employ sub-zero cryogenic fluid extraction for delicate top notes such as Himalayan Cashmere Saffron and Reggio Calabria bergamot, preserving fragile volatile terpenes that conventional steam distillation burns away.
            </p>
            <ul className="space-y-3 font-lambo text-[13px] text-[#f5f5f5] list-none p-0">
              <li className="flex items-center gap-3 border-l-2 border-[#ffc000] pl-4">
                ZERO SYNTHETIC PHTHALATES OR DYES
              </li>
              <li className="flex items-center gap-3 border-l-2 border-[#ffc000] pl-4">
                AGED IN POLISHED STEEL TANKS FOR 90 DAYS PRIOR TO BOTTLING
              </li>
              <li className="flex items-center gap-3 border-l-2 border-[#ffc000] pl-4">
                CERTIFIED CARBON-NEUTRAL EMILIA-ROMAGNA SUPPLY CHAIN
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-12 bg-[#181818] border border-[#ffc000] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-lambo text-[28px] md:text-[36px] uppercase">
              EXPERIENCE THE SANT’AGATA HARVEST
            </h3>
            <p className="text-[13px] text-[#7d7d7d] font-sans">
              Order any flacon with complimentary temperature-controlled white glove delivery.
            </p>
          </div>
          <GialloButton onClick={() => onNavigate('collection')}>
            BROWSE COLLEZIONE OLFATTIVA
          </GialloButton>
        </div>
      </div>
    </div>
  );
};
