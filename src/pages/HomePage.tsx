import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { blogPosts } from '../content/blogPosts'
import { projects } from '../content/projects'
import { siteContent } from '../content/siteContent'
import { toReadableDate } from '../utils/date'

export function HomePage() {
  const featuredPosts = useMemo(() => blogPosts.slice(0, 3), [])
  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured).slice(0, 3),
    [],
  )

  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="hero-section container reveal">
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
            <Link className="button ghost" to="/about">
              About me
            </Link>
            <Link className="button solid" to="/projects">
              Explore all projects
            </Link>
            <a className="button ghost" href={siteContent.resumeUrl} download>
              Download resume
            </a>
          </div>
        </section>

        <section className="container section-block split-layout reveal">
          <div>
            <h2>Focus and Craft</h2>
            <p>{siteContent.about[1]}</p>
            <div className="hero-actions">
              <Link className="button ghost" to="/about">
                Read full story
              </Link>
            </div>
          </div>
          <ul className="chip-row">
            {siteContent.skills.slice(0, 8).map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="container section-block reveal">
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

        <section className="container section-block reveal">
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

        <section className="container section-block reveal">
          <h2>Let&apos;s Build Something</h2>
          <p>Tell me about your project scope, expected timeline, and goals.</p>
          <div className="hero-actions">
            <Link className="button solid" to="/contact">
              Open contact page
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
