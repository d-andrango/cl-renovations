import { createContext, useContext, useState } from 'react'
import type { Language, Translations } from '../types'
import { en, es } from './translations'

interface LanguageContextValue {
  language: Language
  t: Translations
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const translationsMap: Record<Language, Translations> = { en, es }

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const t = translationsMap[language]

  return (
    <LanguageContext value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
