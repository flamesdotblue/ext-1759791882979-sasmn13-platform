import React from 'react';

export default function FooterCTA() {
  return (
    <section id="begin" className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-violet-600/10 to-sky-500/10 p-8 sm:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(400px_200px_at_20%_10%,black,transparent)]">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="absolute -right-10 -bottom-10 h-60 w-60 rounded-full bg-sky-500/30 blur-3xl" />
        </div>
        <div className="relative">
          <h3 className="text-2xl font-semibold sm:text-3xl">Begin your cosmic practice</h3>
          <p className="mt-2 max-w-2xl text-white/80">
            Set aside 7 minutes today. Breathe, ask, trace, commit. Your soul speaks in whispers—meet it in quiet wonder.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
            <a href="#home" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition">
              Return to the Stars
            </a>
            <a href="#journey" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
              Review the Steps
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Cosmic Soul. Travel safely.</p>
    </section>
  );
}
