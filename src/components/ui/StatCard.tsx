import React from 'react';
import { Code, Layers, Users, Rocket, LucideIcon } from 'lucide-react';
import { StatItem } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  Code,
  Layers,
  Users,
  Rocket,
};

interface StatCardProps {
  stat: StatItem;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const IconComponent = iconMap[stat.iconName] || Code;

  return (
    <div className="flex items-center gap-3.5 p-4 rounded-xl bg-dark-850/80 border border-dark-border hover:border-dark-border-light transition-all duration-200 group">
      <div className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-border flex items-center justify-center text-neon group-hover:scale-105 group-hover:border-neon/40 transition-all shrink-0">
        <IconComponent className="w-5 h-5" />
      </div>
      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {stat.value}
          </span>
          {stat.subtext && (
            <span className="text-xs text-muted-dark font-normal">
              {stat.subtext}
            </span>
          )}
        </div>
        <p className="text-xs font-medium text-slate-300">
          {stat.label}
        </p>
      </div>
    </div>
  );
};
