import { useLanguage } from '../../core/i18n/LanguageContext'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'

export function Experience() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div
          className={`experience__header animate-fade-up${headerVisible ? ' is-visible' : ''}`}
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className="experience__label">{t.experience.sectionLabel}</span>
          <div className="experience__label-divider" />
          <h2 className="experience__title">
            {t.experience.title.split('\n').map((line, i) => (
              <span key={i} className="experience__title-line">{line}</span>
            ))}
          </h2>
          <p className="experience__subtitle">{t.experience.subtitle}</p>
        </div>

       
      </div>
    </section>
  )
}
