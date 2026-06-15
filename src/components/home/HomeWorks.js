import React from 'react'

const works = [
  {
    number: '01',
    title: 'Creative',
    description: 'Creative direction, visual systems, and polished brand storytelling for modern businesses.',
    accent: 'from-brandButton to-brandAccent',
    note: 'Moodboards, visual language, and premium presentation.',
  },
  {
    number: '02',
    title: 'Marketing',
    description: 'Clear marketing systems that support growth, positioning, and consistent audience engagement.',
    accent: 'from-brandHeadline to-brandAccent',
    note: 'Strategy, campaign planning, and brand clarity.',
  },
  {
    number: '03',
    title: 'Commercial Ads',
    description: 'High-conversion ad concepts, motion snippets, and campaign visuals for promotions.',
    accent: 'from-slate-800 to-brandHeadline',
    note: 'Paid ads, reel-ready content, and launch creatives.',
  },
  {
    number: '04',
    title: 'Branding',
    description: 'Identity design, logo systems, and brand guidelines that make the company feel complete.',
    accent: 'from-brandButton to-brandHeadline',
    note: 'Logo, typography, and visual identity direction.',
  },
]

export default function HomeWorks() {
  return (
    <section id="work" className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(155,95,255,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(123,47,255,0.18),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brandHeadline">Our Works</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Creative, marketing, commercial ads, and branding.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            This is arranged as a premium architectural layout with numbered blocks so each discipline feels like its own story.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {works.map((work, index) => (
            <article
              key={work.title}
              className="group grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-1 lg:grid-cols-[auto_1fr_320px] lg:items-center"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-brandButton text-lg font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                  {work.number}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-brandHeadline">Section {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-brandHeadline">
                    {work.title}
                  </h3>
                </div>
              </div>

              <div>
                <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${work.accent}`} />
                <p className="mt-4 text-sm leading-6 text-slate-300">{work.description}</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Placeholder area</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{work.note}</p>
                <div className="mt-5 flex h-28 items-center justify-center rounded-2xl border border-dashed border-white/15 text-sm text-slate-400">
                  Drop image, video frame, or logo here
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}