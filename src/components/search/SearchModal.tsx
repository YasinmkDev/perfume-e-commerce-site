import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { FRAGRANCES } from '../../data/fragrances';
import { FragranceProduct } from '../../types/commerce';
import { formatMoney } from '../../lib/formatters';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();
  const results: FragranceProduct[] = q === '' ? [] : FRAGRANCES.filter((f) => {
    const inName = f.name.toLowerCase().includes(q);
    const inFamily = f.olfactoryFamily.toLowerCase().includes(q);
    const inTagline = f.tagline.toLowerCase().includes(q);
    const inPerfumer = f.masterPerfumer.toLowerCase().includes(q);
    const inNotes = [
      ...f.pyramid.top,
      ...f.pyramid.heart,
      ...f.pyramid.base,
    ].some((n) => n.name.toLowerCase().includes(q) || n.facet?.toLowerCase().includes(q));

    return inName || inFamily || inTagline || inPerfumer || inNotes;
  });

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#202020]/95 backdrop-blur-md">
      {/* Top Search Header Bar */}
      <div className="border-b border-[#313131] h-[80px] flex items-center px-6 md:px-12 max-w-[1440px] mx-auto w-full justify-between">
        <div className="flex items-center gap-4 flex-1">
          <Search className="w-6 h-6 text-[#ffc000] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH BY NOTE (SAFFRON, LEATHER, IRIS), COLLECTION OR PERFUMER..."
            className="w-full bg-transparent border-none text-[#ffffff] font-lambo text-[18px] md:text-[24px] focus:outline-none placeholder:text-[#7d7d7d]"
            style={{ letterSpacing: '0.0230em' }}
          />
        </div>
        <button
          onClick={onClose}
          className="text-[#7d7d7d] hover:text-[#ffffff] bg-transparent border-none cursor-pointer p-2 ml-4"
          aria-label="Close search"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Results Container */}
      <div className="flex-1 overflow-y-auto px-6 md:px-12 py-12 max-w-[1440px] mx-auto w-full">
        {query.trim() === '' ? (
          <div className="space-y-8">
            <p className="font-lambo text-[12px] text-[#7d7d7d] tracking-[0.023em]">
              DISCOVER BY SIGNATURE RAW MATERIALS & OLFACTORY ACCORDS
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'SAFFRON',
                'TUSCAN LEATHER',
                'CARBON WEAVE',
                'CARDAMOM',
                'FLORENTINE IRIS',
                'CRYOGENIC ALDEHYDES',
                'BLACK TRUFFLE',
                'DAMASK ROSE',
                'ADRIATIC NEROLI',
                'WHITE OUD',
              ].map((note) => (
                <button
                  key={note}
                  onClick={() => setQuery(note)}
                  className="font-lambo text-[12px] text-[#ffffff] bg-[#181818] hover:bg-[#ffc000] hover:text-[#000000] border border-[#313131] px-4 py-2 transition-colors cursor-pointer"
                >
                  {note}
                </button>
              ))}
            </div>

            <div className="pt-8 border-t border-[#313131]">
              <p className="font-lambo text-[12px] text-[#7d7d7d] tracking-[0.023em] mb-4">
                ALL MASTER FLACONS
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FRAGRANCES.slice(0, 3).map((f) => (
                  <div
                    key={f.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(f.slug);
                    }}
                    className="p-4 bg-[#181818] border border-[#313131] hover:border-[#ffc000] cursor-pointer flex gap-4 items-center group transition-colors"
                  >
                    <img
                      src={f.images[0]}
                      alt={f.name}
                      className="w-16 h-20 object-cover bg-[#000000] shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-lambo text-[#ffc000]">{f.concentration}</span>
                      <h4 className="font-lambo text-[18px] text-[#ffffff] group-hover:text-[#ffc000]">{f.name}</h4>
                      <p className="font-mono text-[13px] text-[#7d7d7d]">{formatMoney(f.variants[1].priceMinor)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-6">
            <p className="font-lambo text-[12px] text-[#7d7d7d] tracking-[0.023em]">
              MATCHING FLACONS ({results.length})
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((f) => (
                <div
                  key={f.id}
                  onClick={() => {
                    onClose();
                    onSelectProduct(f.slug);
                  }}
                  className="p-4 bg-[#181818] border border-[#313131] hover:border-[#ffc000] cursor-pointer flex gap-4 items-center group transition-colors"
                >
                  <img
                    src={f.images[0]}
                    alt={f.name}
                    className="w-20 h-24 object-cover bg-[#000000] shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] font-lambo text-[#ffc000]">{f.olfactoryFamily}</span>
                    <h4 className="font-lambo text-[18px] text-[#ffffff] group-hover:text-[#ffc000]">{f.name}</h4>
                    <p className="text-[11px] text-[#7d7d7d] line-clamp-1">{f.tagline}</p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-mono text-[14px] text-[#ffffff]">{formatMoney(f.variants[1].priceMinor)}</span>
                      <span className="font-lambo text-[11px] text-[#ffc000] flex items-center gap-1">
                        VIEW FLACON <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <p className="font-lambo text-[24px] text-[#ffffff]">
              NO OLFACTORY ACCORD FOUND FOR "{query.toUpperCase()}"
            </p>
            <p className="text-[14px] text-[#7d7d7d] max-w-md mx-auto font-sans">
              Our master perfumers work with rare raw materials. Try searching for Saffron, Leather, Iris, Cedar, or Amber.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
