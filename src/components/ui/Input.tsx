import React, { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  isRequired?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, helperText, isRequired = false, size = 'md', id, className = '', ...props },
    ref,
  ) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`

    const sizeClass = size === 'sm' ? 'input-sm' : size === 'lg' ? 'input-lg' : 'input-md'

    const classes = ['input', sizeClass, error ? 'input-error' : '', className].filter(Boolean).join(' ')

    return (
      <div className="field-group">
        {label && (
          <label htmlFor={inputId} className="field-label">
            {label}
            {isRequired && <span className="required-indicator">*</span>}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={classes}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />

        {error ? (
          <p id={`${inputId}-error`} className="field-error" role="alert">
            {error}
          </p>
        ) : (
          helperText && (
            <p id={`${inputId}-helper`} className="field-help">
              {helperText}
            </p>
          )
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
