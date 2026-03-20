import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteContent } from '../content/siteContent'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
] as const

export function SiteHeader() {
  const location = useLocation()
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        {siteContent.name}
      </Link>

      <div className="header-controls">
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isNavOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span>{isNavOpen ? 'Close' : 'Menu'}</span>
        </button>
        <nav
          id="primary-navigation"
          className={`site-nav${isNavOpen ? ' expanded' : ''}`}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={location.pathname === item.to ? 'active' : undefined}
              onClick={() => setIsNavOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
