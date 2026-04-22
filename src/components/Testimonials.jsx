const QUOTES = [
  {
    quote:
      'Gardenors transformed a sloped, neglected backyard into the calm courtyard we always pictured. Every detail felt considered — from drainage to the mulch choice.',
    name: 'Elena Whitaker',
    role: 'Homeowner, Northbrook',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    quote:
      "They handle our three commercial properties and I've never had a callback request go unanswered. Crews arrive when promised, quietly do great work, and leave the site spotless.",
    name: 'Marcus Chen',
    role: 'Facilities Director, Lumen Offices',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    quote:
      'The design phase alone was worth it. They walked us through three palettes, explained why each plant made sense for our climate, and the final garden is better than any renders.',
    name: 'Priya Shah',
    role: 'Homeowner, Willow Creek',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
          <path d="M10 1l3 6 6 1-4.5 4.5L16 19l-6-3-6 3 1.5-6.5L1 8l6-1z" />
        </svg>
      ))}
    </div>
  )
}

function QuoteMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9 text-primary/25" fill="currentColor">
      <path d="M9 10c-3 0-6 3-6 7s3 7 6 7v-4c-1 0-2-1-2-3s1-3 2-3h2v-4H9zm14 0c-3 0-6 3-6 7s3 7 6 7v-4c-1 0-2-1-2-3s1-3 2-3h2v-4h-2z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Client Love
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            Kind words from our clients.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q) => (
            <article
              key={q.name}
              className="flex flex-col rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <QuoteMark />
              <Stars />
              <p className="mt-5 flex-1 leading-relaxed text-gray-700">{q.quote}</p>

              <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                <img
                  src={q.avatar}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{q.name}</div>
                  <div className="text-sm text-gray-500">{q.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
