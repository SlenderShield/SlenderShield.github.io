import { useEffect, useRef, useState } from 'react'
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
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    setIsNavOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const main = document.querySelector('#main-content') as HTMLElement | null
    const footer = document.querySelector('footer') as HTMLElement | null

    if (isNavOpen) {
      // hide inert content from assistive tech
      if (main) main.setAttribute('aria-hidden', 'true')
      if (footer) footer.setAttribute('aria-hidden', 'true')
      // focus first link for keyboard users
      setTimeout(() => firstLinkRef.current?.focus(), 50)
    } else {
      if (main) main.removeAttribute('aria-hidden')
      if (footer) footer.removeAttribute('aria-hidden')
    }

    return () => {
      if (main) main.removeAttribute('aria-hidden')
      if (footer) footer.removeAttribute('aria-hidden')
    }
  }, [isNavOpen])

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label={`${siteContent.name} home`}>
        {siteContent.name}
      </Link>

      <div className="header-controls">
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isNavOpen}
          aria-controls="primary-navigation"
          aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
              aria-current={location.pathname === item.to ? 'page' : undefined}
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
