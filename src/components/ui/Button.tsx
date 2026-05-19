import React, { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost' | 'outline' | 'subtle'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children?: ReactNode
  fullWidth?: boolean
  isDestructive?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      size = 'md',
      isLoading = false,
      children,
      fullWidth = false,
      isDestructive = false,
      disabled,
      className = '',
      ...props
    },
    ref,
  ) => {
    const classes = [
      'button',
      variant === 'solid' ? 'solid' : variant === 'ghost' ? 'ghost' : variant === 'outline' ? 'outline' : 'subtle',
      size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : 'btn-md',
      fullWidth ? 'w-full' : '',
      isDestructive ? 'destructive' : '',
      disabled || isLoading ? 'is-disabled' : '',
      className,
    ]

    return (
      <button
        ref={ref}
        className={classes.filter(Boolean).join(' ')}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {isLoading ? (
          <span className="button-loading" aria-hidden="true">
            <span className="spinner" />
            <span className="button-loading-label">{children}</span>
          </span>
        ) : (
          children
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'
