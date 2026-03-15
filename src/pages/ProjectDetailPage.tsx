import { Link, useParams } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { projects } from '../content/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  useDocumentTitle(project ? project.title : 'Project Not Found')

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
      <main className="container section-block reveal">
        <p className="meta">
          {project.category} • {project.year}
        </p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <article className="detail-panel">
          <h2>Outcome</h2>
          <p>{project.outcome}</p>
        </article>

        <article className="detail-panel">
          <h2>Tech Stack</h2>
          <ul className="chip-row">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="row-links">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            View live project
          </a>
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            View repository
          </a>
          <Link to="/projects">Back to all projects</Link>
        </div>
      </main>
    </PageLayout>
  )
}
