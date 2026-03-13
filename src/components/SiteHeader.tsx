import { Link, useLocation } from 'react-router-dom'
import { siteContent } from '../content/siteContent'
import { ThemeToggle } from './ThemeToggle'

export function SiteHeader() {
  const location = useLocation()
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        {siteContent.name}
      </Link>

      <div className="header-controls">
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={location.pathname === item.to ? 'active' : undefined}
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
