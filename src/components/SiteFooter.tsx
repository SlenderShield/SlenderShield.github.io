import { siteContent } from '../content/siteContent'
import { SocialIcon } from './SocialIcon'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        {siteContent.name} • {new Date().getFullYear()}
      </p>
      <div className="social-inline">
        {siteContent.socialLinks.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
            <SocialIcon label={item.label} />
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </footer>
  )
}
