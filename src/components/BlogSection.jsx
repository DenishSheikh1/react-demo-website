const POSTS = [
  {
    category: 'Garden Tips',
    date: 'April 18, 2026',
    title: 'Seven native perennials that thrive in full shade.',
    excerpt:
      'Most "shade-loving" lists repeat the same five plants. Here are seven hardy natives our designers reach for instead.',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=80',
    author: 'Daniel Hayes',
  },
  {
    category: 'Design',
    date: 'April 04, 2026',
    title: 'How to plan a backyard that still works in winter.',
    excerpt:
      'Evergreens, structure, and warm lighting make the difference between a summer-only garden and a four-season retreat.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80',
    author: 'Priya Shah',
  },
  {
    category: 'Sustainability',
    date: 'March 22, 2026',
    title: 'A practical guide to rainwater harvesting at home.',
    excerpt:
      "You don't need a hillside farm to collect rainwater. A few small tanks and one redirected downspout go a long way.",
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80',
    author: 'Marcus Chen',
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              From the Journal
            </span>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Notes from the garden.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
          >
            View All Articles
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M3 10h12l-4-4 1.4-1.4L18.8 10l-6.4 6.4L11 15l4-4H3z" />
            </svg>
          </a>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="text-sm text-gray-500">{p.date} · {p.author}</div>
                <h3 className="mt-3 font-serif text-xl leading-snug transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-gray-600">{p.excerpt}</p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Read Article
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                    <path d="M3 10h12l-4-4 1.4-1.4L18.8 10l-6.4 6.4L11 15l4-4H3z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
