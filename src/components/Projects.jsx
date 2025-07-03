import './Projects.css'
import { useState } from 'react'

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "About Weather",
            description: "A weather app that allows you to search for weather information for any location in the world.",
            tags: ["UI/UX Design", "OpenWeather API", "React", "solo development"],
            image: "/weather-app-demo.png",
            link: 'https://about-weather.netlify.app/',
            isComplete: true
        },
        {
            id: 2,
            name: "DTH Recharge Application",
            description: "A DTH recharge application that allows you to recharge your DTH account. It uses the Paytm API to process the payments.",
            tags: ["Login/Register", "Payment",  "solo development"],
            image: "/DTH-View.png",
            link: 'https://dthbro.netlify.app/',
            isComplete: true
        },
        {
            id: 3,
            name: "Cyberpunk To-Do List",
            description: "A to-do list that allows you to add, edit, and delete tasks. It uses local storage to save the tasks.",
            tags: ["Game UI Design", "Local Storage", "Animation", "React", "solo development"],
            image: "/To-do.png",
            link: 'https://solo-levelingquests.netlify.app/',
            isComplete: true
        },
        {
            id: 4,
            name: "E-Commerce UI Clone",
            description: "A e-commerce website that allows users to Experiance UI like Amazon.",
            tags: ["UI Clone", "Not Fully Functional", "Frontend-Only", "solo development"],
            image: "/E-com.png",
            link: 'https://e-comwebui.netlify.app/',
            isComplete: true
        },
        {
            id: 5,
            name: "Coming Soon",
            description: "Majestic mountain landscapes shrouded in mystical clouds.",
            tags: ["Photography", "Landscape"],
            image: "/path-to-mountain-image.jpg",
            isComplete: false
        },
        {
            id: 6,
            name: "Coming Soon",
            description: "Majestic mountain landscapes shrouded in mystical clouds.",
            tags: ["Photography", "Landscape"],
            image: "/path-to-mountain-image.jpg",
            isComplete: false
        }
    ]

    // Split projects into two rows
    const firstRowProjects = projects.slice(0, 3)
    // Filter only complete projects for second row
    const secondRowProjects = projects.slice(3).filter(project => project.isComplete)

    const [currentIndexRow1, ] = useState(0)
    const [currentIndexRow2, ] = useState(0)

    // const prevProject = () => {
    //     setCurrentIndex((prevIndex) => 
    //         prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    //     )
    // }

    const ProjectRow = ({ projects, currentIndex,  }) => (
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
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="project-content">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <div className="project-tags">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="tag">{tag}</span>
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
                <p>As a <b style={{color: "#FF7F50"}}>Passionate</b> and <b style={{color: "#FF7F50"}}>Detail-oriented</b> web developer, I specialize in creating clean, responsive, 
                    and user-friendly web applications.My skill set includes HTML, CSS, JavaScript, and React, with a strong focus on building intuitive UI/UX designs that enhance user experience across all devices.
                    I’m currently expanding my backend knowledge by learning <b className='node-js'>Node.js</b>, with the goal of becoming a proficient 
                    full-stack developer.<br />
                    Every project I build is crafted with <b style={{color: "#CD6155"}}>performance, accessibility, and visual design</b> in mind. 
                    I take pride in writing clean, maintainable code and turning ideas into fully functional, 
                    visually appealing digital experiences. I'm excited to collaborate on new challenges and bring 
                    innovative web solutions to life.<br />
                    If you're looking for a developer who blends creative design with solid front-end development skills — 
                    and who’s rapidly growing into full-stack expertise — I’d love to connect. <b style={{textAlign: "justify", fontSize: "1.2rem"}}>Let's build something great together !</b> &nbsp; <p className='hover-details'>— Hover Cards For details.</p>
</p>
            </div>
            
            <div className="projects-main-carousel">
                {/* <button className="nav-button prev" onClick={prevProject}>←</button> */}
                
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

                {/* <button className="nav-button next" onClick={nextProject}>→</button> */}
            </div>
        </div>
    )
}

export default Projects