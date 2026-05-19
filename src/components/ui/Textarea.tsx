import React, { forwardRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  isRequired?: boolean
  rows?: number
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, isRequired = false, rows = 4, id, className = '', ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).slice(2, 9)}`
    const classes = ['textarea', error ? 'input-error' : '', className].filter(Boolean).join(' ')

    return (
      <div className="field-group">
        {label && (
          <label htmlFor={textareaId} className="field-label">
            {label}
            {isRequired && <span className="required-indicator">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={classes}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
          {...props}
        />

        {error ? (
          <p id={`${textareaId}-error`} className="field-error" role="alert">
            {error}
          </p>
        ) : (
          helperText && (
            <p id={`${textareaId}-helper`} className="field-help">
              {helperText}
            </p>
          )
        )}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
