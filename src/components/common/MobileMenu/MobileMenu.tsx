import { useEffect } from 'react'
import type { ReactElement } from 'react'
import { createPortal } from 'react-dom'
import type { Language } from '../../../core/types'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: Array<{ id: string; label: string }>
  language: Language
  onLanguageChange: (lang: Language) => void
  theme: 'light' | 'dark'
  onThemeToggle: () => void
  onNavClick: (id: string) => void
  languageFlags: Record<Language, ReactElement>
}

export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
  onNavClick,
  languageFlags,
}: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleNavClick = (id: string) => {
    onNavClick(id)
    onClose()
  }

  if (!isOpen) return null

  return createPortal(
    <div className="mobile-menu">
      {/* Backdrop overlay */}
      <div
        className="mobile-menu__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu drawer */}
      <div className="mobile-menu__drawer">
        {/* Header with close button */}
        <div className="mobile-menu__header">
          <button
            className="mobile-menu__close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          <ul className="mobile-menu__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className="mobile-menu__link"
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (theme + language) */}
        <div className="mobile-menu__actions">
          {/* Language switcher */}
          <div className="mobile-menu__lang">
            <span className="mobile-menu__lang-label">Idioma / Language</span>
            <div className="mobile-menu__lang-buttons">
              {(['en', 'es'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  className={`mobile-menu__lang-btn${
                    language === lang ? ' mobile-menu__lang-btn--active' : ''
                  }`}
                  onClick={() => onLanguageChange(lang)}
                  aria-label={`Switch to ${lang === 'en' ? 'English' : 'Spanish'}`}
                  title={lang === 'en' ? 'English' : 'Español'}
                >
                  {languageFlags[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Theme toggle */}
          <button
            className="mobile-menu__theme"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span className="mobile-menu__theme-label">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
            {theme === 'dark' ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
