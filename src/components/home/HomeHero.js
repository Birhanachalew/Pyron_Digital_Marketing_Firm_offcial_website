
export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#050507] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(155,95,255,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(96,16,238,0.14),transparent_24%),linear-gradient(180deg,rgba(16,16,26,0.92),rgba(5,5,7,1))]" />
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brandHeadline shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur">
            Payron Global | Ethiopia + Dubai
          </div>

          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Building brands that connect markets</span>
            <span className="block text-brandHeadline">and close deals globally.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Payron Global is a marketing, commercial production, and branding company helping businesses grow from strategy to execution — end-to-end.
          </p>

          <p className="mt-5 max-w-xl text-lg font-medium text-white">
            We turn ideas into demand. And demand into revenue.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/company/payron/"
              className="inline-flex items-center justify-center rounded-full bg-brandButton px-8 py-3 text-base font-semibold text-white shadow-lg shadow-brandButton/25 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brandAccent"
            >
              Start a Project
            </a>
            <a
              href="/#work"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-8 py-3 text-base font-semibold text-white shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 hover:border-brandHeadline hover:text-brandHeadline"
            >
              View Our Work
            </a>
          </div>

          <p className="mt-5 text-sm font-medium text-slate-400">
            Trusted by startups, enterprises, and global partners.
          </p>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur">
              <p className="text-2xl font-bold text-white">End-to-end</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">Strategy to execution</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur">
              <p className="text-2xl font-bold text-white">Global</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">Markets connected</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur">
              <p className="text-2xl font-bold text-white">High trust</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">Premium delivery</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-brandHeadline/20 blur-3xl animate-drift" />
          <div className="absolute -right-8 bottom-12 h-40 w-40 rounded-full bg-brandButton/20 blur-3xl animate-float" />

          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-6 shadow-[0_32px_100px_rgba(0,0,0,0.35)] backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,95,255,0.2),transparent_35%),linear-gradient(135deg,rgba(16,16,26,0.95),rgba(5,5,7,0.98))]" />
            <div className="relative grid gap-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur animate-float">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Global Growth</p>
                  <p className="mt-2 text-lg font-semibold text-white">Connected markets, one brand system.</p>
                </div>
                <div className="rounded-full bg-brandButton px-3 py-1 text-xs font-semibold text-white">Live</div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(123,47,255,0.16),rgba(96,16,238,0.04))]" />
                  <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />
                    <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />

                    <div className="absolute left-8 top-12 h-3 w-3 rounded-full bg-brandHeadline shadow-[0_0_0_12px_rgba(155,95,255,0.12)] animate-float" />
                    <div className="absolute right-10 top-16 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_0_12px_rgba(103,232,249,0.12)] animate-drift" />
                    <div className="absolute bottom-16 left-12 h-3 w-3 rounded-full bg-brandButton shadow-[0_0_0_12px_rgba(123,47,255,0.12)] animate-float" />
                    <div className="absolute bottom-10 right-16 h-3 w-3 rounded-full bg-white shadow-[0_0_0_12px_rgba(255,255,255,0.08)] animate-drift" />

                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 360" fill="none" aria-hidden="true">
                      <path d="M84 92C160 70 206 76 270 125C332 174 404 178 516 116" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 8" />
                      <path d="M96 256C172 224 234 224 296 260C356 296 418 292 506 236" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 8" />
                      <path d="M170 70C214 126 255 154 298 180C344 208 383 208 456 154" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear" x1="84" y1="92" x2="516" y2="116" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#9B5FFF" />
                          <stop offset="1" stopColor="#67E8F9" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="96" y1="256" x2="506" y2="236" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#7B2FFF" />
                          <stop offset="1" stopColor="#9B5FFF" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.28),rgba(123,47,255,0.75))] shadow-[0_0_80px_rgba(123,47,255,0.45)] animate-drift">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-slate-950/35 backdrop-blur">
                        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white">PG</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur animate-float">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Marketing</p>
                    <p className="mt-2 text-lg font-semibold text-white">Demand systems that scale with the business.</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur animate-drift">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Production</p>
                    <p className="mt-2 text-lg font-semibold text-white">Commercial, documentary, and content workflows.</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur animate-float">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Branding</p>
                    <p className="mt-2 text-lg font-semibold text-white">Identity systems with high-trust positioning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
