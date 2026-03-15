import { useEffect } from 'react'

export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    const base = 'Muralidhara Bhat KS'
    document.title = title ? `${title} — ${base}` : base

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', description)
    }
  }, [title, description])
}
