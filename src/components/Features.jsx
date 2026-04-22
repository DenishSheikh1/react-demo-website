const FEATURES = [
  {
    title: 'In-House Design Team',
    body: 'From first sketch to final walkthrough, your project stays with one dedicated studio — no subcontractor surprises.',
    icon: 'M4 20h16M4 10l8-6 8 6v10H4V10zM10 20v-6h4v6',
  },
  {
    title: 'Eco-Conscious Methods',
    body: 'Native planting, mulch-on-site composting, and drip irrigation keep our projects light on water and chemicals.',
    icon: 'M12 3c0 6-5 9-5 13a5 5 0 0010 0c0-4-5-7-5-13zM12 11v11',
  },
  {
    title: '5-Year Plant Warranty',
    body: 'Every tree, shrub, and perennial we install is covered for five full seasons — we stand behind what we plant.',
    icon: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z M9 12l2 2 4-4',
  },
  {
    title: 'Licensed & Insured',
    body: 'Fully bonded, licensed arborists, and $2M general liability coverage — peace of mind is part of the quote.',
    icon: 'M12 2l9 4v6c0 6-4 9-9 10-5-1-9-4-9-10V6l9-4z',
  },
]

export default function Features() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-end lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Why Choose Us
            </span>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Built on craft,<br />backed by guarantees.
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            We take our reputation seriously. Every crew member carries the same standards
            into your garden — the ones we'd want for our own.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              className="group relative flex flex-col rounded-3xl bg-cream p-8 transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary transition-colors group-hover:bg-white/15 group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon} />
                  </svg>
                </div>
                <span className="font-serif text-5xl text-primary/15 transition-colors group-hover:text-white/20">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold transition-colors group-hover:text-white">
                {f.title}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600 transition-colors group-hover:text-white/85">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
