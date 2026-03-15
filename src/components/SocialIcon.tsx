type SocialIconProps = {
  label: string
}

export function SocialIcon({ label }: SocialIconProps) {
  const key = label.toLowerCase()

  if (key.includes('github')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" role="presentation">
        <path
          fill="currentColor"
          d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6V21c-3.3.7-4-1.4-4-1.4a3.2 3.2 0 0 0-1.3-1.7c-1.1-.8.1-.8.1-.8a2.6 2.6 0 0 1 1.9 1.3A2.7 2.7 0 0 0 9.2 20c.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.1s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.2-1.5 3.2-1.2 3.2-1.2.5 1.2.2 2.4.1 3.1a4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .5.4.9 1.1.9 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5"
        />
      </svg>
    )
  }

  if (key.includes('linkedin')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" role="presentation">
        <path
          fill="currentColor"
          d="M5 3.5A1.5 1.5 0 1 0 5 6.5 1.5 1.5 0 0 0 5 3.5M3.5 8h3V20h-3zm5 0h2.9v1.7h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.9V20h-3v-6c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V20h-3z"
        />
      </svg>
    )
  }

  if (key === 'x' || key.includes('twitter')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" role="presentation">
        <path
          fill="currentColor"
          d="M18.9 3h2.8l-6.2 7 7.2 10h-5.6l-4.4-5.7L7.7 20H4.9l6.6-7.5L4.6 3h5.7l4 5.2z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="presentation">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
    </svg>
  )
}
