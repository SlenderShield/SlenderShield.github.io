import React, { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ label, id, className = '', ...props }, ref) => {
  const inputId = id || `radio-${Math.random().toString(36).slice(2, 9)}`

  return (
    <label className={`radio ${className}`} htmlFor={inputId}>
      <input id={inputId} type="radio" ref={ref as any} {...props} />
      <span className="radio-control" aria-hidden />
      {label && <span className="radio-label">{label}</span>}
    </label>
  )
})

Radio.displayName = 'Radio'

export default Radio
