import './Projects.css'
import { lazy, Suspense, useState } from 'react'
import projects from '../../db/projects.json'

const Info = lazy(() => import('./Pages/Info'))

const Projects = () => {
  // Split projects into two rows
  const firstRowProjects = projects.slice(0, 3)
  // Filter only complete projects for second row
  const secondRowProjects = projects
    .slice(3)
    .filter((project) => project.isComplete)

  const [currentIndexRow1] = useState(0)
  const [currentIndexRow2] = useState(0)

  // const prevProject = () => {
  //     setCurrentIndex((prevIndex) =>
  //         prevIndex === 0 ? projects.length - 1 : prevIndex - 1
  //     )
  // }

  const ProjectRow = ({ projects, currentIndex }) => (
    <div className="projects-wrapper">
      {projects.map((project, index) => (
        <a
          href={project.link}
          key={project.id}
          className={`project-card ${index === currentIndex ? 'active' : ''}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="project-image"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          <div className="project-content">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  )

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Works Done By Me</h1>
        <Info />
      </div>

      <div className="projects-main-carousel">
        <div className="projects-rows-container">
          <ProjectRow
            projects={firstRowProjects}
            currentIndex={currentIndexRow1}
            rowNumber={1}
          />
          {secondRowProjects.length > 0 && (
            <ProjectRow
              projects={secondRowProjects}
              currentIndex={currentIndexRow2}
              rowNumber={2}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
