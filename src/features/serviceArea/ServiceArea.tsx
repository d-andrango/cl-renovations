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
          <div className="service-area__map-container">
            <iframe
              className="service-area__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810468847!2d-0.24168!3d51.5287718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d3c0f0a6a45%3A0x2b89a4e5c5b5c5c5!2sEast%20London%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service area map - East London"
            />
            <div className="service-area__map-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>East London</span>
            </div>
          </div>

          <div className="service-area__areas">
            <p className="service-area__areas-heading">Coverage Areas</p>
            <div className="service-area__pills" aria-label="Service coverage areas">
              {t.serviceArea.areas.map((area, i) => (
                <div key={i} className={`service-area__pill stagger-${(i % 6) + 1}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{area}</span>
                </div>
              ))}
            </div>
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
