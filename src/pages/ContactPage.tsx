import { useState } from 'react'
import type { FormEvent } from 'react'
import { PageLayout } from '../components/PageLayout'
import { SocialIcon } from '../components/SocialIcon'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { siteContent } from '../content/siteContent'

type ContactState = {
  name: string
  email: string
  topic: string
  message: string
}

const initialContactState: ContactState = {
  name: '',
  email: '',
  topic: 'Project inquiry',
  message: '',
}

export function ContactPage() {
  useDocumentTitle('Contact')
  const [contact, setContact] = useState<ContactState>(initialContactState)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSent(false)

    if (!contact.name || !contact.email || !contact.message) {
      setError('Please complete all fields before sending.')
      return
    }

    const mailto = new URL(`mailto:${siteContent.contactEmail}`)
    mailto.searchParams.set('subject', `${contact.topic} — ${contact.name}`)
    mailto.searchParams.set(
      'body',
      `Name: ${contact.name}\nEmail: ${contact.email}\nTopic: ${contact.topic}\n\n${contact.message}`,
    )

    window.location.href = mailto.toString()
    setSent(true)
    setContact(initialContactState)
  }

  return (
    <PageLayout>
      <main className="container section-block reveal">
        <h1>Contact</h1>
        <p>
          Share your timeline, goals, and constraints. I am open to software engineering roles, distributed systems projects, and technical collaborations.
        </p>

        <section className="contact-layout reveal">
          <article className="detail-panel">
            <h2>Direct Channels</h2>
            <p>Email: {siteContent.contactEmail}</p>
            <div className="social-inline">
              {siteContent.socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <SocialIcon label={item.label} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            <p className="meta">Typical response time: within 24-48 hours.</p>
          </article>

          <form className="contact-form detail-panel" onSubmit={onSubmit}>
            <h2>Send a Brief</h2>
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
              Topic
              <select
                value={contact.topic}
                onChange={(event) =>
                  setContact((prev) => ({ ...prev, topic: event.target.value }))
                }
              >
                <option>Project inquiry</option>
                <option>Contract opportunity</option>
                <option>Full-time role</option>
                <option>Collaboration</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                rows={6}
                value={contact.message}
                onChange={(event) =>
                  setContact((prev) => ({ ...prev, message: event.target.value }))
                }
                placeholder="Briefly describe scope, budget range, and timeline."
              />
            </label>
            <button className="button solid" type="submit">
              Draft email
            </button>

            {error ? <p className="form-status error">{error}</p> : null}
            {sent ? <p className="form-status">Mail app opened with your prepared brief.</p> : null}
          </form>
        </section>
      </main>
    </PageLayout>
  )
}
