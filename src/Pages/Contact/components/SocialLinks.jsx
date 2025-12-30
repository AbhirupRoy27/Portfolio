import { Facebook, Github, Instagram, LinkedinIcon, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

function SocialLinks() {
  return (
    <div className="py-4 flex gap-2">
      <Link
        to={'/contact'}
        className="px-2 py-2 border border-white/30 hover:border-blue-400 transition duration-300 rounded hover:shadow-lg shadow-white/10 cursor-pointer"
      >
        <Facebook strokeWidth={1} />
      </Link>
      <Link
        className="px-2 py-2 border border-white/30 hover:border-green-500 transition duration-300 rounded hover:shadow-lg shadow-white/10 cursor-pointer"
        to={'https://github.com/AbhirupRoy27'}
      >
        <Github strokeWidth={1} />
      </Link>
      <Link
        className="px-2 py-2 border border-white/30 hover:border-blue-600 transition duration-300 rounded hover:shadow-lg shadow-white/10 cursor-pointer"
        to={'https://www.linkedin.com/in/abhirup-roy-60ab95225/'}
      >
        <LinkedinIcon strokeWidth={1} />
      </Link>
      <Link
        className="px-2 py-2 border border-white/30 hover:border-pink-700 transition duration-300 rounded hover:shadow-lg shadow-white/10 cursor-pointer"
        to={'https://www.instagram.com/ig__abhirup/'}
      >
        <Instagram strokeWidth={1} />
      </Link>
      <Link
        className="px-2 py-2 border border-white/30 hover:border-gray-50 transition duration-300 rounded hover:shadow-lg shadow-white/10 cursor-pointer"
        to={'mailto:rabhirup605@gamil.com'}
      >
        <Mail strokeWidth={1} />
      </Link>
    </div>
  )
}

export default SocialLinks
