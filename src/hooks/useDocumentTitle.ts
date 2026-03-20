import { useEffect } from 'react'
import { SITE_NAME, SITE_URL } from '../config/site'

const siteBase = SITE_URL
const siteName = SITE_NAME

function upsertMeta(selector: string, attrs: Record<string, string>) {
  const existing = document.querySelector(selector)
  const meta = existing instanceof HTMLMetaElement ? existing : document.createElement('meta')
  Object.entries(attrs).forEach(([key, value]) => meta.setAttribute(key, value))
  if (!existing) document.head.appendChild(meta)
}

function upsertCanonical(url: string) {
  const existing = document.querySelector('link[rel="canonical"]')
  const link = existing instanceof HTMLLinkElement ? existing : document.createElement('link')
  link.setAttribute('rel', 'canonical')
  link.setAttribute('href', url)
  if (!existing) document.head.appendChild(link)
}

type SeoOptions = {
  description?: string
  path?: string
  noIndex?: boolean
  structuredData?: Record<string, unknown> | null
}

export function useDocumentTitle(title: string, optionsOrDescription?: SeoOptions | string) {
  const options: SeoOptions =
    typeof optionsOrDescription === 'string'
      ? { description: optionsOrDescription }
      : (optionsOrDescription ?? {})

  useEffect(() => {
    const finalTitle = title ? `${title} — ${siteName}` : siteName
    const currentPath = options.path ?? window.location.pathname
    const canonicalUrl = new URL(currentPath, siteBase).toString()
    const description = options.description ?? 'Software engineer building resilient distributed systems and modern backend products.'

    document.title = finalTitle
    upsertCanonical(canonicalUrl)

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: options.noIndex ? 'noindex, nofollow' : 'index, follow',
    })

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: finalTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName })

    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: finalTitle })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })

    const existingStructuredData = document.getElementById('page-structured-data')
    if (options.structuredData) {
      const script = existingStructuredData instanceof HTMLScriptElement
        ? existingStructuredData
        : document.createElement('script')
      script.id = 'page-structured-data'
      script.setAttribute('type', 'application/ld+json')
      script.textContent = JSON.stringify(options.structuredData)
      if (!existingStructuredData) document.head.appendChild(script)
    } else if (existingStructuredData) {
      existingStructuredData.remove()
    }
  }, [title, options.description, options.path, options.noIndex, options.structuredData])
}
