import { useState } from 'react'
import { useLanguage } from '../../core/i18n/LanguageContext'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

export function Contact() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1)

  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string>('')

  // Web3Forms Access Key - Get yours free at https://web3forms.com
  const ACCESS_KEY = 'de686fa7-b97e-4bbf-bd23-b7802e7841bf'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate required fields
    if (!form.name.trim()) {
      setError('Please enter your name')
      return
    }

    if (!form.email.trim()) {
      setError('Please enter your email address')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address')
      return
    }

    if (!form.message.trim()) {
      setError('Please enter a message')
      return
    }

    // Validate minimum message length
    if (form.message.trim().length < 10) {
      setError('Message must be at least 10 characters long')
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          subject: `New Contact from CL Renovations - ${form.name.trim()}`,
          from_name: 'CL Renovations Website',
          // Auto-responder configuration
          replyto: form.email.trim(),
          autoresponse: true,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        setError('Something went wrong. Please try again or contact us directly.')
      }
    } catch (err) {
      setError('Connection error. Please check your internet and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const phoneIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.17-.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )

  const contactInfo = [
    {
      icon: phoneIcon,
      label: 'Phone',
      phones: t.contact.phones,
      isMultiple: true,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email',
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Address',
      value: t.contact.address,
      href: 'https://maps.google.com/?q=Leytonstone+London',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div
          className={`contact__header animate-fade-up${headerVisible ? ' is-visible' : ''}`}
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className="contact__label">{t.contact.sectionLabel}</span>
          <div className="contact__label-divider" />
          <h2 className="contact__title">
            {t.contact.title.split('\n').map((line, i) => (
              <span key={i} className="contact__title-line">{line}</span>
            ))}
          </h2>
          <p className="contact__subtitle">{t.contact.subtitle}</p>
        </div>

        <div
          className={`contact__content animate-fade-up${contentVisible ? ' is-visible' : ''}`}
          ref={contentRef as React.RefObject<HTMLDivElement>}
        >
          <div className="contact__info stagger-1">
            {contactInfo.map((item) => (
              item.isMultiple ? (
                <div key={item.label} className="contact__info-item contact__info-item--static">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div className="contact__info-phones">
                    <span className="contact__info-label">{item.label}</span>
                    {item.phones?.map((phone) => (
                      <div key={phone} className="contact__info-phone-row">
                        <a
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="contact__info-phone-link"
                        >
                          {phone}
                        </a>
                        <a
                          href={`https://wa.me/${phone.replace(/[\s+]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact__whatsapp-btn"
                          aria-label={`WhatsApp ${phone}`}
                          title={`Contact via WhatsApp`}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact__info-item"
                  target={item.label === 'Address' ? '_blank' : undefined}
                  rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </div>
                </a>
              )
            ))}
          </div>

          <div className="contact__form-wrapper stagger-2">
            {submitted ? (
              <div className="contact__success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <p>{t.contact.successMessage}</p>
                <button
                  type="button"
                  className="contact__reset"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                {error && (
                  <div className="contact__error">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    <span>{error}</span>
                  </div>
                )}
                <div className="contact__form-row">
                  <div className="contact__field">
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      className="contact__input"
                      placeholder={`${t.contact.namePlaceholder} *`}
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="contact__field">
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      className="contact__input"
                      placeholder={`${t.contact.emailPlaceholder} *`}
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <input
                    type="tel"
                    name="phone"
                    id="contact-phone"
                    className="contact__input"
                    placeholder={t.contact.phonePlaceholder}
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>
                <div className="contact__field">
                  <textarea
                    name="message"
                    id="contact-message"
                    className="contact__input contact__textarea"
                    placeholder={`${t.contact.messagePlaceholder} *`}
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>
                <p className="contact__required-note">* Required fields</p>
                <button
                  type="submit"
                  className={`contact__submit${submitting ? ' contact__submit--loading' : ''}`}
                  disabled={submitting}
                >
                  {submitting ? (
                    <span className="contact__submit-spinner" aria-hidden="true" />
                  ) : null}
                  {t.contact.submitButton}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
