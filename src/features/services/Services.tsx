import { useLanguage } from '../../core/i18n/LanguageContext'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  renovations: {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=75&fit=crop&crop=center',
    alt: 'Modern kitchen renovation with clean white cabinets',
  },
  carpentry: {
    src: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=700&q=75&fit=crop&crop=center',
    alt: 'Bespoke wooden carpentry detail and craftsmanship',
  },
  cleaning: {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75&fit=crop&crop=center',
    alt: 'Spotless bathroom after professional deep cleaning',
  },
}

const SERVICE_ICONS = {
  renovations: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  carpentry: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  cleaning: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 0 0 6.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 0 0 6.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
    </svg>
  ),
}

export function Services() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1)

  const services = [
    { key: 'renovations', ...t.services.renovations },
    { key: 'carpentry', ...t.services.carpentry },
    { key: 'cleaning', ...t.services.cleaning },
  ] as const

  return (
    <section id="services" className="services">
      <div className="services__container">
        <div
          className={`services__header animate-fade-up${headerVisible ? ' is-visible' : ''}`}
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className="services__label">{t.services.sectionLabel}</span>
          <div className="services__label-divider" />
          <h2 className="services__title">{t.services.title}</h2>
          <p className="services__subtitle">{t.services.subtitle}</p>
        </div>

        <div
          className={`services__grid animate-fade-up${cardsVisible ? ' is-visible' : ''}`}
          ref={cardsRef as React.RefObject<HTMLDivElement>}
        >
          {services.map((service, i) => (
            <article key={service.key} className={`services__card stagger-${i + 1}`}>
              <div className="services__card-image">
                <img
                  src={SERVICE_IMAGES[service.key].src}
                  alt={SERVICE_IMAGES[service.key].alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="services__card-image-overlay" aria-hidden="true" />
              </div>
              <div className="services__card-top">
                <div className="services__card-icon-wrap">
                  {SERVICE_ICONS[service.key]}
                </div>
                <span className="services__card-number" aria-hidden="true">0{i + 1}</span>
              </div>
              <div className="services__card-body">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
