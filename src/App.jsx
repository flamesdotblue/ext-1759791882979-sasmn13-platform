import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Journey from './components/Journey';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/40 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Pillars />
        <Journey />
        <FooterCTA />
      </main>
    </div>
  );
}
