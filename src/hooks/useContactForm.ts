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

export function useContactForm() {
  const [contact, setContact] = useState<ContactState>(initialContactState)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [sent, setSent] = useState(false)

  const isValid = useMemo(() => Object.keys(validateContact(contact)).length === 0, [contact])

  function updateField<K extends keyof ContactState>(key: K, value: ContactState[K]) {
    setContact((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(false)

    const validationErrors = validateContact(contact)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

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

  return {
    contact,
    errors,
    sent,
    isValid,
    updateField,
    onSubmit,
  }
}