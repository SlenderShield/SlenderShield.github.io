import { PageLayout } from '../components/PageLayout';
import { ContactBriefForm } from '../components/ContactBriefForm';
import { SocialIcon } from '../components/SocialIcon';
import { useContactForm } from '../hooks/useContactForm';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { siteContent } from '../content/siteContent';

export function ContactPage() {
  useDocumentTitle(
    'Contact',
    'Get in touch for software engineering roles, distributed systems projects, and technical collaborations.',
  );
  const { contact, errors, submitting, submitStatus, submitMessage, isValid, updateField, onSubmit } =
    useContactForm();

  return (
    <PageLayout>
      <main className="container section-block reveal">
        <h1>Contact</h1>
        <p>
          Share your timeline, goals, and constraints. I am open to software
          engineering roles, distributed systems projects, and technical
          collaborations.
        </p>

        <section className="contact-layout reveal">
          <article className="clean-panel">
            <h2>Direct Channels</h2>
            <p>
              Email:{' '}
              <a href={`mailto:${siteContent.contactEmail}`}>
                {siteContent.contactEmail}
              </a>
            </p>
            <div className="social-inline">
              {siteContent.socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                >
                  <SocialIcon label={item.label} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            <p className="meta">Typical response time: within 24–48 hours.</p>
          </article>

          <ContactBriefForm
            contact={contact}
            errors={errors}
            submitting={submitting}
            submitStatus={submitStatus}
            submitMessage={submitMessage}
            isValid={isValid}
            onSubmit={onSubmit}
            onFieldChange={updateField}
          />
        </section>
      </main>
    </PageLayout>
  );
}
