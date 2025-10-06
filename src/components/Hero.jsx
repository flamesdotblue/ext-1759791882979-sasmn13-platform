import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.6)_55%,rgba(0,0,0,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-[800] tracking-tight text-4xl sm:text-6xl md:text-7xl">
          Discover Your Soul
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          A cosmic journey inward. Ride the neon paths of your inner universe, find clarity in the stars, and come home to your essence.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#discover" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-600 to-sky-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/30 hover:brightness-110 transition">
            Begin the Descent
          </a>
          <a href="#journey" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
