import { useLanguage } from '../../core/i18n/LanguageContext'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'

export function Experience() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1)

  const members = [
    {
      name: t.experience.fatherName,
      years: t.experience.fatherYears,
      description: t.experience.fatherDescription,
      icon: '👨‍🔧',
      delay: 1,
    },
    {
      name: t.experience.sonName,
      years: t.experience.sonYears,
      description: t.experience.sonDescription,
      icon: '🔧',
      delay: 2,
    },
  ]

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

        <div
          className={`experience__grid animate-fade-up${cardsVisible ? ' is-visible' : ''}`}
          ref={cardsRef as React.RefObject<HTMLDivElement>}
        >
          {members.map(member => (
            <article key={member.name} className={`experience__card stagger-${member.delay}`}>
              <div className="experience__card-accent" aria-hidden="true" />
              <div className="experience__card-header">
                <div className="experience__card-avatar" aria-hidden="true">
                  <div className="experience__card-avatar-inner">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="experience__card-name">{member.name}</h3>
                  <span className="experience__card-years">{member.years}</span>
                </div>
              </div>
              <p className="experience__card-description">{member.description}</p>
            </article>
          ))}

          <div className="experience__combined stagger-3">
            <div className="experience__combined-value">{t.experience.combinedYears}</div>
            <div className="experience__combined-label">{t.experience.combinedLabel}</div>
            <div className="experience__combined-ornament" aria-hidden="true">
              <span>✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
