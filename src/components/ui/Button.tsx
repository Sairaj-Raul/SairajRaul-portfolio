import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon/40 disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-2',
    md: 'text-sm font-semibold px-6 py-3 gap-2.5',
    lg: 'text-base font-semibold px-8 py-3.5 gap-3',
  };

  const variantStyles = {
    primary: 'bg-neon hover:bg-neon-400 text-dark-950 font-bold shadow-neon-sm hover:shadow-neon transform hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-dark-850 hover:bg-dark-750 text-slate-100 border border-dark-border hover:border-slate-400 shadow-sm active:translate-y-0',
    outline: 'border border-neon/60 text-neon hover:bg-neon/10 hover:border-neon shadow-sm',
    ghost: 'text-muted hover:text-slate-100 hover:bg-dark-800/80',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={combinedStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
};
