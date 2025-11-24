import React, { useEffect, useState } from 'react'
import { handleDownloadCV } from './pageUtils/handleDownload'
import { ArrowBigRight, ArrowRight, Download } from 'lucide-react'

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
    setActiveSection('recent-work')
  }

  return (
    <main className="bg-[#0D1117] flex justify-center items-center">
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
          <div className="border-b-1 pb-8 border-gray-300/20">
            <h1 className="text-3xl p-3 xl:text-left text-gray-50 flex flex-col lg:flex-row justify-center items-center lg:items-start xl:justify-start ">
              Hi, I'm
              <span className="text-4xl lg:text-5xl px-3 text-green-600 font-semibold font-mono">
                Abhirup Roy.
              </span>
            </h1>
            <h1 className="flex justify-center xl:justify-start items-center py-3 px-2 text-2xl gap-2">
              <span className="text-white font-thin">I'm a </span>
              <span className="text-gray-400 font-bold animated-skill">
                {skills[currentSkillIndex]}
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl leading-relaxed text-center xl:text-start">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
              <button
                onClick={handleHeroButtonClick}
                className="group relative px-4 sm:px-6 py-3 bg-gradient-to-r from-slate-300 to-slate-500 text-gray-950 hover:text-white font-semibold rounded-xl overflow-hidden hover:shadow-xl hover:shadow-gray-500/50 transition-all duration-300 hover:scale-105 flex items-center  justify-center sm:justify-start"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowBigRight />
                </span>
              </button>
              <button
                onClick={handleDownloadCV}
                className="group px-4 sm:px-6  py-3 bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center sm:justify-start gap-2"
              >
                <Download />
                Download Resume
              </button>
            </div>
          </div>
        </div>
        <div className="flex rounded-full p-6 md:p-0 lg:hover:p-4 duration-300 h-100 lg:h-fit lg:w-1/3 lg:shadow-xl lg:shadow-white/30 my-10">
          <img
            className=" rounded-full lg:shadow-xl lg:shadow-black/30 "
            src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1762763628/Profile_pcqchp.png"
            alt="Profile"
            title="Photo Abhirup Roy"
          />
        </div>
      </div>
    </main>
  )
}

export default Homepage
