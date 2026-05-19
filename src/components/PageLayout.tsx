import type { ReactNode } from 'react'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

type PageLayoutProps = {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="page-main">
        {children}
      </main>

      <SiteFooter />
    </div>
  )
}
