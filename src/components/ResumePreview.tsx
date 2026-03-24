import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { useFocusTrap } from '../hooks/useFocusTrap'

type ResumePreviewProps = {
    resumeUrl: string
    children?: ReactNode
}

export function ResumePreview({ resumeUrl, children }: ResumePreviewProps) {
    const [isOpen, setIsOpen] = useState(false)
    const focusTrapRef = useFocusTrap()

    // Close modal on Escape key
    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    return (
        <>
            <button className="button ghost" type="button" onClick={() => setIsOpen(true)}>
                {children || 'Preview Resume'}
            </button>

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div
                        ref={focusTrapRef}
                        className="modal-content resume-modal"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="resume-modal-title"
                    >
                        <div className="modal-header">
                            <h2 id="resume-modal-title">Resume Preview</h2>
                            <button
                                className="modal-close"
                                type="button"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close resume preview"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="modal-body">
                            <embed src={resumeUrl} type="application/pdf" />
                        </div>
                        <div className="modal-footer">
                            <a href={resumeUrl} download className="button solid">
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
