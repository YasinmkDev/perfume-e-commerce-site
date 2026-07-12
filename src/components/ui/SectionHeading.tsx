import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  actionText?: string;
  onActionClick?: () => void;
  eyebrow?: string;
  theme?: 'dark' | 'light';
  className?: string;
}

/**
 * Lamborghini Design System: Section Heading Block
 * Role: Editorial section title with linked descriptor.
 * Two-column row: left side holds section name in LamboType 40–54px uppercase #202020 (#ffffff on #202020),
 * right side holds discovery link in LamboType 12px uppercase with right-arrow.
 * Vertically centered, separated by generous whitespace.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  actionText,
  onActionClick,
  eyebrow,
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b ${isDark ? 'border-[#494949]' : 'border-[#969696]/40'} ${className}`}>
      <div className="space-y-2">
        {eyebrow && (
          <p
            className={`font-lambo text-[11px] md:text-[12px] tracking-[0.023em] uppercase ${
              isDark ? 'text-[#7d7d7d]' : 'text-[#7d7d7d]'
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={`font-lambo text-[32px] md:text-[44px] lg:text-[54px] leading-[1.05] tracking-[0.023em] uppercase ${
            isDark ? 'text-[#ffffff]' : 'text-[#202020]'
          }`}
        >
          {title}
        </h2>
      </div>

      {actionText && (
        <button
          onClick={onActionClick}
          className={`
            inline-flex items-center gap-3 font-lambo text-[12px] md:text-[13px] tracking-[0.023em] uppercase
            cursor-pointer bg-transparent border-none p-0 transition-colors duration-150 group
            ${isDark ? 'text-[#ffffff] hover:text-[#ffc000]' : 'text-[#202020] hover:text-[#917300]'}
          `}
        >
          <span>{actionText}</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      )}
    </div>
  );
};
