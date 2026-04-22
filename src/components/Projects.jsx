import { useState } from 'react'

const FILTERS = ['All', 'Residential', 'Commercial', 'Design']

const PROJECTS = [
  {
    title: 'Hillside Terrace Garden',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Corporate Courtyard',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Modern Back Patio',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Coastal Front Yard',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Boutique Hotel Entrance',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Japanese-Inspired Zen',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="projects" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Recent Work
            </span>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Gardens we're proud of.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === f
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <figure
              key={p.title}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-80 w-full object-cover transition-transform duration-[600ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />

              <figcaption className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {p.category}
                  </div>
                  <div className="mt-1 font-serif text-xl text-white">{p.title}</div>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 group-hover:rotate-[-45deg]">
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                    <path d="M3 10h12l-4-4 1.4-1.4L18.8 10l-6.4 6.4L11 15l4-4H3z" />
                  </svg>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
