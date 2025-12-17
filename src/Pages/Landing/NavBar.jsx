import { useState } from 'react'
import handleNavLinkClick from '../../utils/handleNavLinkClick'
import Navlinks from '../../db/navlinks.json'
import NavLogos from '../../components/NavLogos/index'

import { useNavigate } from 'react-router-dom'

function NavBar({ setActiveSection }) {
  const [navOpen, setNavOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="bg-[#232323] flex lg:flex-col flex-row lg:justify-start items-center lg:h-screen">
      <div className="flex flex-col items-center px-4">
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
        <div className="w-full">
          <div
            className="hidden lg:flex py-4 px-1 gap-2"
            onClick={() =>
              handleNavLinkClick('home', setActiveSection, setNavOpen)
            }
          >
            <img
              src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1759126014/profile_ucj6m8.png"
              className="w-13 h-13 bg-white rounded-full"
            />
            <div className="leading-tight">
              <h3 className="text-xl font-bold tracking-wider text-gray-100">
                Abhirup Roy
              </h3>
              <span className="text-sm text-gray-300/50">
                Full Stack Developer
              </span>
            </div>
          </div>
          <ul
            className={`nav-links${
              navOpen ? ' open' : ''
            } lg:flex flex-col z-[100] gap-2 lg:mt-4 w-screen min-w-[354px] lg:w-max lg:min-w-max`}
          >
            {Navlinks.map((link) => (
              <li key={link.id} className="flex items-center">
                <button
                  href={link.path}
                  onClick={() =>
                    handleNavLinkClick(
                      `${link.handle}`,
                      setActiveSection,
                      setNavOpen,
                      navigate
                    )
                  }
                  className="text-[#bdbdbd] text-xl tracking-wide py-2 px-2 duration-300 hover:scale-102 hover:text-shadow-md/30 "
                >
                  {link.link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <NavLogos />
    </nav>
  )
}

export default NavBar
