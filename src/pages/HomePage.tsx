import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProductShowcase } from '../components/ProductShowcase';
import { Features } from '../components/Features';
import { AboutSection } from '../components/AboutSection';
export function HomePage() {
  return <>
      <HeroSection />
      <ProductShowcase />
      <Features />
      <AboutSection />
    </>;
}