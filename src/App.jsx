import React from 'react';
import Hero from './components/Hero.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import FooterMinimal from './components/FooterMinimal.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950">
      <Hero />
      <FinalCTA />
      <FooterMinimal />
    </div>
  );
}
