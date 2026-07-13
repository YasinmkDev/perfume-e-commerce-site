import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../../lib/cartStore';
import { formatMoney } from '../../lib/formatters';
import { GialloButton } from '../ui/GialloButton';

interface CartDrawerProps {
  onCheckout: () => void;
  onNavigateProduct: (slug: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  onCheckout,
  onNavigateProduct,
}) => {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    subtotalMinor,
    totalCount,
  } = useCart();

  const [sampleChoice, setSampleChoice] = useState<string>('giallo-sample');

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Scrim Overlay */}
      <div
        onClick={closeDrawer}
        className="absolute inset-0 bg-[#000000]/75 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Slide-Over Drawer Container (0px radius hard edges) */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#202020] text-[#ffffff] border-l border-[#313131] flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#313131] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="font-lambo text-[22px] tracking-[0.023em] text-[#ffffff] uppercase">
                YOUR ATELIER BAG
              </h2>
              <span className="font-mono text-[11px] text-[#ffc000] bg-[#181818] border border-[#ffc000]/30 px-2 py-0.5">
                {totalCount} {totalCount === 1 ? 'FLACON' : 'FLACONS'}
              </span>
            </div>
            <button
              onClick={closeDrawer}
              className="text-[#7d7d7d] hover:text-[#ffffff] transition-colors p-1 bg-transparent border-none cursor-pointer"
              aria-label="Close Bag Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <p className="font-lambo text-[18px] text-[#7d7d7d] tracking-[0.023em]">
                  YOUR ATELIER BAG IS CURRENTLY EMPTY
                </p>
                <p className="text-[13px] text-[#494949] max-w-xs mx-auto font-sans">
                  Explore our limited Sant’Agata olfactory harvest extractions.
                </p>
                <button
                  onClick={closeDrawer}
                  className="font-lambo text-[13px] text-[#ffc000] hover:underline bg-transparent border-none cursor-pointer pt-2"
                >
                  RETURN TO MASTER FLACONS →
                </button>
              </div>
            ) : (
              <>
                {/* Line Items List */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.lineId}
                      className="p-4 bg-[#181818] border border-[#313131] flex gap-4 items-center"
                    >
                      {/* Product Thumbnail */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 object-cover bg-[#000000] border border-[#313131] shrink-0 cursor-pointer"
                        onClick={() => {
                          closeDrawer();
                          onNavigateProduct(item.productId);
                        }}
                      />

                      {/* Details */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <p className="text-[10px] font-lambo text-[#ffc000] tracking-[0.023em]">
                          {item.concentration}
                        </p>
                        <h4
                          onClick={() => {
                            closeDrawer();
                            onNavigateProduct(item.productId);
                          }}
                          className="font-lambo text-[16px] text-[#ffffff] hover:text-[#ffc000] cursor-pointer truncate uppercase"
                        >
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-[#7d7d7d] font-mono">
                          {item.volume}
                        </p>

                        <div className="pt-2 flex items-center justify-between">
                          {/* Stepper */}
                          <div className="flex items-center border border-[#494949]">
                            <button
                              onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-[#7d7d7d] hover:text-[#ffffff] hover:bg-[#313131] bg-transparent border-none cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-mono text-[12px] text-[#ffffff]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-[#7d7d7d] hover:text-[#ffffff] hover:bg-[#313131] bg-transparent border-none cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Line Total */}
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[14px] text-[#ffffff] font-medium">
                              {formatMoney(item.unitPriceMinor * item.quantity)}
                            </span>
                            <button
                              onClick={() => removeItem(item.lineId)}
                              className="text-[#7d7d7d] hover:text-[#ffc000] bg-transparent border-none cursor-pointer p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Complimentary Sant'Agata 2ml Vials */}
                <div className="p-4 bg-[#181818] border border-[#ffc000]/30 space-y-2">
                  <div className="flex items-center gap-2 text-[#ffc000] font-lambo text-[12px]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>COMPLIMENTARY ATELIER SAMPLES</span>
                  </div>
                  <p className="text-[11px] text-[#7d7d7d] font-sans">
                    Every flacon order includes 2 bespoke 2ml travel vials for testing before opening the seal.
                  </p>
                  <select
                    value={sampleChoice}
                    onChange={(e) => setSampleChoice(e.target.value)}
                    className="w-full bg-[#202020] border border-[#494949] text-[#ffffff] font-lambo text-[12px] p-2 focus:outline-none focus:border-[#ffc000]"
                  >
                    <option value="giallo-sample">VIAL 1: GIALLO CORSA & VIAL 2: CARBON VAPOR</option>
                    <option value="cuoio-sample">VIAL 1: CUOIO DI SANT'AGATA & VIAL 2: AERO BLANC</option>
                    <option value="monza-sample">VIAL 1: NOTTE DI MONZA & VIAL 2: VENTO DI SCANDIANO</option>
                  </select>
                </div>

                {/* Trust Signal */}
                <div className="flex items-start gap-2.5 text-[11px] text-[#7d7d7d] font-sans pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#ffc000] shrink-0 mt-0.5" />
                  <span>
                    Armored signature dispatch with temperature-regulated packaging. 30-day sealed returns guarantee.
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Footer Summary & Primary Giallo Action Button */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#313131] bg-[#181818] space-y-4">
              <div className="space-y-1.5 text-[13px]">
                <div className="flex justify-between text-[#7d7d7d] font-lambo">
                  <span>ATELIER SUBTOTAL</span>
                  <span className="font-mono text-[#ffffff]">{formatMoney(subtotalMinor)}</span>
                </div>
                <div className="flex justify-between text-[#7d7d7d] font-lambo">
                  <span>TEMPERATURE-CONTROLLED SHIPPING</span>
                  <span className="font-mono text-[#ffc000]">COMPLIMENTARY</span>
                </div>
                <div className="pt-2 border-t border-[#313131] flex justify-between font-lambo text-[18px] text-[#ffffff]">
                  <span>TOTAL ESTIMATE</span>
                  <span className="font-mono text-[#ffc000] text-[20px]">
                    {formatMoney(subtotalMinor)}
                  </span>
                </div>
              </div>

              {/* The Dominant Giallo Button */}
              <GialloButton
                onClick={() => {
                  closeDrawer();
                  onCheckout();
                }}
                className="w-full justify-center"
              >
                PROCEED TO ATELIER CHECKOUT
              </GialloButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
