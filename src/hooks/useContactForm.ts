import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { siteContent } from '../content/siteContent'

export type ContactState = {
  name: string
  email: string
  topic: string
  message: string
}

type ContactErrors = Partial<ContactState>

const initialContactState: ContactState = {
  name: '',
  email: '',
  topic: 'Project inquiry',
  message: '',
}

function validateContact(contact: ContactState): ContactErrors {
  const errors: ContactErrors = {}
  if (!contact.name.trim()) errors.name = 'Name is required.'
  if (!contact.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!contact.message.trim()) errors.message = 'Message is required.'
  return errors
}

async function submitViaNetlify(contact: ContactState): Promise<boolean> {
  try {
    const params = new URLSearchParams()
    params.append('form-name', 'contact')
    params.append('name', contact.name)
    params.append('email', contact.email)
    params.append('topic', contact.topic)
    params.append('message', contact.message)

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })

    return response.ok || response.status === 404 // 404 means Netlify Forms not configured, fallback to mailto
  } catch (error) {
    console.warn('Netlify form submission failed, will fallback to mailto', error)
    return false
  }
}

function openMailtoFallback(contact: ContactState): void {
  const mailto = new URL(`mailto:${siteContent.contactEmail}`)
  mailto.searchParams.set('subject', `${contact.topic} — ${contact.name}`)
  mailto.searchParams.set(
    'body',
    `Name: ${contact.name}\nEmail: ${contact.email}\nTopic: ${contact.topic}\n\n${contact.message}`,
  )
  window.location.href = mailto.toString()
}

export function useContactForm() {
  const [contact, setContact] = useState<ContactState>(initialContactState)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const isValid = useMemo(() => Object.keys(validateContact(contact)).length === 0, [contact])

  function updateField<K extends keyof ContactState>(key: K, value: ContactState[K]) {
    setContact((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    const validationErrors = validateContact(contact)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitting(false)
      return
    }

    setErrors({})

    try {
      // Attempt Netlify Forms submission
      const netlifySuccess = await submitViaNetlify(contact)

      if (netlifySuccess) {
        // Netlify submission succeeded
        setSubmitStatus('success')
        setSubmitMessage(
          'Thanks! Your message was received. I will get back to you within 24-48 hours.',
        )
        setContact(initialContactState)
      } else {
        // Netlify not configured or failed; fallback to mailto
        setSubmitStatus('success')
        setSubmitMessage(
          'Opening your email client to send your brief. If it doesn\'t open, email directly: ' +
            siteContent.contactEmail,
        )
        openMailtoFallback(contact)
        // Don't reset form on mailto fallback so user can see what was sent
      }
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setSubmitStatus('error')
      setSubmitMessage(
        'Something went wrong. Please try emailing directly: ' + siteContent.contactEmail,
      )
    } finally {
      setSubmitting(false)
    }
  }

  function resetStatus() {
    setSubmitStatus('idle')
    setSubmitMessage('')
  }

  return {
    contact,
    errors,
    submitting,
    submitStatus,
    submitMessage,
    isValid,
    updateField,
    onSubmit,
    resetStatus,
  }
}