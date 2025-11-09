import React, { useEffect, useState } from 'react'
import { handleDownloadCV } from './pageUtils/handleDownload'
import { ArrowBigDown, ArrowBigRight, ArrowRight, Download } from 'lucide-react'

function Homepage({ setActiveSection }) {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  const skills = [
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
    <main className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-[90vh] flex justify-center items-center">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-2 sm:p-[1.5%]">
        <div className="mt-10 w-full xl:w-2/3 px-[4%]">
          <div className="flex justify-center items-center xl:justify-start">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-slate-200 font-medium text-sm tracking-wide text-center">
                Available for Full-Time Opportunities
              </span>
              <ArrowRight color="white" size={20} />
            </div>
          </div>
          <h1 className="text-3xl p-3 xl:text-left text-gray-50 flex flex-col lg:flex-row justify-center items-center lg:items-start xl:justify-start ">
            Hi, I'm
            <span className="text-5xl lg:text-6xl tracking-wide px-3 text-green-600 font-bold">
              Abhirup Roy
            </span>
          </h1>
          <h1 className="flex justify-center xl:justify-start items-center py-3 px-2 text-2xl gap-2">
            <span className="text-white">I'm a </span>
            <span className="animated-skill font-bold ">
              {skills[currentSkillIndex]}
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed text-center xl:text-start">
            Specializing in{' '}
            <span className="text-cyan-400 font-semibold">React</span>,
            <span className="text-blue-400 font-semibold">{` `}Node.js</span>,
            and
            <span className="text-purple-400 font-semibold">
              {` `}Modern Web Technologies
            </span>
            . Building scalable, production-ready applications with clean
            architecture.
          </p>
          {/* <p
            className="text-xl lg:text-2xl text-center xl:text-start my-6 text-gray-400"
            title="About Abhirup Roy"
          >
            A passionate <b className="text-gray-200">Full stack dev</b>{' '}
            crafting beautiful, responsive web experiences. I blend projects
            with clean and easy to maintain codebase to build modern
            applications that build on MERN Stack. Specialized and committed to
            delivering pixel-perfect, performant solutions.
          </p> */}
          <div className="hero-buttons">
            <button
              onClick={handleHeroButtonClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowBigRight />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={handleDownloadCV}
              className="group px-8 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Download />
              Download Resume
            </button>
          </div>
        </div>
        <div className="flex justify-center rounded-md lg:rounded-full p-15 sm:p-4 lg:p-0 lg:hover:p-4 duration-300 w-full sm:w-[50%] lg:shadow-xl lg:shadow-white/30 lg:m-20">
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
