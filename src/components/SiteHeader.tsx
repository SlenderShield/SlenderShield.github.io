import { Link, useLocation } from 'react-router-dom'
import { siteContent } from '../content/siteContent'

const homeLinks = [
  { label: 'Focus', href: '#focus' },
  { label: 'Featured', href: '#featured-projects' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        {siteContent.name}
      </Link>

      <nav className="site-nav" aria-label="Primary">
        {isHome
          ? homeLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))
          : null}
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  )
}
