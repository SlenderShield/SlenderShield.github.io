import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('Page Not Found', { noIndex: true, path: '/404' })
  return (
    <PageLayout>
      <main className="container section-block reveal">
        <section className="page-intro error-page-card">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>
            The page you are looking for does not exist or has been moved. Use the navigation above or head back home.
          </p>
        </section>
        <div className="hero-actions">
          <Link className="button solid" to="/">
            Back to home
          </Link>
          <Link className="button ghost" to="/projects">
            View projects
          </Link>
          <Link className="button ghost" to="/blog">
            Read blog
          </Link>
        </div>
      </main>
    </PageLayout>
  )
}
