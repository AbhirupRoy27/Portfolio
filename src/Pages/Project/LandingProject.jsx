import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function LandingProject() {
  return (
    <section
      id="project-layout"
      className="text-white min-w-[354px] animate-slide-in-up w-full"
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center py-4 px-2 sm:px-10">
        <Link
          to="/Project"
          className="uppercase tracking-wider font-mono text-3xl"
        >
          Projects
        </Link>
        <nav className="flex gap-6 uppercase py-2">
          <Link to="1">NextGen</Link>
          <Link to="2">WorkSync</Link>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  )
}

export default LandingProject
