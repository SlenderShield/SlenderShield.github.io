import type { FormEvent } from 'react'
import type { ContactState } from '../hooks/useContactForm'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'
import { Select } from './ui/Select'
import { Alert } from './ui/Alert'

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
  { value: 'project-inquiry', label: 'Project inquiry' },
  { value: 'contract-opportunity', label: 'Contract opportunity' },
  { value: 'full-time-role', label: 'Full-time role' },
  { value: 'collaboration', label: 'Collaboration' },
]

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
      <div className="form-intro">
        <h2>Send a Brief</h2>
        <p className="meta">
          Three required fields only. Keep it short, outcome-focused, and easy to reply to.
        </p>
      </div>

      <div className="form-status-banner" aria-live="polite">
        <p className="meta">✓ Typical response time: 24–48 hours.</p>
        <p className="meta">✓ Nothing is stored beyond the message you send.</p>
      </div>

      <div className="form-grid">
        <Input
          label="Name"
          id="contact-name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          isRequired
          value={contact.name}
          onChange={(event) => onFieldChange('name', event.target.value)}
          error={errors.name}
          helperText="Use the name you want replied to."
        />

        <Input
          label="Email"
          id="contact-email"
          type="email"
          autoComplete="email"
          required
          placeholder="your@email.com"
          isRequired
          value={contact.email}
          onChange={(event) => onFieldChange('email', event.target.value)}
          error={errors.email}
          helperText="I'll reply to this address."
        />

        <Select
          label="Topic"
          id="contact-topic"
          required
          isRequired
          value={contact.topic}
          onChange={(event) => onFieldChange('topic', event.target.value)}
          options={contactTopics}
          error={errors.topic}
        />

        <Textarea
          label="Message"
          id="contact-message"
          required
          isRequired
          placeholder="Your message..."
          value={contact.message}
          onChange={(event) => onFieldChange('message', event.target.value)}
          error={errors.message}
          helperText="Be specific about what you're looking for."
          rows={5}
        />
      </div>

      {submitStatus === 'success' && (
        <Alert type="success" title="Message sent!">
          {submitMessage || 'Thanks for reaching out. I\'ll get back to you soon.'}
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert type="error" title="Oops, something went wrong">
          {submitMessage || 'Failed to send message. Please try again.'}
        </Alert>
      )}

      <Button
        type="submit"
        variant="solid"
        isLoading={submitting}
        disabled={!isValid || submitting}
        fullWidth
      >
        {submitting ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  )
}
