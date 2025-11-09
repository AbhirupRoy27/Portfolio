import { GitCommit, Github, GithubIcon, LucideGithub } from 'lucide-react'
import './RecentWork.css'

const RecentWork = () => {
  const works = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761577912/Next_gen_beykr5.png',
      title: 'NextGen: E-commerce App',
      description:
        'A modern E-commerce Store app build with React and node.js framworks, Mobile first design with tailwind CSS for an clean UI. state managemant using Context API ',
      link: 'https://abhisecomnew.netlify.app/',
      target: '_blank',
    },
    {
      id: 2,
      image: '/DTH-View.png',
      title: 'DTH Recharge Application',
      description:
        'A DTH Recharge Application interface built with React. It allows users to recharge their DTH accounts and view their transaction history.',
      link: 'https://dthbro.netlify.app/',
      target: '_blank',
    },
  ]

  return (
    <section className="recent-work-section">
      <h1 className="recent-work-title">Recent Work</h1>
      <p className="recent-work-subtitle">
        Continuously enhancing my knowledge with every passing moment.
      </p>
      <p className="recent-work-description">
        Passionate developer with a strong drive for problem-solving and
        building impactful solutions. A quick learner who thrives on new
        challenges and continuously seeks opportunities to grow.
      </p>

      <div className="work-cards">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <div className="work-image-container">
              <a
                href={work.link}
                target={work.target}
                rel="noopener noreferrer"
              >
                <img src={work.image} alt={work.title} className="work-image" />
              </a>
            </div>
            <h2 className="work-title">{work.title}</h2>
            <p className="work-description">{work.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#161B22] border border-[#30363D] text-[#E6E6E6] rounded-lg hover:border-[#06B6D4] hover:text-[#06B6D4] transition-colors duration-200 text-base font-semibold"
        >
          <Github />
          View All Projects on GitHub
          <i
            className="fa-regular fa-arrow-right text-sm"
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </section>
  )
}

export default RecentWork
