import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  align = 'left',
  className = '',
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`mb-10 ${isCentered ? 'text-center mx-auto max-w-2xl' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-medium border border-dark-border bg-dark-850/80 text-neon ${isCentered ? 'justify-center' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <div className={`flex items-center gap-3 ${isCentered ? 'justify-center' : ''}`}>
        <span className="w-5 h-1 bg-neon rounded-full shrink-0" />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed ${isCentered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
