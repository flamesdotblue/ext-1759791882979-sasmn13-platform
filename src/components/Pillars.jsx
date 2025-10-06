import React from 'react';
import { Star, Heart, Compass } from 'lucide-react';

const pillars = [
  {
    icon: Star,
    title: 'Awareness',
    text: 'Illuminate the constellations within: patterns, emotions, and the quiet signals of your inner cosmos.'
  },
  {
    icon: Heart,
    title: 'Integration',
    text: 'Bring scattered stars together into galaxies. Alchemize lessons into embodied wisdom.'
  },
  {
    icon: Compass,
    title: 'Direction',
    text: 'Chart a path that resonates with your essence. Move with clarity, courage, and wonder.'
  }
];

export default function Pillars() {
  return (
    <section id="discover" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Three Pillars</h2>
        <p className="mt-3 text-white/70">
          Soul discovery is simple, but not always easy. These pillars keep your journey grounded and luminous.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-violet-600/20 to-sky-500/20 blur-2xl" />
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
