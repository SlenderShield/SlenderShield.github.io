import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useProjects } from '../hooks/useApi'

export function ProjectsPage() {
  useDocumentTitle('Projects', 'Projects by Muralidhara Bhat KS — backend systems, telemetry pipelines, microservices, and full-stack engineering work from Bosch and Netcracker.')
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const { data: projects, loading } = useProjects()

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((project) => project.category)))
    return ['All', ...unique]
  }, [projects])

  const visibleProjects = useMemo(() => {
    return projects.filter((project) => {
      const inCategory = activeCategory === 'All' || project.category === activeCategory
      const normalized = `${project.title} ${project.description} ${project.stack.join(' ')}`.toLowerCase()
      const matchesSearch = normalized.includes(query.toLowerCase().trim())
      return inCategory && matchesSearch
    })
  }, [activeCategory, query, projects])

  const hasFilters = activeCategory !== 'All' || query.trim().length > 0
  const activeFilterLabel =
    activeCategory !== 'All'
      ? activeCategory
      : query.trim().length > 0
        ? `Search: ${query.trim()}`
        : null

  if (loading) {
    return (
      <PageLayout>
        <main className="container section-block reveal">
          <section className="page-loading-panel" aria-busy="true" aria-live="polite">
            <div className="loading-line loading-line-lg" />
            <div className="loading-line loading-line-md" />
            <div className="loading-grid">
              <div className="loading-card" />
              <div className="loading-card" />
              <div className="loading-card" />
            </div>
          </section>
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

        <p>Selected work across backend systems, full-stack delivery, and performance-focused engineering.</p>

        <div className="projects-toolbar">
          <div className="listing-summary">
            <p className="meta">Explore projects</p>
            <p>{visibleProjects.length} result{visibleProjects.length === 1 ? '' : 's'} visible</p>
          </div>

          {activeFilterLabel ? (
            <div className="active-filter-row" aria-label="Active project filters">
              <span className="meta">Active filter</span>
              <button
                type="button"
                className="filter-pill"
                onClick={() => {
                  setActiveCategory('All')
                  setQuery('')
                }}
                title={activeFilterLabel}
              >
                {activeFilterLabel}
                <span aria-hidden="true">×</span>
              </button>
            </div>
          ) : null}

          <div className="projects-filters">
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

            <label className="search-field">
              Search
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title, summary, or stack"
                aria-label="Search projects"
              />
            </label>
          </div>

          {hasFilters ? (
            <button
              type="button"
              className="button ghost projects-clear"
              onClick={() => {
                setActiveCategory('All')
                setQuery('')
              }}
            >
              Clear filters
            </button>
          ) : null}
        </div>

        <div className="card-grid projects-grid">
          {visibleProjects.map((project) => (
            <article className="card" key={project.title}>
              <header className="project-card-header">
                <p className="meta">
                  {project.category} • {project.year}
                </p>
                <h2>{project.title}</h2>
              </header>
              <p>{project.description}</p>
              <p className="outcome">{project.outcome}</p>
              <ul className="chip-row">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="row-links project-card-actions">
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

        {visibleProjects.length === 0 ? (
          <p>No projects match the current filters yet.</p>
        ) : null}
      </main>
    </PageLayout>
  )
}
