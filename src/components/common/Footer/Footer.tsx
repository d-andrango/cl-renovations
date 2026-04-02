import { useLanguage } from '../../../core/i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo-cl">CL</span>
          <span className="footer__logo-text">Renovations</span>
        </div>
        <p className="footer__tagline">{t.footer.tagline}</p>
        <div className="footer__divider" aria-hidden="true" />
        <p className="footer__rights">{t.footer.rights}</p>
      </div>
    </footer>
  )
}
