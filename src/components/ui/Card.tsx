import React, { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'div' | 'button' | 'article' | 'section'
  title?: string
  variant?: 'elevated' | 'clean'
  children?: React.ReactNode
}

export const Card = forwardRef<HTMLElement, CardProps>(
  ({ as = 'div', title, variant = 'elevated', children, className = '', ...props }, ref) => {
    const Component: any = as
    const classes = ['card', variant === 'clean' ? 'clean-panel' : '', className].filter(Boolean).join(' ')

    const actionable = as === 'button' || typeof props.onClick === 'function'

    return (
      <Component
        ref={ref}
        className={classes}
        tabIndex={actionable ? 0 : undefined}
        role={actionable ? 'button' : undefined}
        {...props}
      >
        {title && <header className="card-header"><h3>{title}</h3></header>}
        <div className="card-body">{children}</div>
      </Component>
    )
  },
)

Card.displayName = 'Card'

export default Card
import type { ReactNode } from 'react'

export interface CardProps {
  /** Card content */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Is the card clickable/hoverable */
  isInteractive?: boolean
  /** Padding size */
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({
  children,
  className = '',
  isInteractive = false,
  padding = 'lg',
}: CardProps) {
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  }[padding]

  const interactiveClass = isInteractive ? 'cursor-pointer transition-all duration-normal hover:shadow-md hover:scale-105' : ''

  return (
    <div
      className={`card ${paddingClasses} ${interactiveClass} ${className}`}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {children}
    </div>
  )
}
