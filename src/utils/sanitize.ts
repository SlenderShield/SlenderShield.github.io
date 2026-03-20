import DOMPurify from 'dompurify'

const allowedProtocols = new Set(['https:', 'http:'])

export function sanitizeHtml(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'b', 'i', 'u', 'code', 'pre', 'span', 'ul', 'ol', 'li', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
    FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed'],
  })
}

export function sanitizeUrl(input: string | undefined): string | null {
  if (!input) return null
  const trimmed = input.trim()
  if (!trimmed) return null

  if (trimmed.startsWith('/')) {
    return trimmed
  }

  try {
    const parsed = new URL(trimmed)
    if (!allowedProtocols.has(parsed.protocol)) {
      return null
    }
    return parsed.toString()
  } catch {
    return null
  }
}

export function sanitizeYouTubeId(raw: string): string | null {
  const candidate = raw.trim()
  if (!/^[a-zA-Z0-9_-]{11}$/.test(candidate)) {
    return null
  }
  return candidate
}
