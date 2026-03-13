import { siteContent } from '../content/siteContent'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        {siteContent.name} • {new Date().getFullYear()}
      </p>
      <div className="social-inline">
        {siteContent.socialLinks.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
