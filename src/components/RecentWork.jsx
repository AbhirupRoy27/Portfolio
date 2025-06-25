import './RecentWork.css'


const RecentWork = () => {
  const works = [
    {
      id: 1,
      image: "/weather-app-demo.png",
      title: "Weather App UI",
      description: "A modern weather app interface with current and forecast data, responsive design, and clean UI. Built with React.",
      link: "https://about-weather.netlify.app/",
      target: "_blank"
    },
    {
      id: 2,
      image: "/DTH-View.png",
      title: "DTH Recharge Application",
      description: "A DTH Recharge Application interface built with React. It allows users to recharge their DTH accounts and view their transaction history.",
      link: "about:blank",
      target: "_parent"
    },
  ]

  return (
    <section className="recent-work-section">
      <h1 className="recent-work-title">Recent Work</h1>
      <p className="recent-work-subtitle">
        Efficiently Solving problems since last 3+ years.
      </p>
      <p className="recent-work-description">
        I'm a passionate developer who loves to solve problems and build things.
         I'm a quick learner and I'm always looking for new challenges.
      </p>

      <div className="work-cards">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <div className="work-image-container">
              <a href={work.link} target={work.target} rel="noopener noreferrer">
                <img 
                src={work.image} 
                alt={work.title} 
                className="work-image" 
                />
                </a>
            </div>
            <h2 className="work-title">{work.title}</h2>
            <p className="work-description">{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentWork 