import { useState } from 'react'
import { useLanguage } from '../../core/i18n/LanguageContext'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="testimonials__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollAnimation(0.1)

  const items = t.testimonials.items
  const total = items.length

  const prev = () => setActive(i => (i - 1 + total) % total)
  const next = () => setActive(i => (i + 1) % total)

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__container">
        <div
          className={`testimonials__header animate-fade-up${headerVisible ? ' is-visible' : ''}`}
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className="testimonials__label">{t.testimonials.sectionLabel}</span>
          <div className="testimonials__label-divider" />
          <h2 className="testimonials__title">
            {t.testimonials.title.split('\n').map((line, i) => (
              <span key={i} className="testimonials__title-line">{line}</span>
            ))}
          </h2>
          <p className="testimonials__subtitle">{t.testimonials.subtitle}</p>
        </div>

        <div
          className={`testimonials__body animate-fade-up${bodyVisible ? ' is-visible' : ''}`}
          ref={bodyRef as React.RefObject<HTMLDivElement>}
        >
          {/* Featured card */}
          <div className="testimonials__featured" aria-live="polite" aria-atomic="true">
            <div className="testimonials__featured-quote" aria-hidden="true">"</div>
            <StarRating />
            <blockquote className="testimonials__featured-text">
              {items[active].text}
            </blockquote>
            <div className="testimonials__featured-meta">
              <div className="testimonials__featured-avatar" aria-hidden="true">
                {items[active].name.charAt(0)}
              </div>
              <div>
                <p className="testimonials__featured-name">{items[active].name}</p>
                <p className="testimonials__featured-detail">
                  {items[active].service} · {items[active].location}
                </p>
              </div>
            </div>

            <div className="testimonials__controls">
              <button
                className="testimonials__arrow"
                onClick={prev}
                aria-label="Previous review"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>

              <div className="testimonials__dots" role="tablist" aria-label="Review navigation">
                {items.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonials__dot${i === active ? ' testimonials__dot--active' : ''}`}
                    onClick={() => setActive(i)}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Review ${i + 1} of ${total}`}
                  />
                ))}
              </div>

              <button
                className="testimonials__arrow"
                onClick={next}
                aria-label="Next review"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Side list of other reviews */}
          <div className="testimonials__list" aria-label="All reviews">
            {items.map((item, i) => (
              <button
                key={i}
                className={`testimonials__list-item${i === active ? ' testimonials__list-item--active' : ''}`}
                onClick={() => setActive(i)}
                aria-current={i === active}
              >
                <div className="testimonials__list-avatar" aria-hidden="true">
                  {item.name.charAt(0)}
                </div>
                <div className="testimonials__list-info">
                  <span className="testimonials__list-name">{item.name}</span>
                  <span className="testimonials__list-service">{item.service}</span>
                </div>
                <StarRating count={5} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
