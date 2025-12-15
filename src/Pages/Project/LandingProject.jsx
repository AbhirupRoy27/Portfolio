import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function LandingProject() {
  return (
    <section id="project-layout" className="text-white min-w-[354px]">
      <div className="flex justify-between items-center py-4 px-2 sm:px-10">
        <h1 className="uppercase tracking-wider font-mono text-3xl">
          Projects
        </h1>
        <nav className="flex gap-6 uppercase">
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
