import type { FormEvent } from 'react'
import type { ContactState } from '../hooks/useContactForm'

type ContactBriefFormProps = {
  contact: ContactState
  errors: Partial<ContactState>
  submitting: boolean
  submitStatus: 'idle' | 'success' | 'error'
  submitMessage: string
  isValid: boolean
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onFieldChange: <K extends keyof ContactState>(
    key: K,
    value: ContactState[K],
  ) => void
}

const contactTopics = [
  'Project inquiry',
  'Contract opportunity',
  'Full-time role',
  'Collaboration',
] as const;

export function ContactBriefForm({
  contact,
  errors,
  submitting,
  submitStatus,
  submitMessage,
  isValid,
  onSubmit,
  onFieldChange,
}: ContactBriefFormProps) {
  return (
    <form className="contact-form clean-panel" onSubmit={onSubmit} noValidate>
      <h2>Send a Brief</h2>
      <p className="meta">
        Three required fields only. Keep it short and outcome-focused.
      </p>

      <label htmlFor="contact-name">
        Name{' '}
        <span className="required-indicator" aria-hidden="true">
          *
        </span>
      </label>
      <input
        id="contact-name"
        type="text"
        name="name"
        autoComplete="name"
        required
        aria-required="true"
        aria-describedby={errors.name ? 'error-name' : undefined}
        aria-invalid={!!errors.name}
        value={contact.name}
        onChange={(event) => onFieldChange('name', event.target.value)}
        placeholder="Your name"
      />
      {errors.name && (
        <p id="error-name" className="field-error" role="alert">
          {errors.name}
        </p>
      )}

      <label htmlFor="contact-email">
        Email{' '}
        <span className="required-indicator" aria-hidden="true">
          *
        </span>
      </label>
      <input
        id="contact-email"
        type="email"
        name="email"
        autoComplete="email"
        required
        aria-required="true"
        aria-describedby={errors.email ? 'error-email' : undefined}
        aria-invalid={!!errors.email}
        value={contact.email}
        onChange={(event) => onFieldChange('email', event.target.value)}
        placeholder="your@email.com"
      />
      {errors.email && (
        <p id="error-email" className="field-error" role="alert">
          {errors.email}
        </p>
      )}

      <label htmlFor="contact-topic">Topic</label>
      <select
        id="contact-topic"
        name="topic"
        value={contact.topic}
        onChange={(event) => onFieldChange('topic', event.target.value)}
      >
        {contactTopics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>

      <label htmlFor="contact-message">
        Message{' '}
        <span className="required-indicator" aria-hidden="true">
          *
        </span>
      </label>
      <textarea
        id="contact-message"
        name="message"
        rows={6}
        required
        aria-required="true"
        aria-describedby={errors.message ? 'error-message' : undefined}
        aria-invalid={!!errors.message}
        value={contact.message}
        onChange={(event) => onFieldChange('message', event.target.value)}
        placeholder="Briefly describe scope, budget range, and timeline."
      />
      {errors.message && (
        <p id="error-message" className="field-error" role="alert">
          {errors.message}
        </p>
      )}

      <button
        className="button solid button-fit"
        type="submit"
        disabled={!isValid || submitting}
        aria-busy={submitting}
      >
        {submitting ? 'Sending...' : 'Prepare Email Brief'}
      </button>
      <p className="meta">
        Your details are only used to send your brief. Nothing is stored.
      </p>

      {submitStatus === 'success' && (
        <p className="form-status" role="status">
          ✓ {submitMessage}
        </p>
      )}

      {submitStatus === 'error' && (
        <p className="form-status error" role="alert">
          ✗ {submitMessage}
        </p>
      )}
    </form>
  );
}
