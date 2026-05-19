import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: React.ReactNode
  children?: React.ReactNode
  hideClose?: boolean
}

export function Modal({ isOpen, onClose, title, children, hideClose = false }: ModalProps) {
  const root = typeof document !== 'undefined' ? document.body : null
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen || !panelRef.current) return
    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    )
    focusable[0]?.focus()
  }, [isOpen])

  if (!root) return null

  return ReactDOM.createPortal(
    isOpen ? (
      <div className="modal-overlay" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
        <div className="modal-panel" role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : 'Dialog'} ref={panelRef}>
          <div className="modal-header">
            {title && <h2 className="modal-title">{title}</h2>}
            {!hideClose && (
              <button aria-label="Close" className="modal-close" onClick={onClose}>
                ✕
              </button>
            )}
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    ) : null,
    root,
  )
}

export default Modal
