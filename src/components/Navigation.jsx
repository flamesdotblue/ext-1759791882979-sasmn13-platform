import React from 'react';
import { Sparkles, Star, Compass } from 'lucide-react';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 via-sky-500 to-violet-600 shadow-lg shadow-fuchsia-500/30">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-semibold tracking-wide">Cosmic Soul</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#discover" className="text-sm text-white/80 hover:text-white transition">Discover</a>
            <a href="#journey" className="text-sm text-white/80 hover:text-white transition">Journey</a>
            <a href="#begin" className="text-sm text-white/80 hover:text-white transition">Begin</a>
          </nav>
          <a href="#begin" className="ml-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition md:inline-flex">
            <Compass className="h-4 w-4" /> Start
          </a>
        </div>
      </div>
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </header>
  );
}
