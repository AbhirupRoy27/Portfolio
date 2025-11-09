import { CopyrightIcon, Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  return (
    <div className="bg-black min-h-[20vh] p-6 sm:p-10 overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between">
        <div>
          <h1
            className="text-2xl sm:text-4xl bg-gradient-to-br from-gray-100 to-slate-300 bg-clip-text text-transparent tracking-wide font-semibold"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Abhirup Roy
          </h1>
          <p className="text-[12px] text-gray-400 font-mono ">
            Full-Stack JavaScript Developer
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center text-white">
          <a
            href="https://github.com/AbhirupRoy27"
            target="_blank"
            className="w-10 h-10 rounded-lg bg-[#161B22] border border-[#30363D] flex items-center justify-center text-[#9AA0A6] hover:text-[#06B6D4] hover:border-[#06B6D4] transition-all duration-200"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/abhirup-roy-60ab95225/"
            target="_blank"
            className="w-10 h-10 rounded-lg bg-[#161B22] border border-[#30363D] flex items-center justify-center text-[#9AA0A6] hover:text-[#06B6D4] hover:border-[#06B6D4] transition-all duration-200"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:rabhirup605@gamil.com"
            className="w-10 h-10 rounded-lg bg-[#161B22] border border-[#30363D] flex items-center justify-center text-[#9AA0A6] hover:text-[#06B6D4] hover:border-[#06B6D4] transition-all duration-200"
          >
            <Mail />
          </a>
        </div>
      </div>
      <div className="border-t border-white flex flex-col sm:flex-row justify-between items-center text-gray-100 pt-2 mt-4 ">
        <p className="text-slate-100 text-[12px] sm:text-sm text-center sm:text-start flex items-center gap-1">
          <CopyrightIcon size={15} />
          <b className="font-mono tracking-wider"> Abhirup Roy</b>
        </p>
        <p className="text-sm text-gray-500 mt-2 sm:mt-0 text-center">
          All rights reserved. Built with passion and modern tech.
        </p>
      </div>
    </div>
  )
}

export default Footer
