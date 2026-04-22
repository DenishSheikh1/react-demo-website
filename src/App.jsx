import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
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
      <Link to="/" className="brand">
        <span className="brand-mark">◆</span>
        <span className="brand-name">React Demo</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>Built with React {'⚔️'} Vite · {new Date().getFullYear()}</p>
    </footer>
  )
}

function NotFound() {
  return (
    <section className="hero">
      <h1>404</h1>
      <p className="lead">This page didn't route anywhere.</p>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </section>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
