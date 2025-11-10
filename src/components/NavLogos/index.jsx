import { Copy, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

function NavLogos() {
  const [copied, setCopied] = useState(false)
  const email = 'rabhirup605@gmail.com'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // reset after 2s
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <div className="w-full px-4 lg:mt-10">
      <span className="hidden lg:block text-md font-thin uppercase text-white/30 pl-2">
        connect
      </span>
      <div className="flex lg:flex-col justify-end lg:justify-start w-full py-2 gap-4">
        <a
          href="https://www.linkedin.com/in/abhirup-roy-60ab95225/"
          aria-label="LinkedIn"
          className="p-2 flex items-center gap-2 hover:bg-[#2a2a2a] rounded-lg border-1 border-[#232323] hover:border-[#4BB543] text-white transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin strokeWidth={1} color="white" />
          <span className="hidden lg:block text-xl font-bold">LinkedIn</span>
        </a>
        <a
          href="https://github.com/AbhirupRoy27"
          aria-label="GitHub"
          className="p-2 flex items-center gap-2 hover:bg-[#2a2a2a] rounded-lg border-1 border-[#232323] hover:border-[#4BB543] text-white transition-all duration-200 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github strokeWidth={1} color="white" />
          <span className="hidden lg:block text-xl font-bold">Github</span>
        </a>
        <button
          onClick={handleCopy}
          aria-label="Copy Email"
          className="py-1 px-3 lg:hidden flex items-center gap-2 bg-[#2a2a2a] active:scale-95 rounded-lg text-white transition-all duration-200"
        >
          <Copy strokeWidth={1} size={18} />
          <span className="flex gap-2 text-md">
            {copied ? 'Copied!' : 'E-Mail'}
          </span>
        </button>
        <button
          onClick={() => window.open('mailto:rabhirup605@gmail.com', '_blank')}
          aria-label="Mail"
          className="p-2 hidden lg:flex justify-between items-center gap-2 hover:bg-[#2a2a2a] rounded-lg border-1 border-[#232323] hover:border-[#4BB543] text-white  transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail strokeWidth={1} />
          <span className="flex gap-2 text-xl font-bold">E-Mail</span>
          <span
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleCopy()
            }}
            aria-label="Copy Email"
            className="flex items-center gap-1 bg-black/20 p-2 rounded"
          >
            <Copy size={15} /> {copied ? 'Copied!' : 'Copy'}
          </span>
        </button>
      </div>
    </div>
  )
}

export default NavLogos
