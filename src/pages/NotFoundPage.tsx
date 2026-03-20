import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('Page Not Found', { noIndex: true, path: '/404' })
  return (
    <PageLayout>
      <main className="container section-block reveal">
        <h1>404 — Page Not Found</h1>
        <p>
          The page you are looking for does not exist or has been moved. Use the navigation above or head back home.
        </p>
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
