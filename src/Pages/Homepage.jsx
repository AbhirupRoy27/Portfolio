import React, { useEffect, useState } from 'react'
import { handleDownloadCV } from '../utils/pageUtils/handleDownload'
import { ArrowBigRight, ArrowRight, Download } from 'lucide-react'
import {
  Icons_express,
  Icons_mongoDb,
  Icons_node,
  Icons_React,
  Icons_tailwind,
} from '../assets/icons/Icons'

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
    <main className="bg-[#0D1117] flex justify-center items-center py-5 sm:py-20">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-2 sm:p-[1.5%]">
        <div className="mt-10 w-full xl:w-2/3 px-[4%]">
          <div className="flex justify-center items-center xl:justify-start">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-3 sm:mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group">
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
            <h1 className="text-xl sm:text-3xl py-3 xl:text-left text-gray-50 flex justify-center items-center lg:items-start xl:justify-start ">
              Hi, I'm
              <span className="text-3xl sm:text-4xl lg:text-5xl px-3 font-semibold font-mono">
                Abhirup Roy.
              </span>
            </h1>
            <h1 className="flex justify-center xl:justify-start items-center py-3 text-2xl gap-2">
              <span className="text-white font-thin">I'm a </span>
              <span className="text-gray-400 font-bold animated-skill">
                {skills[currentSkillIndex]}
              </span>
            </h1>
            <div className="text-xl text-slate-300 mb-6 sm:mb-12 max-w-3xl leading-loose text-center xl:text-start">
              I build interactive web apps using{` `}
              <Icons_React />, <Icons_node />, <Icons_express />, and{' '}
              <Icons_mongoDb /> With a focus on UI design with{' '}
              <Icons_tailwind />. Building scalable, production-ready
              applications with clean architecture.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
              <button
                onClick={handleHeroButtonClick}
                className="group relative px-4 sm:px-6 py-3 bg-slate-300 font-semibold rounded-xl overflow-hidden hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300 flex items-center  justify-center sm:justify-start"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowBigRight />
                </span>
              </button>
              <button
                onClick={handleDownloadCV}
                className="group px-4 sm:px-6  py-3 bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 hover:scale-103 flex items-center justify-center sm:justify-start gap-2"
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
            src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1763961226/Profile_Abhirup_yudedc.png"
            alt="Profile"
            title="Photo Abhirup Roy"
          />
        </div>
      </div>
    </main>
  )
}

export default Homepage
