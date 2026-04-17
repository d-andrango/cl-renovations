import { useState, useEffect } from 'react'
import { useTheme } from '../../../core/theme/ThemeContext'
import { useLanguage } from '../../../core/i18n/LanguageContext'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import type { Language } from '../../../core/types'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { language, t, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { id: 'services', label: t.nav.services },
    { id: 'process', label: t.nav.process },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'experience', label: t.nav.experience },
    { id: 'service-area', label: t.nav.serviceArea },
    { id: 'contact', label: t.nav.contact },
  ]

  const languageFlags = {
    en: (
      <svg width="20" height="15" viewBox="0 0 60 30" aria-hidden="true">
        <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
        <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
      </svg>
    ),
    es: (
      <svg width="20" height="15" viewBox="0 0 750 500" aria-hidden="true">
        <rect width="750" height="500" fill="#c60b1e"/>
        <rect width="750" height="250" y="125" fill="#ffc400"/>
      </svg>
    )
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          <button
            className="navbar__logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="CL Renovations — Back to top"
          >
            <img 
              src="/cl-renovations-logo.png" 
              alt="CL Renovations" 
              className="navbar__logo-img"
            />
          </button>

          {/* Desktop navigation - hidden on mobile */}
          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="navbar__links">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    className="navbar__link"
                    onClick={() => handleNavClick(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            {/* Desktop language + theme - hidden on mobile */}
            <div className="navbar__lang">
              {(['en', 'es'] as Language[]).map(lang => (
                <button
                  key={lang}
                  className={`navbar__lang-btn${language === lang ? ' navbar__lang-btn--active' : ''}`}
                  onClick={() => setLanguage(lang)}
                  aria-label={`Switch to ${lang === 'en' ? 'English' : 'Spanish'}`}
                  title={lang === 'en' ? 'English' : 'Español'}
                >
                  {languageFlags[lang]}
                </button>
              ))}
            </div>

            <button
              className="navbar__theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Hamburger button - only visible on mobile */}
            <button
              className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* New modern mobile menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={navLinks}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={toggleTheme}
        languageFlags={languageFlags}
        onNavClick={handleNavClick}
      />
    </>
  )
}
