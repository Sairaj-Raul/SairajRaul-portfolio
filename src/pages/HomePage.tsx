import React from 'react';
import { Hero } from '../components/sections/Hero';
import { StatsBar } from '../components/sections/StatsBar';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { EngineeringHighlights } from '../components/sections/EngineeringHighlights';
import { Experience } from '../components/sections/Experience';
import { Contact } from '../components/sections/Contact';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Skills />
      <Projects />
      <EngineeringHighlights />
      <Experience />
      <Contact />
    </>
  );
};
