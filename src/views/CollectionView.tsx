import React, { useState } from 'react';
import { FRAGRANCES } from '../data/fragrances';
import { OlfactoryFamily, FragranceProduct } from '../types/commerce';
import { ProductCard } from '../components/product/ProductCard';
import { OutlinedButton } from '../components/ui/OutlinedButton';

interface CollectionViewProps {
  onNavigateProduct: (slug: string) => void;
}

export const CollectionView: React.FC<CollectionViewProps> = ({
  onNavigateProduct,
}) => {
  const [selectedFamily, setSelectedFamily] = useState<string>('ALL');
  const [selectedConcentration, setSelectedConcentration] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'intensity'>('featured');

  // Filter logic
  let filtered = FRAGRANCES.filter((f) => {
    const matchesFamily =
      selectedFamily === 'ALL' || f.olfactoryFamily === selectedFamily;
    const matchesConcentration =
      selectedConcentration === 'ALL' || f.concentration === selectedConcentration;
    return matchesFamily && matchesConcentration;
  });

  // Sort logic
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return a.variants[0].priceMinor - b.variants[0].priceMinor;
    }
    if (sortBy === 'price-desc') {
      return b.variants[0].priceMinor - a.variants[0].priceMinor;
    }
    if (sortBy === 'intensity') {
      return b.intensity - a.intensity;
    }
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const families = [
    'ALL',
    'LEATHER & SMOKE',
    'CITRUS & AERODYNAMIC',
    'WOODY AMBER',
    'FLORAL DARK',
  ];

  return (
    <div className="bg-[#ffffff] text-[#202020] min-h-screen pt-24 pb-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-12">
        {/* Editorial Collection Header */}
        <div className="border-b border-[#969696]/40 pb-8 space-y-4">
          <p className="font-lambo text-[12px] text-[#7d7d7d] tracking-[0.023em]">
            COLLEZIONI SANT’AGATA BOLOGNESE
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-lambo text-[40px] md:text-[64px] leading-[0.95] tracking-[0.023em] uppercase">
              COLLEZIONE OLFATTIVA
            </h1>
            <p className="font-lambo text-[13px] text-[#7d7d7d] tracking-[0.023em] max-w-md">
              SIX MASTER FLACONS ARCHITECTED FROM RARE BOTANICAL RESINS, NATURAL METALS, AND TUSCAN SADDLERY HIDES.
            </p>
          </div>
        </div>

        {/* Filter & Sort Bar (Interactive Segmented Buttons with 0px Hard Edges) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#969696]/30">
          {/* Family Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {families.map((family) => (
              <OutlinedButton
                key={family}
                size="sm"
                theme="light"
                active={selectedFamily === family}
                onClick={() => setSelectedFamily(family)}
              >
                {family}
              </OutlinedButton>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-4">
            <span className="font-lambo text-[12px] text-[#7d7d7d]">SORT BY:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#f5f5f5] border border-[#969696] font-lambo text-[12px] text-[#202020] px-3 py-2 focus:outline-none focus:border-[#202020]"
            >
              <option value="featured">CURATED SHOWROOM ORDER</option>
              <option value="intensity">OLFACTORY INTENSITY (HIGH TO LOW)</option>
              <option value="price-asc">PRICE (LOW TO HIGH)</option>
              <option value="price-desc">PRICE (HIGH TO LOW)</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onNavigateProduct}
                surfaceTheme="marble"
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center space-y-4">
            <h3 className="font-lambo text-[24px]">NO FLACONS FOUND IN THIS ACCORD</h3>
            <p className="text-[13px] text-[#7d7d7d] font-sans">
              Adjust your filters to see the full collection.
            </p>
            <button
              onClick={() => {
                setSelectedFamily('ALL');
                setSelectedConcentration('ALL');
              }}
              className="font-lambo text-[13px] text-[#202020] underline cursor-pointer bg-transparent border-none"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}

        {/* Bottom Editorial Banner */}
        <div className="p-8 md:p-12 bg-[#202020] text-[#ffffff] flex flex-col md:flex-row items-center justify-between gap-8 border border-[#313131]">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-lambo text-[11px] text-[#ffc000]">HAUTE PARFUMERIE GUARANTEE</span>
            <h3 className="font-lambo text-[24px] md:text-[32px] uppercase">
              COMPLIMENTARY 2ML VIALS INCLUDED WITH EVERY FULL FLACON
            </h3>
            <p className="text-[13px] text-[#7d7d7d] font-sans">
              Test on your wrist first. If the scent does not speak to your chemistry, return the unopened full flacon with full refund.
            </p>
          </div>
          <span className="font-mono text-[13px] text-[#ffc000] border border-[#ffc000] px-4 py-2 shrink-0">
            30-DAY SEALED RETURNS
          </span>
        </div>
      </div>
    </div>
  );
};
