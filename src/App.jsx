import './App.css'
import { useState, lazy, Suspense } from 'react'
import TechStack from './components/TechStack/TechStack'
import RecentWork from './components/Recentwork/RecentWork'
import Skills from './components/Skills/Skills'
import Projects from './components/Project/Projects'
import Navlinks from './db/navlinks.json'
import Homepage from './Pages/Homepage'

const Footer = lazy(() => import('./components/Footer/index'))
const NavLogos = lazy(() => import('./components/NavLogos/index'))
const Contact = lazy(() => import('./components/Contact/Contact'))

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const handleNavLinkClick = (section) => {
    // e.preventDefault()
    setActiveSection(section)
    setNavOpen(false)
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'contact':
        return (
          <Suspense fallback={<h1 className="p-[1%]">Loading...</h1>}>
            <Contact />
          </Suspense>
        )
      case 'recent-work':
        return <RecentWork />
      case 'skills':
        return <Skills />
      case 'Projects':
        return <Projects />
      case 'home':
      default:
        return (
          <>
            <Suspense fallback={<h1 className="p-[1%]">Loading...</h1>}>
              <Homepage setActiveSection={setActiveSection} />
            </Suspense>
            <TechStack />
            <Skills />
            <div className="recent-work-bg">
              <RecentWork />
            </div>
          </>
        )
    }
  }

  return (
    <div className="app-root">
      <nav className="navbar">
        <div className="navbar-content">
          <div
            className={`hamburger${navOpen ? ' open' : ''}`}
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
            tabIndex={0}
            role="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links${navOpen ? ' open' : ''}`}>
            {Navlinks.map((link) => (
              <li style={{ marginRight: 10 }} key={link.id}>
                <button
                  href={link.path}
                  onClick={() => handleNavLinkClick(`${link.handle}`)}
                >
                  {link.link}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <Suspense fallback={<></>}>
          <NavLogos />
        </Suspense>
      </nav>
      {renderActiveSection()}

      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
