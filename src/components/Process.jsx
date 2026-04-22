const STEPS = [
  {
    n: '01',
    title: 'Discover',
    body: 'We walk the site, take measurements, and listen to how you want to live in your outdoor space.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'Our studio drafts a custom plan with plant palettes, materials, and a clear cost estimate.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Licensed crews install everything on schedule, protecting your property and existing plantings.',
  },
  {
    n: '04',
    title: 'Nurture',
    body: 'Ongoing care plans keep your landscape thriving — from first spring bloom to winter prep.',
  },
]

export default function Process() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            How We Work
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            A simple, four-step process.
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Clear milestones, no surprises — just a smooth path from empty yard to
            finished garden.
          </p>
        </div>

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-10 hidden h-0.5 border-t-2 border-dashed border-primary/30 lg:block"
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary font-serif text-2xl font-bold text-white shadow-[0_10px_30px_rgba(74,124,46,0.3)] ring-8 ring-white">
                  {s.n}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
