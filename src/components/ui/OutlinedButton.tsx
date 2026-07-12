import React from 'react';

interface OutlinedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md';
  active?: boolean;
  className?: string;
}

/**
 * Lamborghini Design System: Outlined Nav Button
 * Role: Tertiary button with border.
 * Transparent fill, 1px border in #7d7d7d or #969696, 0px radius, LamboType uppercase text.
 */
export const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  children,
  theme = 'light',
  size = 'md',
  active = false,
  className = '',
  disabled,
  ...props
}) => {
  const isDark = theme === 'dark';

  const baseColors = isDark
    ? active
      ? 'border-[#ffc000] text-[#ffc000] bg-[#ffc000]/10'
      : 'border-[#494949] text-[#ffffff] hover:border-[#ffc000] hover:text-[#ffc000]'
    : active
      ? 'border-[#202020] text-[#ffffff] bg-[#202020]'
      : 'border-[#969696] text-[#202020] hover:border-[#202020]';

  const sizeClasses = size === 'sm' ? 'px-4 py-2 text-[11px]' : 'px-6 py-3 text-[13px]';

  return (
    <button
      {...props}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center font-lambo leading-none
        border transition-colors duration-150 cursor-pointer select-none whitespace-nowrap
        disabled:opacity-40 disabled:cursor-not-allowed
        ${baseColors} ${sizeClasses} ${className}
      `}
      style={{ letterSpacing: '0.0230em' }}
    >
      {children}
    </button>
  );
};
