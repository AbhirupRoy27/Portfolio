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
  {
    name: 'Figma',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  
]

const TechStack = () => {
  return (
    <section className="tech-section">
      <div className="tech-label">Worked with</div>
      <div className="tech-logos">
        {techLogos.map(logo => (
          <div className="tech-logo-card" key={logo.name}>
            <img
              src={logo.src}
              alt={logo.name}
              className={`tech-logo-img${logo.name === 'Express.js' ? ' express-logo' : ''}`}
            />
            <span className="tech-logo-name">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack 