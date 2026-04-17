import { useLanguage } from '../../../core/i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img 
            src="/cl-renovations-logo.png" 
            alt="CL Renovations" 
            className="footer__logo"
          />
        </div>
        <p className="footer__tagline">{t.footer.tagline}</p>
        <div className="footer__divider" aria-hidden="true" />
        <p className="footer__rights">{t.footer.rights}</p>
      </div>
    </footer>
  )
}
