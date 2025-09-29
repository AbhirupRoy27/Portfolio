import React, { useEffect, useState } from 'react'

function Homepage({ setActiveSection }) {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  const skills = [
    'Web Developer',
    'React Developer',
    'Problem Solver',
    'Quick Learner',
    'Team Player',
    'Full Stack Developer',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [skills.length])

  const handleHeroButtonClick = () => {
    setActiveSection('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDownloadCV = () => {
    // Use the correct file name with proper encoding for spaces
    const cvUrl = '/AbhirupRoyCV.pdf'

    // Fetch the file first to ensure it exists
    fetch(cvUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('CV file not found')
        }
        return response.blob()
      })
      .then((blob) => {
        // Create a blob URL
        const blobUrl = window.URL.createObjectURL(blob)

        // Create a temporary link element
        const link = document.createElement('a')
        link.href = blobUrl
        link.download = 'Abhirup_Roy_CV.pdf' // The name the file will be downloaded as

        // Append to document, click, and cleanup
        document.body.appendChild(link)
        link.click()

        // Cleanup
        document.body.removeChild(link)
        window.URL.revokeObjectURL(blobUrl)
      })
      .catch((error) => {
        console.error('Error downloading CV:', error)
        alert('Error downloading CV. Please try again.')
      })
  }

  return (
    <main className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="">
            Hi, I'm<span className="name">Abhirup Roy</span>
          </h1>
          <h1 className="hero-title">
            <span className="skill-prefix">I'm a </span>
            <span className="animated-skill">{skills[currentSkillIndex]}</span>
          </h1>
          <p className="hero-intro">
            Passionate front-end developer crafting beautiful, responsive web
            experiences. I blend creative design with clean code to build modern
            applications that users love. Specialized in <b>React.js</b> and
            committed to delivering pixel-perfect, performant solutions.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn" onClick={handleHeroButtonClick}>
              Let's get started
            </button>
            <button
              className="hero-btn download-btn"
              onClick={handleDownloadCV}
            >
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img
            className="hero-img"
            src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1759126014/profile_ucj6m8.png"
            alt="Profile"
          />
        </div>
      </div>
    </main>
  )
}

export default Homepage
