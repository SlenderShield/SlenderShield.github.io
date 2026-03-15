import { useEffect } from 'react'

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const base = 'Muralidhara Bhat KS'
    document.title = title ? `${title} — ${base}` : base
  }, [title])
}
