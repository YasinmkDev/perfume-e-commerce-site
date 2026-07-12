import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GhostButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

/**
 * Lamborghini Design System: Ghost Link Button
 * Role: Secondary action or text-link CTA.
 * No fill, no border. LamboType uppercase text in #202020 or #ffffff depending on surface,
 * with right-arrow icon. Letter-spacing 0.0230em.
 */
export const GhostButton: React.FC<GhostButtonProps> = ({
  children,
  icon = true,
  theme = 'light',
  className = '',
  ...props
}) => {
  const textColor = theme === 'dark' ? 'text-[#ffffff] hover:text-[#ffc000]' : 'text-[#202020] hover:text-[#917300]';

  return (
    <button
      {...props}
      className={`
        inline-flex items-center gap-3 bg-transparent border-none p-0 cursor-pointer
        font-lambo text-[12px] md:text-[14px] leading-none transition-colors duration-150
        select-none whitespace-nowrap group ${textColor} ${className}
      `}
      style={{ letterSpacing: '0.0230em' }}
    >
      <span className="tracking-[0.023em]">{children}</span>
      {icon && (
        <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </button>
  );
};
