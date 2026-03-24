import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useProjects } from '../hooks/useApi'

export function ProjectsPage() {
  useDocumentTitle('Projects', 'Projects by Muralidhara Bhat KS — backend systems, telemetry pipelines, microservices, and full-stack engineering work from Bosch and Netcracker.')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeStack, setActiveStack] = useState('All')
  const [query, setQuery] = useState('')
  const { data: projects, loading } = useProjects()

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((project) => project.category)))
    return ['All', ...unique]
  }, [projects])

  const stacks = useMemo(() => {
    const unique = new Set<string>()
    projects.forEach((project) => {
      project.stack.forEach((tech) => unique.add(tech))
    })
    return ['All', ...Array.from(unique).sort()]
  }, [projects])

  const visibleProjects = useMemo(() => {
    return projects.filter((project) => {
      const inCategory = activeCategory === 'All' || project.category === activeCategory
      const inStack = activeStack === 'All' || project.stack.includes(activeStack)
      const normalized = `${project.title} ${project.description} ${project.stack.join(' ')}`.toLowerCase()
      const matchesSearch = normalized.includes(query.toLowerCase().trim())
      return inCategory && inStack && matchesSearch
    })
  }, [activeCategory, activeStack, query, projects])

  if (loading) {
    return (
      <PageLayout>
        <main className="container section-block reveal">
          <p>Loading...</p>
        </main>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <main className="container section-block reveal">
        <div className="section-head">
          <h1>Projects</h1>
          <Link to="/">Back home</Link>
        </div>

        <p>
          A growing project library designed to scale. Use category filters and search to quickly explore relevant work.
        </p>

        <div className="projects-toolbar">
          <div>
            <p className="meta">Category</p>
            <div className="chip-row">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`chip-button ${category === activeCategory ? 'active' : ''}`}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="meta">Tech Stack</p>
            <div className="chip-row">
              {stacks.map((stack) => (
                <button
                  key={stack}
                  className={`chip-button ${stack === activeStack ? 'active' : ''}`}
                  type="button"
                  onClick={() => setActiveStack(stack)}
                >
                  {stack}
                </button>
              ))}
            </div>
          </div>

          <label className="search-field">
            Search
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="React, analytics, dashboard..."
            />
          </label>
        </div>

        <div className="card-grid projects-grid">
          {visibleProjects.map((project) => (
            <article className="card" key={project.title}>
              <p className="meta">
                {project.category} • {project.year}
              </p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p className="outcome">{project.outcome}</p>
              <ul className="chip-row">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="row-links">
                <Link to={`/projects/${project.slug}`}>Case study</Link>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </PageLayout>
  )
}
