import React, { useState } from 'react';
import { FRAGRANCES } from '../data/fragrances';
import { FragranceProduct, ProductVariant } from '../types/commerce';
import { formatMoney } from '../lib/formatters';
import { useCart } from '../lib/cartStore';
import { GialloButton } from '../components/ui/GialloButton';
import { GhostButton } from '../components/ui/GhostButton';
import { OutlinedButton } from '../components/ui/OutlinedButton';
import { ProductCard } from '../components/product/ProductCard';
import { Plus, Minus, ShieldCheck, Droplet, ArrowLeft } from 'lucide-react';

interface ProductDetailViewProps {
  slug: string;
  onNavigate: (view: string, param?: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  slug,
  onNavigate,
}) => {
  const product = FRAGRANCES.find((f) => f.slug === slug) || FRAGRANCES[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[1] || product.variants[0]
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'pyramid' | 'craft' | 'perfumer'>('pyramid');

  const relatedFragrances = FRAGRANCES.filter((f) => f.id !== product.id).slice(0, 3);

  const handleAddToBag = () => {
    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      name: product.name,
      concentration: product.concentration,
      volume: selectedVariant.volume,
      unitPriceMinor: selectedVariant.priceMinor,
      image: product.images[0],
      quantity,
    });
  };

  return (
    <div className="bg-[#ffffff] text-[#202020] min-h-screen pt-20">
      {/* Breadcrumb / Back Button */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 border-b border-[#969696]/20">
        <button
          onClick={() => onNavigate('collection')}
          className="inline-flex items-center gap-2 font-lambo text-[12px] text-[#7d7d7d] hover:text-[#202020] bg-transparent border-none cursor-pointer tracking-[0.023em] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO COLLEZIONE OLFATTIVA</span>
        </button>
      </div>

      {/* Main PDP Grid: Balanced Gallery Left, Sticky Purchase Module Right */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* LEFT: Refined, Proportioned Flacon Gallery (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Primary Viewport Image — Constrained Height & Centered for Luxury Display */}
            <div className="relative w-full max-w-[480px] h-[360px] sm:h-[420px] md:h-[480px] bg-[#161616] overflow-hidden border border-[#313131] flex items-center justify-center group">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={`${product.name} view ${selectedImageIndex + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain p-4 md:p-6 transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#000000]/85 text-[#ffffff] font-lambo text-[10px] md:text-[11px] px-2.5 py-1 tracking-[0.023em] border border-[#313131]">
                {product.collection} · SANT’AGATA ATELIER
              </div>
            </div>

            {/* Compact Thumbnail Selector Strip */}
            {product.images.length > 1 && (
              <div className="flex items-center justify-center gap-3 mt-4 w-full max-w-[480px]">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    aria-label={`View angle ${idx + 1}`}
                    className={`w-16 h-20 sm:w-20 sm:h-24 bg-[#161616] border overflow-hidden p-1 cursor-pointer transition-all flex items-center justify-center ${
                      selectedImageIndex === idx
                        ? 'border-[#ffc000] ring-1 ring-[#ffc000]'
                        : 'border-[#313131] hover:border-[#7d7d7d] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quiet Provenance Callout beneath gallery */}
            <div className="mt-4 pt-3 border-t border-[#969696]/20 w-full max-w-[480px] flex items-center justify-between text-[11px] font-mono text-[#7d7d7d]">
              <span>GRADE-5 TITANIUM CAP</span>
              <span>·</span>
              <span>580G OBSIDIAN GLASS</span>
              <span>·</span>
              <span>32% EXTRAIT</span>
            </div>
          </div>

          {/* RIGHT: Contiguous Purchase Module (6 Cols Sticky) */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-6">
            {/* Header Specs */}
            <div className="space-y-2 border-b border-[#969696]/30 pb-6">
              <div className="flex items-center justify-between text-[11px] font-lambo text-[#7d7d7d] tracking-[0.023em]">
                <span>{product.concentration}</span>
                <span className="text-[#917300]">INTENSITY {product.intensity}/5</span>
              </div>

              <h1 className="font-lambo text-[36px] md:text-[46px] leading-[0.98] uppercase text-[#202020]">
                {product.name}
              </h1>

              <p className="font-lambo text-[13px] text-[#7d7d7d] tracking-[0.023em]">
                {product.tagline}
              </p>

              <div className="pt-3 flex items-baseline gap-3">
                <span className="font-mono text-[28px] tabular-nums font-semibold text-[#202020]">
                  {formatMoney(selectedVariant.priceMinor)}
                </span>
                <span className="text-[12px] text-[#7d7d7d] font-sans">
                  INCL. TAXES & ARMORED SHIPPING
                </span>
              </div>
            </div>

            {/* Volume Variant Selector */}
            <div className="space-y-3">
              <label className="font-lambo text-[12px] text-[#7d7d7d] tracking-[0.023em]">
                SELECT FLACON VOLUME
              </label>
              <div className="grid grid-cols-1 gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`
                      w-full flex items-center justify-between p-3.5 border font-lambo text-[13px] text-left cursor-pointer transition-colors
                      ${
                        selectedVariant.id === v.id
                          ? 'border-[#202020] bg-[#f5f5f5] text-[#202020]'
                          : 'border-[#969696]/30 text-[#7d7d7d] hover:border-[#202020]'
                      }
                    `}
                  >
                    <span>{v.volume}</span>
                    <span className="font-mono text-[#202020]">{formatMoney(v.priceMinor)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stock & Quantity Row */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[12px] font-sans">
                <span className="font-lambo text-[#7d7d7d]">QUANTITY</span>
                <span className="text-[#2e5a36] font-medium flex items-center gap-1.5 font-lambo">
                  <span className="w-2 h-2 rounded-full bg-[#2e5a36] inline-block" />
                  IN STOCK ({selectedVariant.inventoryQuantity} FLACONS REMAINING)
                </span>
              </div>

              <div className="flex gap-4">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#202020] h-[52px]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-full flex items-center justify-center text-[#202020] hover:bg-[#f5f5f5] bg-transparent border-none cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-mono text-[15px] font-semibold text-[#202020]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(selectedVariant.inventoryQuantity, quantity + 1))}
                    className="w-12 h-full flex items-center justify-center text-[#202020] hover:bg-[#f5f5f5] bg-transparent border-none cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* The Dominant Giallo Button */}
                <GialloButton
                  onClick={handleAddToBag}
                  className="flex-1 justify-center h-[52px]"
                >
                  ADD TO ATELIER BAG
                </GialloButton>
              </div>
            </div>

            {/* Immediate Atelier Privileges Guarantee */}
            <div className="p-4 bg-[#f5f5f5] border border-[#969696]/30 space-y-2.5 text-[12px] font-sans">
              <div className="flex items-center gap-2 font-lambo text-[#202020]">
                <ShieldCheck className="w-4 h-4 text-[#917300]" />
                <span>WHITE GLOVE ATELIER GUARANTEE</span>
              </div>
              <ul className="space-y-1 text-[#7d7d7d] list-disc pl-4 m-0">
                <li>Complimentary 2ml sample vial included to test prior to breaking the seal.</li>
                <li>Shipped in climate-stabilized shockproof casing.</li>
                <li>Direct dispatch from Sant’Agata Bolognese.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Olfactory Breakdown Accordion / Tabs */}
        <div className="mt-20 pt-12 border-t border-[#969696]/30 space-y-8">
          <div className="flex items-center gap-4 border-b border-[#969696]/30 pb-4">
            <button
              onClick={() => setActiveTab('pyramid')}
              className={`font-lambo text-[15px] tracking-[0.023em] pb-3 border-b-2 bg-transparent cursor-pointer transition-colors ${
                activeTab === 'pyramid'
                  ? 'border-[#ffc000] text-[#202020] font-semibold'
                  : 'border-transparent text-[#7d7d7d] hover:text-[#202020]'
              }`}
            >
              01 · THE OLFACTORY PYRAMID
            </button>
            <button
              onClick={() => setActiveTab('craft')}
              className={`font-lambo text-[15px] tracking-[0.023em] pb-3 border-b-2 bg-transparent cursor-pointer transition-colors ${
                activeTab === 'craft'
                  ? 'border-[#ffc000] text-[#202020] font-semibold'
                  : 'border-transparent text-[#7d7d7d] hover:text-[#202020]'
              }`}
            >
              02 · FLACON ARCHITECTURE
            </button>
            <button
              onClick={() => setActiveTab('perfumer')}
              className={`font-lambo text-[15px] tracking-[0.023em] pb-3 border-b-2 bg-transparent cursor-pointer transition-colors ${
                activeTab === 'perfumer'
                  ? 'border-[#ffc000] text-[#202020] font-semibold'
                  : 'border-transparent text-[#7d7d7d] hover:text-[#202020]'
              }`}
            >
              03 · MASTER PERFUMER NOTES
            </button>
          </div>

          {/* Tab 1: Olfactory Pyramid */}
          {activeTab === 'pyramid' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#f5f5f5] border border-[#969696]/30 space-y-4">
                <span className="font-lambo text-[11px] text-[#7d7d7d]">HEAD NOTES · 0–30 MINS</span>
                <div className="space-y-3">
                  {product.pyramid.top.map((note, i) => (
                    <div key={i} className="border-b border-[#969696]/20 pb-2">
                      <p className="font-lambo text-[16px] text-[#202020]">{note.name}</p>
                      <p className="text-[12px] text-[#7d7d7d]">{note.origin} · {note.facet}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#f5f5f5] border border-[#ffc000] space-y-4">
                <span className="font-lambo text-[11px] text-[#917300]">HEART ACCORD · 30M–6 HRS</span>
                <div className="space-y-3">
                  {product.pyramid.heart.map((note, i) => (
                    <div key={i} className="border-b border-[#969696]/20 pb-2">
                      <p className="font-lambo text-[16px] text-[#202020]">{note.name}</p>
                      <p className="text-[12px] text-[#7d7d7d]">{note.origin} · {note.facet}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#f5f5f5] border border-[#969696]/30 space-y-4">
                <span className="font-lambo text-[11px] text-[#7d7d7d]">BASE SILLAGE · 6–24 HRS</span>
                <div className="space-y-3">
                  {product.pyramid.base.map((note, i) => (
                    <div key={i} className="border-b border-[#969696]/20 pb-2">
                      <p className="font-lambo text-[16px] text-[#202020]">{note.name}</p>
                      <p className="text-[12px] text-[#7d7d7d]">{note.origin} · {note.facet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Flacon Architecture */}
          {activeTab === 'craft' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-[#f5f5f5] border border-[#969696]/30 space-y-2">
                <p className="font-lambo text-[11px] text-[#7d7d7d]">FLACON MATERIAL</p>
                <p className="font-lambo text-[15px] text-[#202020]">{product.flaconSpec.glass}</p>
              </div>
              <div className="p-6 bg-[#f5f5f5] border border-[#969696]/30 space-y-2">
                <p className="font-lambo text-[11px] text-[#7d7d7d]">MACHINED CAP</p>
                <p className="font-lambo text-[15px] text-[#202020]">{product.flaconSpec.cap}</p>
              </div>
              <div className="p-6 bg-[#f5f5f5] border border-[#969696]/30 space-y-2">
                <p className="font-lambo text-[11px] text-[#7d7d7d]">TOTAL WEIGHT</p>
                <p className="font-lambo text-[15px] text-[#202020]">{product.flaconSpec.weight}</p>
              </div>
              <div className="p-6 bg-[#f5f5f5] border border-[#969696]/30 space-y-2">
                <p className="font-lambo text-[11px] text-[#7d7d7d]">ATOMIZATION SYSTEM</p>
                <p className="font-lambo text-[15px] text-[#202020]">{product.flaconSpec.atomizer}</p>
              </div>
            </div>
          )}

          {/* Tab 3: Perfumer Notes */}
          {activeTab === 'perfumer' && (
            <div className="p-8 bg-[#202020] text-[#ffffff] border border-[#313131] space-y-4">
              <p className="font-lambo text-[12px] text-[#ffc000]">NOSE: {product.masterPerfumer.toUpperCase()}</p>
              <blockquote className="font-lambo text-[22px] md:text-[28px] leading-snug">
                "{product.description}"
              </blockquote>
              <p className="text-[13px] text-[#7d7d7d] font-sans">
                Inspiration: {product.inspiration}
              </p>
            </div>
          )}
        </div>

        {/* Related Fragrances Row */}
        <div className="mt-24 space-y-8">
          <h3 className="font-lambo text-[32px] uppercase">
            COMPLEMENTARY HARVEST FLACONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedFragrances.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onSelect={(slug) => onNavigate('pdp', slug)}
                surfaceTheme="marble"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
