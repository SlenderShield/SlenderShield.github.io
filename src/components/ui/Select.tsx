import React, { forwardRef } from 'react'
import type { SelectHTMLAttributes } from 'react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  isRequired?: boolean
  options: Array<{ value: string; label: string }>
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, isRequired = false, options, id, className = '', ...props }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).slice(2, 9)}`
    const classes = ['select', error ? 'input-error' : '', className].filter(Boolean).join(' ')

    return (
      <div className="field-group">
        {label && (
          <label htmlFor={selectId} className="field-label">
            {label}
            {isRequired && <span className="required-indicator">*</span>}
          </label>
        )}

        <select
          ref={ref}
          id={selectId}
          className={classes}
          aria-invalid={!!error}
          aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error ? (
          <p id={`${selectId}-error`} className="field-error" role="alert">
            {error}
          </p>
        ) : (
          helperText && (
            <p id={`${selectId}-helper`} className="field-help">
              {helperText}
            </p>
          )
        )}
      </div>
    )
  },
)

Select.displayName = 'Select'
