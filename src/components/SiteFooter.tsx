import { siteContent } from '../content/siteContent'
import { SocialIcon } from './SocialIcon'

export function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <p>
        {siteContent.name} • {new Date().getFullYear()}
      </p>

      <ul className="social-inline" aria-label="Social links">
        {siteContent.socialLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
              <SocialIcon label={item.label} />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
