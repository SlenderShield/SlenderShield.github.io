import { Link, useParams } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { ContentRenderer } from '../components/ContentRenderer'
import { useProject } from '../hooks/useApi'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

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
            name: 'Muralidhara Bhat KS',
          },
          datePublished: /^\d{4}$/.test(project.year) ? `${project.year}-01-01` : undefined,
          url: `https://slendershield.github.io/projects/${project.slug}`,
          keywords: project.stack.join(', '),
          genre: project.category,
        }
      : null,
  })

  if (loading) {
    return (
      <PageLayout>
        <main className="container section-block">
          <p>Loading project...</p>
        </main>
      </PageLayout>
    )
  }

  if (!project) {
    return (
      <PageLayout>
        <main className="container section-block">
          <h1>Project not found</h1>
          <p>This case study does not exist yet. Please check the projects page.</p>
          <Link to="/projects">Go to projects</Link>
        </main>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <main className={`container section-block reveal template-${project.template || 'default'}`}>
        <header className="project-header">
          <p className="meta">
            {project.category} • {project.year}
          </p>
          <h1>{project.title}</h1>
          <p className="project-desc">{project.description}</p>
          
          <div className="row-links">
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
            <Link to="/projects" className="button ghost">Back to all projects</Link>
          </div>
        </header>

        {project.sections && project.sections.length > 0 ? (
          <div className={`project-body layout-${project.template || 'default'}`}>
            {project.sections.map((sec, i) => (
              <section key={i} className="project-section">
                {sec.title && <h2>{sec.title}</h2>}
                <ContentRenderer blocks={sec.blocks} />
              </section>
            ))}
          </div>
        ) : (
          <article className="detail-panel">
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </article>
        )}

        <article className="detail-panel stack-panel">
          <h2>Tech Stack</h2>
          <ul className="chip-row">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

      </main>
    </PageLayout>
  )
}
