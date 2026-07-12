import React, { useState } from 'react';
import { FragranceProduct } from '../../types/commerce';
import { formatMoney } from '../../lib/formatters';
import { ArrowRight, Plus } from 'lucide-react';
import { useCart } from '../../lib/cartStore';

interface ProductCardProps {
  product: FragranceProduct;
  onSelect: (slug: string) => void;
  surfaceTheme?: 'light' | 'marble' | 'dark';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  surfaceTheme = 'light',
}) => {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const defaultVariant = product.variants[1] || product.variants[0]; // Default to 100ml
  const imageSrc = hovered && product.images[1] ? product.images[1] : product.images[0];

  const isDark = surfaceTheme === 'dark';
  const bgColor = isDark
    ? 'bg-[#202020]'
    : surfaceTheme === 'marble'
    ? 'bg-[#f5f5f5]'
    : 'bg-[#ffffff]';

  const textColor = isDark ? 'text-[#ffffff]' : 'text-[#202020]';
  const mutedColor = isDark ? 'text-[#7d7d7d]' : 'text-[#7d7d7d]';
  const borderColor = isDark ? 'border-[#313131]' : 'border-[#969696]/30';

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      productId: product.id,
      variantId: defaultVariant.id,
      name: product.name,
      concentration: product.concentration,
      volume: defaultVariant.volume,
      unitPriceMinor: defaultVariant.priceMinor,
      image: product.images[0],
    });
  };

  return (
    <article
      onClick={() => onSelect(product.slug)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        ${bgColor} border ${borderColor} cursor-pointer group flex flex-col justify-between
        transition-all duration-200 select-none
      `}
    >
      {/* Product Image Slot — Balanced 4:5 Proportion with Max Height */}
      <div className="relative aspect-[4/5] max-h-[380px] w-full overflow-hidden bg-[#161616] flex items-center justify-center">
        <img
          src={imageSrc}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Top Kicker Label */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2 text-[10px] font-lambo tracking-[0.023em] text-[#ffffff] bg-[#000000]/85 px-2.5 py-1 border border-[#313131]">
          <span>{product.collection}</span>
          <span>·</span>
          <span>{product.releaseYear}</span>
        </div>

        {/* Quick Add Hover Drawer Bar */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#000000]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex items-center justify-between">
          <span className="font-lambo text-[11px] text-[#ffffff]">
            {defaultVariant.volume}
          </span>
          <button
            onClick={handleQuickAdd}
            className="inline-flex items-center gap-1.5 bg-[#ffc000] text-[#000000] hover:bg-[#ffffff] font-lambo text-[11px] px-3 py-1.5 border-none cursor-pointer uppercase transition-colors"
          >
            <Plus className="w-3 h-3" />
            <span>ADD TO BAG</span>
          </button>
        </div>
      </div>

      {/* Product Metadata & Price — 24px Padding */}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between text-[11px] font-lambo tracking-[0.023em] text-[#7d7d7d]">
          <span>{product.concentration}</span>
          <span className="text-[#ffc000]">INTENSITY {product.intensity}/5</span>
        </div>

        <div>
          <h3 className={`font-lambo text-[20px] md:text-[22px] leading-tight uppercase ${textColor} group-hover:text-[#ffc000] transition-colors`}>
            {product.name}
          </h3>
          <p className="text-[12px] text-[#7d7d7d] line-clamp-1 mt-0.5 font-sans">
            {product.tagline}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-[#494949]/20 flex items-center justify-between">
          <div className="font-mono text-[16px] tabular-nums font-semibold tracking-tight text-[#ffc000]">
            {formatMoney(defaultVariant.priceMinor)}
          </div>

          <div className={`inline-flex items-center gap-2 font-lambo text-[12px] tracking-[0.023em] ${mutedColor} group-hover:text-[#ffc000] transition-colors`}>
            <span>DETAILS</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </article>
  );
};
