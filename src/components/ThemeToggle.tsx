import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
      <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
