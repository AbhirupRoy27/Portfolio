import './RecentWork.css'

const RecentWork = () => {
  const works = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Work name here",
      description: "Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      title: "Work name here",
      description: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u"
    }
  ]

  return (
    <section className="recent-work-section">
      <h1 className="recent-work-title">Recent Work</h1>
      <p className="recent-work-subtitle">
        Solving user & business problems since last 15+ years.
      </p>
      <p className="recent-work-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="work-cards">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <div className="work-image-container">
              <img src={work.image} alt={work.title} className="work-image" />
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