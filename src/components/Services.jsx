const SERVICES = [
  {
    title: 'Garden Design',
    body: 'Bespoke garden layouts tailored to your lifestyle, climate, and property — from concept sketches to final planting.',
    icon: 'M12 2l2 6h6l-5 4 2 7-5-4-5 4 2-7-5-4h6z',
  },
  {
    title: 'Lawn Care & Maintenance',
    body: 'Mowing, aeration, fertilisation, and seasonal clean-ups to keep your turf dense, healthy, and weed-free year round.',
    icon: 'M3 20h18M6 20V9l6-5 6 5v11M10 20v-6h4v6',
  },
  {
    title: 'Tree & Shrub Services',
    body: 'Expert pruning, crown reduction, planting, and removal performed by certified arborists with zero damage guaranteed.',
    icon: 'M12 3c-4 4-4 9 0 12 4-3 4-8 0-12zM12 15v6M9 21h6',
  },
  {
    title: 'Irrigation Systems',
    body: 'Smart drip and sprinkler installations that cut water usage up to 40% while keeping every bed and border thriving.',
    icon: 'M12 3v9m0 0l-3-3m3 3l3-3M5 21h14',
  },
  {
    title: 'Hardscaping & Patios',
    body: 'Natural stone patios, pathways, retaining walls, and outdoor kitchens engineered to last for decades.',
    icon: 'M4 8h16M4 14h16M4 8v10h16V8M8 8V5h8v3',
  },
  {
    title: 'Seasonal Planting',
    body: 'Curated flower beds, native perennials, and edible gardens that bring colour and life to every corner of your property.',
    icon: 'M12 2c-3 3-3 7 0 9 3-2 3-6 0-9zM12 11v11M7 22h10',
  },
]

function IconFrame({ path }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
      </svg>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            What We Do
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            Full-service landscaping,<br />rooted in craft.
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Every property is different. Our in-house team of designers, horticulturists,
            and builders delivers cohesive outdoor spaces under one roof.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(74,124,46,0.12)]"
            >
              <IconFrame path={s.icon} />
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{s.body}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1"
              >
                Learn more
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M3 10h12l-4-4 1.4-1.4L18.8 10l-6.4 6.4L11 15l4-4H3z" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
