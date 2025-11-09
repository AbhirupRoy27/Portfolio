import { useState } from 'react'
import './Skills.css'
import SkillIcons from './SkillIcons'

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: 'React.js',
      icon: 'React',
      description: 'Building modern user interfaces with React ecosystem',
      category: 'frontend',
    },
    {
      id: 2,
      name: 'Context API',
      icon: 'Context',
      description: 'State management for React applications',
      category: 'frontend',
    },
    {
      id: 3,
      name: 'React Router',
      icon: 'Router',
      description: 'Client-side routing for single page applications',
      category: 'frontend',
    },
    {
      id: 4,
      name: 'Tailwind CSS',
      icon: 'Tailwind',
      description: 'Utility-first CSS framework for rapid UI development',
      category: 'styling',
    },
    {
      id: 5,
      name: 'REST API',
      icon: 'REST',
      description: 'Building and consuming RESTful web services',
      category: 'backend',
    },
    {
      id: 6,
      name: 'Axios',
      icon: 'Axios',
      description: 'Promise-based HTTP client for browser and Node.js',
      category: 'backend',
    },
    {
      id: 7,
      name: 'GitHub',
      icon: 'GitHub',
      description: 'Version control and collaboration platform',
      category: 'tools',
    },
    {
      id: 8,
      name: 'Vercel',
      icon: 'Vercel',
      description: 'Deployment and hosting platform for web applications',
      category: 'deployment',
    },
    {
      id: 9,
      name: 'Netlify',
      icon: 'Netlify',
      description: 'Modern web hosting and automation platform',
      category: 'deployment',
    },
    {
      id: 10,
      name: 'Responsive Design',
      icon: 'Responsive',
      description: 'Creating adaptive layouts for all devices',
      category: 'styling',
    },
    // {
    //   id: 11,
    //   name: 'CSS Modules',
    //   icon: 'CSSModules',
    //   description: 'Scoped styling for React components',
    //   category: 'styling'
    // },
    {
      id: 12,
      name: 'VS Code',
      icon: 'VSCode',
      description: 'Advanced code editor for web development',
      category: 'tools',
    },
    {
      id: 13,
      name: 'Git',
      icon: 'Git',
      description: 'Version control system for code management',
      category: 'tools',
    },
    {
      id: 14,
      name: 'JavaScript',
      icon: 'JavaScript',
      description: 'Core programming language for web development',
      category: 'language',
    },
    {
      id: 15,
      name: 'CSS3',
      icon: 'CSS3',
      description: 'Modern styling and animations',
      category: 'styling',
    },
    {
      id: 16,
      name: 'HTML5',
      icon: 'HTML5',
      description: 'Semantic markup for web content',
      category: 'language',
    },
  ]

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'styling', name: 'Styling' },
    { id: 'tools', name: 'Tools' },
    { id: 'deployment', name: 'Deployment' },
    { id: 'language', name: 'Languages' },
  ]

  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section className="skills-section">
      <h1 className="skills-title">What I Bring to the Table</h1>
      <p className="skills-subtitle">
        Uncover the comprehensive skill set of my frontend development. From
        foundational languages like JavaScript and TypeScript to cutting-edge
        frameworks.
      </p>

      <div
        className="category-filters"
        role="tablist"
        aria-label="Skill categories"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${
              activeCategory === category.id ? 'active' : ''
            }`}
            onClick={() => setActiveCategory(category.id)}
            role="tab"
            aria-selected={activeCategory === category.id}
            aria-controls={`${category.id}-panel`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div
        className="skills-grid "
        role="tabpanel"
        id={`${activeCategory}-panel`}
        aria-label={`${activeCategory} skills`}
      >
        {filteredSkills.map((skill) => {
          const IconComponent = SkillIcons[skill.icon]
          return (
            <div
              key={skill.id}
              className="skill-card"
              role="article"
              aria-labelledby={`skill-name-${skill.id}`}
            >
              <div className="skill-icon" aria-hidden="true">
                <IconComponent />
              </div>
              <h3 id={`skill-name-${skill.id}`} className="skill-name">
                {skill.name}
              </h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-category-tag">{skill.category}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
