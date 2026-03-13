import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { blogPosts } from '../content/blogPosts'
import { projects } from '../content/projects'
import { siteContent } from '../content/siteContent'
import { toReadableDate } from '../utils/date'

type ContactState = {
  name: string
  email: string
  message: string
}

const initialContactState: ContactState = {
  name: '',
  email: '',
  message: '',
}

export function HomePage() {
  const [contact, setContact] = useState<ContactState>(initialContactState)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const featuredPosts = useMemo(() => blogPosts.slice(0, 3), [])
  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured).slice(0, 3),
    [],
  )

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSent(false)

    if (!contact.name || !contact.email || !contact.message) {
      setError('Please complete all fields before sending.')
      return
    }

    const mailto = new URL(`mailto:${siteContent.contactEmail}`)
    mailto.searchParams.set('subject', `Portfolio inquiry from ${contact.name}`)
    mailto.searchParams.set(
      'body',
      `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`,
    )
    window.location.href = mailto.toString()
    setSent(true)
    setContact(initialContactState)
  }

  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="hero-section container">
          <p className="eyebrow">{siteContent.location}</p>
          <h1>{siteContent.headline}</h1>
          <p className="hero-copy">{siteContent.subheadline}</p>
          <p className="hero-intro">{siteContent.about[0]}</p>

          <div className="hero-kpis">
            <article>
              <p className="meta">Projects</p>
              <strong>{projects.length}+</strong>
            </article>
            <article>
              <p className="meta">Articles</p>
              <strong>{blogPosts.length}</strong>
            </article>
            <article>
              <p className="meta">Core Stack</p>
              <strong>{siteContent.skills.length}</strong>
            </article>
          </div>

          <div className="hero-actions">
            <Link className="button solid" to="/projects">
              Explore all projects
            </Link>
            <a className="button ghost" href={siteContent.resumeUrl} download>
              Download resume
            </a>
          </div>
        </section>

        <section id="focus" className="container section-block split-layout">
          <div>
            <h2>Focus</h2>
            <p>{siteContent.about[1]}</p>
          </div>
          <ul className="chip-row">
            {siteContent.skills.slice(0, 8).map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="featured-projects" className="container section-block">
          <div className="section-head">
            <h2>Featured Work</h2>
            <Link to="/projects">See full archive</Link>
          </div>
          <div className="card-grid">
            {featuredProjects.map((project) => (
              <article className="card" key={project.title}>
                <p className="meta">
                  {project.category} • {project.year}
                </p>
                <h3>{project.title}</h3>
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
        </section>

        <section id="blog" className="container section-block">
          <div className="section-head">
            <h2>Latest Blog Posts</h2>
            <Link to="/blog">Browse all</Link>
          </div>
          <div className="card-grid compact">
            {featuredPosts.map((post) => (
              <article className="card" key={post.slug}>
                <p className="meta">
                  {toReadableDate(post.publishedOn)} • {post.readMinutes} min read
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`}>Read post</Link>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="container section-block">
          <h2>Start a Conversation</h2>
          <p>
            For freelance work, full-time roles, or collaborations, share your brief. I usually respond within 24-48 hours.
          </p>

          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Name
              <input
                value={contact.name}
                onChange={(event) =>
                  setContact((prev) => ({ ...prev, name: event.target.value }))
                }
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={contact.email}
                onChange={(event) =>
                  setContact((prev) => ({ ...prev, email: event.target.value }))
                }
                placeholder="your@email.com"
              />
            </label>
            <label>
              Message
              <textarea
                rows={5}
                value={contact.message}
                onChange={(event) =>
                  setContact((prev) => ({ ...prev, message: event.target.value }))
                }
                placeholder="How can I help?"
              />
            </label>
            <button className="button solid" type="submit">
              Send message
            </button>
          </form>

          {error ? <p className="form-status error">{error}</p> : null}
          {sent ? <p className="form-status">Mail app opened with your message draft.</p> : null}
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
