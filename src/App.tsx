import { ThemeProvider } from './core/theme/ThemeContext'
import { LanguageProvider } from './core/i18n/LanguageContext'
import { Navbar } from './components/common/Navbar/Navbar'
import { Hero } from './features/hero/Hero'
import { Services } from './features/services/Services'
import { Process } from './features/process/Process'
import { Portfolio } from './features/portfolio/Portfolio'
import { Experience } from './features/experience/Experience'
import { Testimonials } from './features/testimonials/Testimonials'
import { ServiceArea } from './features/serviceArea/ServiceArea'
import { Contact } from './features/contact/Contact'
import { Footer } from './components/common/Footer/Footer'

import './components/common/Navbar/Navbar.scss'
import './features/hero/Hero.scss'
import './features/services/Services.scss'
import './features/process/Process.scss'
import './features/portfolio/Portfolio.scss'
import './features/experience/Experience.scss'
import './features/testimonials/Testimonials.scss'
import './features/serviceArea/ServiceArea.scss'
import './features/contact/Contact.scss'
import './components/common/Footer/Footer.scss'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <Portfolio />
          <Experience />
          <Testimonials />
          <ServiceArea />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
