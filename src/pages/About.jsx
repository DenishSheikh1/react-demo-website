import { Link } from 'react-router-dom'

const STACK = [
  { name: 'React 19', body: 'UI library for building component-based interfaces.' },
  { name: 'Vite 8', body: 'Dev server and build tool with instant HMR.' },
  { name: 'React Router', body: 'Client-side routing between pages.' },
  { name: 'CSS Variables', body: 'Theming primitives for light and dark modes.' },
]

const TIMELINE = [
  { step: '01', title: 'Scaffold', body: 'Generate a Vite React starter in seconds.' },
  { step: '02', title: 'Compose', body: 'Break the UI into small, testable components.' },
  { step: '03', title: 'Persist', body: 'Store app state in localStorage via a custom hook.' },
  { step: '04', title: 'Route', body: 'Add multi-page navigation with React Router.' },
  { step: '05', title: 'Ship', body: 'Build with `npm run build` and deploy anywhere.' },
]

export default function About() {
  return (
    <>
      <section className="hero about-hero">
        <h1>About this <span className="accent">demo</span></h1>
        <p className="lead">
          A walkthrough of what powers this site — and the pattern you can reuse
          for your own projects.
        </p>
      </section>

      <section className="features">
        <h2>The stack</h2>
        <div className="feature-grid">
          {STACK.map((s) => (
            <article key={s.name} className="feature-card">
              <h3>{s.name}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2>How it was built</h2>
        <ol className="timeline">
          {TIMELINE.map((t) => (
            <li key={t.step} className="timeline-item">
              <span className="timeline-step">{t.step}</span>
              <div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="cta-section">
        <h2>Ready to poke at it?</h2>
        <p>Head back to the home page and try the counter and todo list.</p>
        <Link to="/" className="btn btn-primary">Back to home →</Link>
      </section>
    </>
  )
}
