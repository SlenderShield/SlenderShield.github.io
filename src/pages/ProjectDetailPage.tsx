import { Link, useParams } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { ContentRenderer } from '../components/ContentRenderer'
import { useProject } from '../hooks/useApi'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { SITE_NAME, SITE_URL } from '../config/site'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const { data: project, loading } = useProject(slug || '')

  useDocumentTitle(project ? project.title : 'Project Not Found', {
    path: slug ? `/projects/${slug}` : '/projects',
    description: project?.description,
    noIndex: !project,
    structuredData: project
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          creator: {
            '@type': 'Person',
            name: SITE_NAME,
          },
          datePublished: /^\d{4}$/.test(project.year) ? `${project.year}-01-01` : undefined,
          url: `${SITE_URL}/projects/${project.slug}`,
          keywords: project.stack.join(', '),
          genre: project.category,
        }
      : null,
  })

  if (loading) {
    return (
      <PageLayout>
        <main className="container section-block">
          <section className="page-loading-panel" aria-busy="true" aria-live="polite">
            <div className="loading-line loading-line-lg" />
            <div className="loading-line loading-line-md" />
            <div className="loading-card" />
          </section>
        </main>
      </PageLayout>
    )
  }

  if (!project) {
    return (
      <PageLayout>
        <main className="container section-block reveal">
          <div className="page-intro error-page-card">
            <p className="eyebrow">Projects</p>
            <h1>Project not found</h1>
            <p>This case study does not exist yet. Please check the projects page.</p>
          </div>
          <div className="hero-actions">
            <Link to="/projects" className="button solid">
              Go to projects
            </Link>
            <Link to="/" className="button ghost">
              Back home
            </Link>
          </div>
        </main>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <main className={`container section-block reveal project-detail template-${project.template || 'default'}`}>
        <header className="page-intro project-hero">
          <p className="eyebrow">
            {project.category} • {project.year}
          </p>
          <h1>{project.title}</h1>
          <p className="project-desc">{project.description}</p>
          <div className="hero-actions">
            <Link to="/projects" className="button ghost">
              Back to all projects
            </Link>
            {project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button solid">
                View live project
              </a>
            )}
            {project.repoUrl !== '#' && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="button ghost">
                View repository
              </a>
            )}
          </div>
        </header>

        <section className="project-summary-grid">
          <article className="detail-panel project-summary-card">
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </article>

          <article className="detail-panel project-summary-card">
            <h2>Tech Stack</h2>
            <ul className="chip-row">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        {project.sections && project.sections.length > 0 ? (
          <div className={`project-body layout-${project.template || 'default'}`}>
            {project.sections.map((sec, i) => (
              <section key={i} className="project-section detail-panel">
                {sec.title && <h2>{sec.title}</h2>}
                <ContentRenderer blocks={sec.blocks} />
              </section>
            ))}
          </div>
        ) : null}

      </main>
    </PageLayout>
  )
}
