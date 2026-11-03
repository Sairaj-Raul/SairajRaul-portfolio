import React from 'react';
import { statsData } from '../../data/portfolioInfo';
import { StatCard } from '../ui/StatCard';

export const StatsBar: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 border-y border-dark-border/60 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
