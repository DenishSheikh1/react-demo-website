const STATS = [
  { value: '850+', label: 'Projects Delivered' },
  { value: '25+', label: 'Years of Expertise' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=80"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm ring-1 ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Premium Landscaping Since 1999
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Crafting <em className="italic text-accent">living</em> landscapes that
            feel like home.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            From garden design and lawn care to custom hardscaping, our team turns
            everyday outdoor spaces into calm, intentional retreats — built to
            thrive season after season.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Request a Free Estimate
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M3 10h12l-4-4 1.4-1.4L18.8 10l-6.4 6.4L11 15l4-4H3z" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Explore Our Services
            </a>
          </div>

          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-3xl text-white md:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-white/70">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
