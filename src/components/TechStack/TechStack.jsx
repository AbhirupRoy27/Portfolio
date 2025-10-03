import './TechStack.css'

const techLogos = [
  {
    name: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Express.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'React.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
]

const TechStack = () => {
  return (
    <section className="py-3 px-1 sm:py-10 sm:p-2 bg-gradient-to-br from-cyan-900 to-gray-800 text-center">
      <div className="lg:text-[2.5rem] mb-[1rem] sm:mb-[2rem] text-[2rem] font-bold">
        Worked with
      </div>
      <div className="tech-logos flex justify-center items-center flex-wrap px-10 py-5">
        {techLogos.map((logo) => (
          <div className="tech-logo-card" key={logo.name}>
            <img
              src={logo.src}
              alt={logo.name}
              className={`tech-logo-img${
                logo.name === 'Express.js' ? ' express-logo' : ''
              }`}
            />
            <span className="tech-logo-name">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
