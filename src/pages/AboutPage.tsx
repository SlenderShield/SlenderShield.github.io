import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { siteContent } from '../content/siteContent'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function AboutPage() {
  useDocumentTitle('About', 'About Muralidhara Bhat KS — software engineer specializing in distributed systems, Spring Boot, Kafka, and cloud-native Java backends. Based in Bengaluru, India.')
  return (
    <PageLayout>
      <main className="container section-block reveal">
        <header className="page-intro">
          <p className="eyebrow">About</p>
          <h1>About me</h1>
          <p>
            I design and build distributed systems, backend platforms, and practical frontend experiences with a focus on clarity and reliability.
          </p>
          <Link to="/contact" className="button ghost button-fit">Let&apos;s connect</Link>
        </header>

        <div className="about-hero">
          <div className="about-content">
            {siteContent.about.map((paragraph, idx) => (
              <p key={idx} className="about-paragraph">{paragraph}</p>
            ))}

            <div className="about-actions chip-row">
              {siteContent.socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="button ghost">
                  {link.label}
                </a>
              ))}
              <a href={siteContent.resumeUrl} target="_blank" rel="noopener noreferrer" className="button solid">
                View / Download Resume
              </a>
            </div>
          </div>
          <div className="about-image-wrapper">
            <img src="/avatar.png" alt="Profile Avatar" className="about-image" />
          </div>
        </div>

        <div className="about-grid">
          <section className="detail-panel reveal">
            <h2>Fast Facts</h2>
            <ul className="fast-facts-list">
              {siteContent.fastFacts?.map((fact, idx) => (
                <li key={idx} className="fact-item">{fact}</li>
              ))}
            </ul>
          </section>

          <section className="detail-panel reveal">
            <h2>What I Bring</h2>
            <ul className="chip-row">
              {siteContent.skills.map((skill) => (
                <li key={skill} className="tech-chip">{skill}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="detail-panel reveal about-section-gap">
          <h2>Experience Snapshot</h2>
          <div className="timeline block-timeline">
            {siteContent.experience.map((item) => (
              <article className="timeline-item timeline-card card" key={`${item.role}-${item.company}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <p className="meta">{item.period}</p>
                  <h3 className="timeline-title">
                    {item.role} <span className="brand-accent">•</span> {item.company}
                  </h3>
                  <ul className="experience-list">
                    {item.summary.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <ul className="chip-row about-links-gap">
                    {item.tech?.map((techItem) => (
                      <li key={techItem} className="tech-chip">{techItem}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
