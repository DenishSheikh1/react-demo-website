const LINKS = {
  quick: [
    { label: 'About Us', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Garden Design', href: '#services' },
    { label: 'Lawn Care', href: '#services' },
    { label: 'Tree Services', href: '#services' },
    { label: 'Irrigation', href: '#services' },
    { label: 'Hardscaping', href: '#services' },
  ],
}

const SOCIALS = [
  {
    label: 'Instagram',
    icon: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zM12 8a4 4 0 100 8 4 4 0 000-8zM18 6a1 1 0 110 2 1 1 0 010-2z',
  },
  {
    label: 'Facebook',
    icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z',
  },
  {
    label: 'Pinterest',
    icon: 'M12 2a10 10 0 00-3.6 19.3c-.1-.8-.2-2 0-2.8l1.3-5.4s-.3-.7-.3-1.7c0-1.6 1-2.8 2.1-2.8 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.8-2.3 3.8-5.5 0-2.9-2-4.9-5-4.9-3.4 0-5.4 2.5-5.4 5.2 0 1 .4 2.1.9 2.7.1.1.1.2.1.3l-.4 1.5c-.1.3-.2.3-.5.2-1.7-.8-2.8-3.3-2.8-5.3 0-4.3 3.2-8.3 9.2-8.3 4.8 0 8.5 3.4 8.5 8 0 4.8-3 8.6-7.2 8.6-1.4 0-2.7-.7-3.1-1.6L9 20.3c-.3 1-1 2.4-1.5 3.2 1.1.3 2.3.5 3.5.5a10 10 0 000-20z',
  },
  {
    label: 'LinkedIn',
    icon: 'M4 4h4v4H4V4zm0 6h4v10H4V10zm6 0h4v2c.5-1 2-2 4-2 3 0 4 2 4 5v5h-4v-5c0-1-.5-2-2-2s-2 1-2 2v5h-4V10z',
  },
]

function LeafMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 4C9 4 4 9 4 16c0 5 3 9 7 11 1-7 5-12 12-14-2 9-8 14-15 15 4 0 8-1 11-3 5-4 7-10 5-17-2-2-5-4-8-4z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                <LeafMark className="h-5 w-5" />
              </span>
              <span className="font-serif text-2xl font-bold">Gardenors</span>
            </div>
            <p className="mt-5 max-w-sm leading-relaxed text-white/70">
              A full-service landscaping studio helping homeowners and businesses
              design, build, and nurture outdoor spaces that last generations.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {LINKS.quick.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/70 transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white">Services</h4>
            <ul className="mt-5 space-y-3">
              {LINKS.services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/70 transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white">Get in Touch</h4>
            <ul className="mt-5 space-y-3 text-white/70">
              <li>142 Willow Lane<br />Evergreen Park, IL 60805</li>
              <li>
                <a href="tel:+18005550199" className="transition-colors hover:text-accent">
                  +1 (800) 555‑0199
                </a>
              </li>
              <li>
                <a href="mailto:hello@gardenors.studio" className="transition-colors hover:text-accent">
                  hello@gardenors.studio
                </a>
              </li>
              <li className="pt-2 text-sm text-white/60">Mon–Sat · 8am–6pm</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-white/60 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Gardenors Landscape Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">Privacy</a>
            <a href="#" className="transition-colors hover:text-accent">Terms</a>
            <a href="#" className="transition-colors hover:text-accent">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
