import React from 'react';

const steps = [
  {
    tag: '01',
    title: 'Breathe into the Vastness',
    text: 'Slow your tempo. Feel the gravity of your body. Notice the subtle orbit of thoughts passing by.'
  },
  {
    tag: '02',
    title: 'Ask the Quiet Question',
    text: 'What part of me seeks to be seen right now? Let the answer rise like a moon from the horizon.'
  },
  {
    tag: '03',
    title: 'Trace the Light',
    text: 'Follow the sensation, memory, or image that glows. Give it space. Name it without judgment.'
  },
  {
    tag: '04',
    title: 'Commit to Orbit',
    text: 'Choose one action that honors this truth. Small, consistent revolutions reshape galaxies.'
  }
];

export default function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Inner Journey</h2>
        <p className="mt-3 text-white/70">
          A gentle, repeatable cycle for navigating your inner universe.
        </p>
      </div>

      <ol className="mt-12 grid gap-6 sm:grid-cols-2">
        {steps.map((s) => (
          <li key={s.tag} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.04] p-6">
            <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(220px_120px_at_80%_20%,black,transparent)]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-2xl" />
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-sky-500/20 blur-2xl" />
            </div>
            <div className="relative">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-xs font-semibold text-white/90">
                {s.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70">
        Tip: Keep a simple log after each session. One line for what you noticed, one line for what you’ll honor next.
      </div>
    </section>
  );
}
