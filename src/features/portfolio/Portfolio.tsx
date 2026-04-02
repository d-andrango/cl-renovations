import { useState } from 'react'
import { useLanguage } from '../../core/i18n/LanguageContext'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'

type Category = 'all' | 'renovations' | 'carpentry' | 'cleaning'

interface PortfolioItem {
  id: number
  category: Exclude<Category, 'all'>
  image: string
  title: string
  location: string
}

const PROJECTS: PortfolioItem[] = [
  {
    id: 1,
    category: 'renovations',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=75&fit=crop&crop=center',
    title: 'Modern Kitchen',
    location: 'Walthamstow, E17',
  },
  {
    id: 2,
    category: 'renovations',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=75&fit=crop&crop=center',
    title: 'Master Bathroom',
    location: 'Hackney, E8',
  },
  {
    id: 3,
    category: 'carpentry',
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=75&fit=crop&crop=center',
    title: 'Fitted Wardrobes',
    location: 'Leytonstone, E11',
  },
  {
    id: 4,
    category: 'renovations',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=75&fit=crop&crop=center',
    title: 'Open Plan Living',
    location: 'Stratford, E15',
  },
  {
    id: 5,
    category: 'carpentry',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=75&fit=crop&crop=center',
    title: 'Bespoke Staircase',
    location: 'Wanstead, E11',
  },
  {
    id: 6,
    category: 'cleaning',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75&fit=crop&crop=center',
    title: 'Post-Renovation Cleaning',
    location: 'Leyton, E10',
  },
]

export function Portfolio() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<Category>('all')
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05)

  const filters: Array<{ key: Category; label: string }> = [
    { key: 'all', label: t.portfolio.filterAll },
    { key: 'renovations', label: t.portfolio.filterRenovations },
    { key: 'carpentry', label: t.portfolio.filterCarpentry },
    { key: 'cleaning', label: t.portfolio.filterCleaning },
  ]

  const visible = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__container">
        <div
          className={`portfolio__header animate-fade-up${headerVisible ? ' is-visible' : ''}`}
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className="portfolio__label">{t.portfolio.sectionLabel}</span>
          <div className="portfolio__label-divider" />
          <h2 className="portfolio__title">
            {t.portfolio.title.split('\n').map((line, i) => (
              <span key={i} className="portfolio__title-line">{line}</span>
            ))}
          </h2>
          <p className="portfolio__subtitle">{t.portfolio.subtitle}</p>
        </div>

        <div className="portfolio__filters" role="group" aria-label="Filter projects">
          {filters.map(f => (
            <button
              key={f.key}
              className={`portfolio__filter-btn${activeFilter === f.key ? ' portfolio__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
              aria-pressed={activeFilter === f.key}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div
          className={`portfolio__grid animate-fade-up${gridVisible ? ' is-visible' : ''}`}
          ref={gridRef as React.RefObject<HTMLDivElement>}
        >
          {visible.map((project, i) => (
            <article
              key={project.id}
              className={`portfolio__item stagger-${(i % 6) + 1}`}
            >
              <div className="portfolio__item-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="portfolio__item-overlay">
                  <span className="portfolio__item-view">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    {t.portfolio.viewLabel}
                  </span>
                </div>
              </div>
              <div className="portfolio__item-info">
                <span className={`portfolio__item-tag portfolio__item-tag--${project.category}`}>
                  {filters.find(f => f.key === project.category)?.label}
                </span>
                <h3 className="portfolio__item-title">{project.title}</h3>
                <p className="portfolio__item-location">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
