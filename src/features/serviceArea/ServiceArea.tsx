import { useLanguage } from '../../core/i18n/LanguageContext'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'

export function ServiceArea() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1)

  return (
    <section id="service-area" className="service-area">
      <div className="service-area__container">
        <div
          className={`service-area__header animate-fade-up${headerVisible ? ' is-visible' : ''}`}
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className="service-area__label">{t.serviceArea.sectionLabel}</span>
          <div className="service-area__label-divider" />
          <h2 className="service-area__title">
            {t.serviceArea.title.split('\n').map((line, i) => (
              <span key={i} className="service-area__title-line">{line}</span>
            ))}
          </h2>
          <p className="service-area__subtitle">{t.serviceArea.subtitle}</p>
        </div>

        <div
          className={`service-area__content animate-fade-up${contentVisible ? ' is-visible' : ''}`}
          ref={contentRef as React.RefObject<HTMLDivElement>}
        >
          <div className="service-area__map-placeholder" aria-label="Service area map — East London">
            <div className="service-area__map-inner">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="service-area__map-icon">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <p className="service-area__map-label">East London</p>
              <p className="service-area__map-sublabel">Based in Leytonstone, E11</p>
            </div>
          </div>

          <div className="service-area__areas">
            <p className="service-area__areas-heading">Coverage Areas</p>
            <ul className="service-area__list" aria-label="Service coverage areas">
              {t.serviceArea.areas.map((area, i) => (
                <li key={i} className={`service-area__list-item stagger-${(i % 6) + 1}`}>
                  <span className="service-area__list-dot" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
            <div className="service-area__note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span>Don't see your area? Contact us — we may still cover it.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
