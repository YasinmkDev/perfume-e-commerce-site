import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GialloButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: boolean;
  textColor?: 'dark' | 'light';
  className?: string;
}

/**
 * Lamborghini Design System: Giallo Action Button
 * Primary call-to-action.
 * Solid #ffc000 background, no border, 0px radius, padding 16px 24px.
 * LamboType uppercase text with arrow icon (→) to the right. Letter spacing 0.0230em.
 * No shadow. Sits as a hard rectangular block of yellow.
 */
export const GialloButton: React.FC<GialloButtonProps> = ({
  children,
  icon = true,
  textColor = 'dark',
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`
        inline-flex items-center justify-between gap-4
        bg-[#ffc000] hover:bg-[#917300] active:bg-[#917300]
        ${textColor === 'dark' ? 'text-[#000000]' : 'text-[#ffffff]'}
        font-lambo text-[14px] md:text-[16px] leading-none
        px-6 py-4 transition-colors duration-150 ease-out
        border-none select-none cursor-pointer whitespace-nowrap
        disabled:opacity-40 disabled:cursor-not-allowed
        ${className}
      `}
      style={{ letterSpacing: '0.0230em' }}
    >
      <span className="tracking-[0.023em]">{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </button>
  );
};
