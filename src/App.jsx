import { useState, lazy, Suspense } from 'react'
import TechStack from './components/TechStack/TechStack'
import RecentWork from './components/Recentwork/RecentWork'
import Skills from './components/Skills/Skills'
import Navlinks from './db/navlinks.json'
import Homepage from './Pages/Homepage'
import './App.css'
import Footer from './components/Footer/FooterMain'
import Contact from './components/Contact/Contact'
import Overview from './Pages/Overview'

const NavLogos = lazy(() => import('./components/NavLogos/index'))

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const handleNavLinkClick = (section) => {
    setActiveSection(section)
    setNavOpen(false)
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'contact':
        return (
          <div className="flex justify-center items-center">
            <Contact />
          </div>
        )
      case 'recent-work':
        return <RecentWork />
      case 'skills':
        return <Skills />
      case 'home':
      default:
        return (
          <>
            <Suspense fallback={<h1 className="p-1">Loading...</h1>}>
              <Homepage setActiveSection={setActiveSection} />
            </Suspense>
            <Overview />
            {/* <TechStack /> */}
            {/* <Skills /> */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-700 ">
              <RecentWork />
            </div>
          </>
        )
    }
  }

  return (
    <div className=" bg-[#101010] flex flex-col min-w-[354px]">
      <nav className="navbar bg-[#232323] sticky p[1%] top-0 left-0 z-[100] flex justify-center items-center">
        <div className="navbar-content w-full flex items-center">
          <div
            className={`hamburger${navOpen ? ' open' : ''} `}
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
            tabIndex={0}
            role="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={`nav-links${
              navOpen ? ' open' : ''
            } lg:flex xl:ml-10 sm:gap-6 lg:gap-10`}
          >
            {Navlinks.map((link) => (
              <li key={link.id} className="flex items-center justify-center">
                <button
                  href={link.path}
                  onClick={() => handleNavLinkClick(`${link.handle}`)}
                  className="text-[#bdbdbd] text-xl tracking-wide py-6 px-2 font-bold duration-300 hover:scale-104 hover:text-shadow-md/30 "
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
      <Footer />
    </div>
  )
}

export default App
