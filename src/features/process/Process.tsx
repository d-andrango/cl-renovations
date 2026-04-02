import { useLanguage } from '../../core/i18n/LanguageContext'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'

export function Process() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation(0.05)

  return (
    <section id="process" className="process">
      <div className="process__container">
        <div
          className={`process__header animate-fade-up${headerVisible ? ' is-visible' : ''}`}
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className="process__label">{t.process.sectionLabel}</span>
          <div className="process__label-divider" />
          <h2 className="process__title">
            {t.process.title.split('\n').map((line, i) => (
              <span key={i} className="process__title-line">{line}</span>
            ))}
          </h2>
          <p className="process__subtitle">{t.process.subtitle}</p>
        </div>

        <div
          className={`process__steps animate-fade-up${stepsVisible ? ' is-visible' : ''}`}
          ref={stepsRef as React.RefObject<HTMLDivElement>}
        >
          {t.process.steps.map((step, i) => (
            <div key={step.number} className={`process__step stagger-${i + 1}`}>
              <div className="process__step-number" aria-hidden="true">
                {step.number}
              </div>
              {i < t.process.steps.length - 1 && (
                <div className="process__step-connector" aria-hidden="true" />
              )}
              <div className="process__step-content">
                <div className="process__step-dot" aria-hidden="true" />
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
