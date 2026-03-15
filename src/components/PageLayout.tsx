import type { ReactNode } from 'react'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

type PageLayoutProps = {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="page-shell">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
