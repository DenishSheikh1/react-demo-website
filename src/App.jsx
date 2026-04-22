import { useState, useEffect } from 'react'
import './App.css'

function useLocalState(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initial
    } catch {
      return initial
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* ignore */
    }
  }, [key, value])
  return [value, setValue]
}

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark">◆</span>
        <span className="brand-name">React Demo</span>
      </div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#counter">Counter</a>
        <a href="#todos">Todos</a>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <h1>A tiny React demo, <span className="accent">built with Vite</span></h1>
      <p className="lead">
        A starter showcasing hooks, state persistence, and a clean component layout.
        Edit <code>src/App.jsx</code> and watch it hot-reload.
      </p>
      <div className="cta-row">
        <a className="btn btn-primary" href="#counter">Try the demo</a>
        <a className="btn btn-ghost" href="https://react.dev" target="_blank" rel="noreferrer">
          React docs ↗
        </a>
      </div>
    </section>
  )
}

const FEATURES = [
  { icon: '⚡', title: 'Vite-powered', body: 'Instant server start and lightning-fast HMR.' },
  { icon: '🧩', title: 'Composable', body: 'Small, focused components that are easy to reason about.' },
  { icon: '💾', title: 'Persistent state', body: 'Todos and theme survive a page refresh via localStorage.' },
  { icon: '🎨', title: 'Themeable', body: 'Light and dark modes with CSS variables.' },
]

function Features() {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-grid">
        {FEATURES.map((f) => (
          <article key={f.title} className="feature-card">
            <div className="feature-icon" aria-hidden="true">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Counter() {
  const [count, setCount] = useLocalState('demo.count', 0)
  return (
    <section id="counter" className="counter-section">
      <h2>Counter</h2>
      <p>A classic, with persistence.</p>
      <div className="counter-box">
        <button className="btn btn-ghost" onClick={() => setCount(count - 1)} aria-label="Decrement">−</button>
        <span className="count-value">{count}</span>
        <button className="btn btn-ghost" onClick={() => setCount(count + 1)} aria-label="Increment">+</button>
      </div>
      <button className="btn btn-link" onClick={() => setCount(0)}>Reset</button>
    </section>
  )
}

function Todos() {
  const [todos, setTodos] = useLocalState('demo.todos', [
    { id: 1, text: 'Read the Vite docs', done: true },
    { id: 2, text: 'Explore React hooks', done: false },
    { id: 3, text: 'Ship something cool', done: false },
  ])
  const [draft, setDraft] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    setTodos([...todos, { id: Date.now(), text, done: false }])
    setDraft('')
  }
  const toggle = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  const remove = (id) => setTodos(todos.filter((t) => t.id !== id))

  const remaining = todos.filter((t) => !t.done).length

  return (
    <section id="todos" className="todos-section">
      <h2>Todos</h2>
      <p>{remaining} task{remaining === 1 ? '' : 's'} remaining.</p>

      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="What needs to be done?"
          aria-label="New todo"
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>

      <ul className="todo-list">
        {todos.length === 0 && <li className="todo-empty">Nothing here yet — add your first task.</li>}
        {todos.map((t) => (
          <li key={t.id} className={`todo-item ${t.done ? 'done' : ''}`}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span>{t.text}</span>
            </label>
            <button className="todo-remove" onClick={() => remove(t.id)} aria-label={`Remove ${t.text}`}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>Built with React {'⚔️'} Vite · {new Date().getFullYear()}</p>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useLocalState('demo.theme', 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div className="app">
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <Features />
        <Counter />
        <Todos />
      </main>
      <Footer />
    </div>
  )
}
