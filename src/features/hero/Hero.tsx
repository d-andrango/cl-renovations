import { useLanguage } from '../../core/i18n/LanguageContext'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'

export function Hero() {
  const { t } = useLanguage()
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.1)

  const stats = [
    { value: t.hero.yearsValue, label: t.hero.yearsLabel },
    { value: t.hero.clientsValue, label: t.hero.clientsLabel },
    { value: t.hero.projectsValue, label: t.hero.projectsLabel },
  ]

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__background" aria-hidden="true">
        <video
          className="hero__bg-video"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__bg-overlay" />
        <div className="hero__bg-gradient" />
        <div className="hero__bg-grid" />
      </div>

      <div className="hero__container">
        <div className="hero__content animate-fade-up is-visible">
          <p className="hero__tagline">{t.hero.tagline}</p>
          <h1 className="hero__title">
            {t.hero.title.split('\n').map((line, i) => (
              <span key={i} className="hero__title-line">{line}</span>
            ))}
          </h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <button
            className="hero__cta"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.hero.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>

          <div className="hero__emblem animate-fade-in is-visible" aria-hidden="true">
            <div className="hero__emblem-inner">
              <img 
                src="/cl-renovations-logo.png" 
                alt="CL Renovations" 
                className="hero__emblem-logo"
              />
            </div>
            <div className="hero__emblem-ring hero__emblem-ring--1" />
            <div className="hero__emblem-ring hero__emblem-ring--2" />
          </div>
        </div>
      </div>

      <div
        className={`hero__stats animate-fade-up${statsVisible ? ' is-visible' : ''}`}
        ref={statsRef as React.RefObject<HTMLDivElement>}
      >
        <div className="hero__stats-container">
          {stats.map((stat, i) => (
            <div key={i} className={`hero__stat stagger-${i + 1}`}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        className="hero__scroll-hint"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to services"
      >
        <div className="hero__scroll-hint-line" />
      </button>
    </section>
  )
}
