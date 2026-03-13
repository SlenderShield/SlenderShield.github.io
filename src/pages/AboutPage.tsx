import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { siteContent } from '../content/siteContent'

export function AboutPage() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main className="container section-block reveal">
        <div className="section-head">
          <h1>About</h1>
          <Link to="/contact">Work with me</Link>
        </div>

        <p>{siteContent.about[0]}</p>
        <p>{siteContent.about[1]}</p>

        <section className="detail-panel reveal">
          <h2>What I Bring</h2>
          <ul className="chip-row">
            {siteContent.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="detail-panel reveal">
          <h2>Experience Snapshot</h2>
          <div className="timeline">
            {siteContent.experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.company}`}>
                <p className="meta">{item.period}</p>
                <h3>
                  {item.role} • {item.company}
                </h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
