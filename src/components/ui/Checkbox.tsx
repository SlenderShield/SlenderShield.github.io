import React, { forwardRef, useEffect } from 'react'
import type { InputHTMLAttributes } from 'react'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode
  indeterminate?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, indeterminate = false, id, className = '', ...props }, ref) => {
  const inputId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`

  useEffect(() => {
    if (!ref || typeof ref === 'function') return
    // nothing — consuming component can set ref to manage indeterminate
  }, [ref])

  return (
    <label className={`checkbox ${className}`} htmlFor={inputId}>
      <input id={inputId} type="checkbox" ref={ref as any} {...props} />
      <span className="checkbox-control" aria-hidden />
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
