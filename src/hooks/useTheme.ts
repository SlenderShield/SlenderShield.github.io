import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'portfolio-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((previous) => (previous === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}
