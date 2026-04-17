export type Language = 'en' | 'es'
export type Theme = 'light' | 'dark'

export interface Translations {
  nav: {
    services: string
    experience: string
    process: string
    portfolio: string
    testimonials: string
    serviceArea: string
    contact: string
  }
  hero: {
    tagline: string
    title: string
    subtitle: string
    cta: string
    yearsLabel: string
    yearsValue: string
    clientsLabel: string
    clientsValue: string
    projectsLabel: string
    projectsValue: string
  }
  services: {
    sectionLabel: string
    title: string
    subtitle: string
    renovations: { title: string; description: string }
    carpentry: { title: string; description: string }
    cleaning: { title: string; description: string }
  }
  experience: {
    sectionLabel: string
    title: string
    subtitle: string
    combinedLabel: string
    combinedYears: string
  }
  serviceArea: {
    sectionLabel: string
    title: string
    subtitle: string
    areas: string[]
  }
  contact: {
    sectionLabel: string
    title: string
    subtitle: string
    namePlaceholder: string
    emailPlaceholder: string
    phonePlaceholder: string
    messagePlaceholder: string
    submitButton: string
    successMessage: string
    phones: string[]
    email: string
    address: string
  }
  process: {
    sectionLabel: string
    title: string
    subtitle: string
    steps: Array<{ number: string; title: string; description: string }>
  }
  portfolio: {
    sectionLabel: string
    title: string
    subtitle: string
    filterAll: string
    filterRenovations: string
    filterCarpentry: string
    filterCleaning: string
    viewLabel: string
  }
  testimonials: {
    sectionLabel: string
    title: string
    subtitle: string
    items: Array<{
      name: string
      location: string
      text: string
      service: string
    }>
  }
  footer: {
    tagline: string
    rights: string
  }
}
