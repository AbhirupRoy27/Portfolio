import './App.css'
import { useState, useEffect } from 'react'
import codeImg from './assets/profile.png'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import RecentWork from './components/RecentWork'
import Skills from './components/Skills'

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  
  const skills = [
    "Web Developer",
    "React Developer",
    "Problem Solver",
    "Quick Learner",
    "Team Player"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleNavLinkClick = (section, e) => {
    e.preventDefault()
    setActiveSection(section)
    setNavOpen(false)
  }
  
  const handleHomeClick = (e) => {
    e.preventDefault()
    setActiveSection('home')
    setNavOpen(false)
  }

  const handleHeroButtonClick = () => {
    setActiveSection('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDownloadCV = () => {
    // Use the correct file name with proper encoding for spaces
    const cvUrl = '/ABHIRUP%20ROY%20SD.docx'
    
    // Fetch the file first to ensure it exists
    fetch(cvUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('CV file not found')
        }
        return response.blob()
      })
      .then(blob => {
        // Create a blob URL
        const blobUrl = window.URL.createObjectURL(blob)
        
        // Create a temporary link element
        const link = document.createElement('a')
        link.href = blobUrl
        link.download = 'Abhirup_Roy_CV.docx' // The name the file will be downloaded as
        
        // Append to document, click, and cleanup
        document.body.appendChild(link)
        link.click()
        
        // Cleanup
        document.body.removeChild(link)
        window.URL.revokeObjectURL(blobUrl)
      })
      .catch(error => {
        console.error('Error downloading CV:', error)
        alert('Error downloading CV. Please try again.')
      })
  }

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'contact':
        return <Contact />
      case 'recent-work':
        return <RecentWork />
      case 'skills':
        return <Skills />
      case 'home':
      default:
        return (
          <>
            <main className="hero-section">
              <div className="hero-content">
                <div className="hero-left">
                  <h1 className="hero-title">
                    Hi, I'm<br />
                    <span className="name">Abhirup Roy</span>
                    <br />
                    <span className="skill-wrapper">
                      <span className="skill-prefix">I'm a </span>
                      <span className="animated-skill">{skills[currentSkillIndex]}</span>
                    </span>
                  </h1>
                  <p className="hero-intro">
                    Passionate front-end developer crafting beautiful, responsive web experiences. I blend creative design with clean code to build modern applications 
                    that users love. Specialized in <b>React.js</b> and 
                    committed to delivering pixel-perfect, performant solutions.
                  </p>
                  <div className="hero-buttons">
                    <button className="hero-btn" onClick={handleHeroButtonClick}>Let's get started</button>
                    <button className="hero-btn download-btn" onClick={handleDownloadCV}>
                      <span>Download CV</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="hero-right">
                  <img className="hero-img" src={codeImg} alt="Profile" />
                </div>
              </div>
            </main>
            <TechStack />
            <Skills />
            <div className="recent-work-bg">
              <RecentWork />
            </div>
            <Contact />
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
            <li><a href="/" onClick={handleHomeClick}>Home</a></li>
            <li><a href="#" onClick={(e) => handleNavLinkClick('projects', e)}>Projects</a></li>
            <li><a href="#" onClick={(e) => handleNavLinkClick('skills', e)}>Skills</a></li>
            <li><a href="#" onClick={(e) => handleNavLinkClick('recent-work', e)}>Recent work</a></li>
            <li><a href="#" onClick={(e) => handleNavLinkClick('contact', e)}>Contact</a></li>
          </ul>
          <div className="nav-socials">
            <a href="https://www.linkedin.com/in/abhirup-roy-60ab95225/" aria-label="LinkedIn" className="nav-icon" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/AbhirupRoy27/AbhirupRoy27" aria-label="GitHub" className="nav-icon" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://leetcode.com/u/abhirupRoy27/" aria-label="LeetCode" className="nav-icon" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>
      {renderActiveSection()}
      
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Abhirup Roy. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default App
