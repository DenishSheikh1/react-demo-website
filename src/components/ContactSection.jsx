import { useState } from 'react'

const SERVICES = [
  'Garden Design',
  'Lawn Care',
  'Tree & Shrub Services',
  'Irrigation',
  'Hardscaping',
  'Seasonal Maintenance',
]

function InfoRow({ iconPath, label, value, href }) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag href={href} className="flex items-start gap-4">
      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d={iconPath} />
        </svg>
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-white/60">{label}</div>
        <div className="mt-0.5 text-lg text-white">{value}</div>
      </div>
    </Tag>
  )
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES[0],
    message: '',
  })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', service: SERVICES[0], message: '' })
  }

  const inputCls =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15'

  return (
    <section id="contact" className="relative bg-ink py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1.2fr] lg:gap-16">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Get in Touch
            </span>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-white md:text-5xl">
              Let's design your outdoor space.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
              Share a few details about your project. We'll be in touch within one
              business day to schedule a free on-site consultation.
            </p>

            <div className="mt-10 space-y-6">
              <InfoRow
                iconPath="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                label="Phone"
                value="+1 (800) 555‑0199"
                href="tel:+18005550199"
              />
              <InfoRow
                iconPath="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6"
                label="Email"
                value="hello@gardenors.studio"
                href="mailto:hello@gardenors.studio"
              />
              <InfoRow
                iconPath="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z"
                label="Studio"
                value="142 Willow Lane, Evergreen Park"
              />
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Gardenors studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.99%2C40.745%2C-73.965%2C40.762&layer=mapnik"
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={submit}
            className="rounded-3xl bg-white p-8 text-gray-900 shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:p-10"
          >
            <h3 className="font-serif text-2xl">Request a free estimate</h3>
            <p className="mt-1 text-sm text-gray-500">
              Expect a reply within one business day.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Full name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Jane Doe"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jane@example.com"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="(555) 123‑4567"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Service</label>
                <select value={form.service} onChange={update('service')} className={inputCls}>
                  {SERVICES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Tell us about your project
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={update('message')}
                placeholder="Rough size of the yard, timeline, what you're hoping to achieve…"
                className={inputCls}
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              {sent ? 'Thanks — we\'ll be in touch!' : 'Send Request'}
              {!sent && (
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                  <path d="M3 10h12l-4-4 1.4-1.4L18.8 10l-6.4 6.4L11 15l4-4H3z" />
                </svg>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-gray-500">
              By sending, you agree to our privacy policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
