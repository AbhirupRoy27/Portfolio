import React, { useEffect, useState } from 'react'
import { handleDownloadCV } from './pageUtils/handleDownload'

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
  }

  return (
    <main className="bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-2 sm:p-[1.5%] w-full lg:h-[92vh]">
        <div className="mt-10 w-full xl:w-[50%] px-[4%]">
          <h1 className="text-3xl p-3 xl:text-left">
            Hi, I'm
            <span className="text-3xl lg:text-5xl tracking-wide px-3 text-green-600 font-bold">
              Abhirup Roy
            </span>
          </h1>
          <h1 className="flex justify-center xl:justify-start items-center py-3 px-2 text-2xl gap-2">
            <span className="skill-prefix">I'm a </span>
            <span className="animated-skill font-bold ">
              {skills[currentSkillIndex]}
            </span>
          </h1>
          <p
            className="text-xl lg:text-2xl lg:text-start my-6 text-gray-400"
            title="About Abhirup Roy"
          >
            Passionate <b className="text-gray-200">Full stack dev</b> crafting
            beautiful, responsive web experiences for the users. I blend
            projects with clean and easy to maintain codebase to build modern
            applications that helps prople. Specialized and committed to
            delivering pixel-perfect, performant solutions.
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
        <div className="flex justify-center rounded-md lg:rounded-full p-15 sm:p-4 lg:p-0 lg:hover:p-4 duration-300 w-full sm:w-[50%] lg:shadow-xl lg:shadow-white/30">
          <img
            className="rounded-md lg:rounded-full lg:shadow-xl lg:shadow-black/30 "
            src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1759126014/profile_ucj6m8.png"
            alt="Profile"
            title="Photo Abhirup Roy"
          />
        </div>
      </div>
    </main>
  )
}

export default Homepage
