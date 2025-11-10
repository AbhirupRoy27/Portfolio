import { Github } from 'lucide-react'
import works from '../../db/recentWork.json'

const RecentWork = () => {
  return (
    <section className="py-20 bg-[#090909ec]">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-300 mb-6 tracking-wide border-b-1 border-gray-50/30">
          Recent Works
        </h1>
        <div className="text-xl text-gray-100 text-center mb-4 px-4 lg:px-20 ">
          <p>Continuously enhancing my knowledge with every passing moment.</p>
          <p className="">
            Passionate developer with a strong drive for problem-solving and
            building impactful solutions. A quick learner who thrives on new
            challenges and continuously seeks opportunities to grow.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 py-8 px-4 lg:px-20 cursor-pointer">
        {works.map((work) => (
          <div
            key={work.id}
            className="w-full h-full lg:w-1/3 hover:scale-105 transition-all duration-300 shadow-lg rounded-2xl shadow-gray-50/30"
          >
            <div className="h-2/3">
              <a
                href={work.link}
                target={work.target}
                rel="noopener noreferrer"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="rounded-tl-2xl rounded-tr-2xl object-cover w-full h-full bg-gray-800/90"
                />
              </a>
            </div>
            <div
              className="bg-gray-200 px-5 py-3 rounded-bl-2xl rounded-br-2xl h-1/3"
              onClick={() => window.open(work.link, '_blank')}
            >
              <h2 className="text-2xl font-semibold line-clamp-1 hover:underline">
                {work.title}
              </h2>
              <p className="text-gray-800/50 line-clamp-2">
                {work.description}
              </p>
            </div>
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
