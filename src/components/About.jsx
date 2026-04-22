const HIGHLIGHTS = [
  'Certified horticulturists and ISA-accredited arborists on every crew',
  'Fully insured, licensed, and OSHA-compliant job sites',
  'Sustainable, low-impact practices with native-first planting',
  'Transparent pricing — no hidden fees, ever',
]

function CheckDot() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10l4 4 8-9" />
      </svg>
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80"
              alt="Landscaper tending a garden"
              className="h-[480px] w-full object-cover lg:h-[560px]"
            />
          </div>

          <div className="absolute -bottom-8 -right-4 hidden w-64 overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:block lg:-right-8">
            <img
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=500&q=80"
              alt="Trimmed hedges"
              className="h-48 w-full object-cover"
            />
          </div>

          <div className="absolute -left-4 top-8 rounded-2xl bg-primary px-6 py-5 text-white shadow-[0_12px_40px_rgba(74,124,46,0.35)] lg:-left-8">
            <div className="font-serif text-5xl font-bold leading-none">25+</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/85">
              Years of<br />Experience
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            About Gardenors
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            A family-run studio shaping outdoor spaces with care.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            What began in 1999 as a two-person gardening crew has grown into a full
            landscape studio with designers, horticulturists, and stonemasons on staff.
            We treat each project as if it were our own garden — patiently, precisely,
            and with a deep respect for the land.
          </p>

          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex gap-3">
                <CheckDot />
                <span className="text-gray-800">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Start Your Project
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M3 10h12l-4-4 1.4-1.4L18.8 10l-6.4 6.4L11 15l4-4H3z" />
              </svg>
            </a>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">Daniel Hayes</div>
                <div className="text-sm text-gray-500">Founder &amp; Lead Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
