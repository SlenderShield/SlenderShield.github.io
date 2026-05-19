import React from 'react'
import type { ReactNode } from 'react'

export interface AlertProps {
  title?: string
  children: ReactNode
  type?: 'success' | 'error' | 'warning' | 'info'
  icon?: ReactNode
  isDismissible?: boolean
  onDismiss?: () => void
}

const defaultIcons: Record<string, string> = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ⓘ',
}

export function Alert({ title, children, type = 'info', icon, isDismissible = false, onDismiss }: AlertProps) {
  const cls = ['alert', `alert--${type}`].join(' ')
  const emoji = icon ?? defaultIcons[type]

  return (
    <div className={cls} role="status" aria-live="polite">
      <div className="alert__icon" aria-hidden>
        {emoji}
      </div>
      <div className="alert__content">
        {title && (
          <p className="alert__title" aria-hidden={false}>
            {title}
          </p>
        )}
        <div className="alert__message">{children}</div>
      </div>
      {isDismissible && (
        <button type="button" className="alert__dismiss" onClick={onDismiss} aria-label="Dismiss">
          ✕
        </button>
      )}
    </div>
  )
}
