import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import { About, Skills, Strengths } from './sections/Profile'
import Projects from './sections/Projects'
import { Experience, Education, Certifications, Journey } from './sections/Career'
import { Contact, GithubBand } from './sections/Contact'

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-mint focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><Experience /><Education /><Certifications /><Journey /><Strengths /><GithubBand /><Contact />
      </main>
      <Footer />
    </>
  )
}
