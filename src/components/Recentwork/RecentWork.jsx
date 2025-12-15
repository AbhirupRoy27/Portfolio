import { ArrowRight, FolderGit2, Github } from 'lucide-react'
import works from '../../db/recentWork.json'
import {
  Express,
  MongoDB,
  Netlify,
  ReactJs,
  TailwindCss,
  Vercel,
} from '../../assets/icons/Icons2'
import { SlGlobe } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

const RecentWork = () => {
  const navigate = useNavigate()
  return (
    <section className="animate-slide-in-up py-20 bg-[#090909ec]">
      <div className="flex flex-col items-center">
        <h1 className="flex gap-3 items-center text-4xl font-bold text-gray-300 mb-6 tracking-wide border-b-1 border-gray-50/30">
          <FolderGit2 />
          Recent Works
        </h1>
        <div className="text-xl text-gray-100/50 text-center mb-4 px-4 lg:px-20 ">
          <p>Continuously enhancing my knowledge with every passing moment.</p>
          <p className="mt-2 text-lg">
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
            className="w-full h-full lg:w-1/3 hover:scale-105 hover:border-1 hover:border-white transition-all duration-300 shadow-lg rounded-2xl hover:shadow-gray-50/30"
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
            <div className="bg-[#161B22] text-[#E6E6E6] px-2 lg:px-5 py-3 rounded-bl-2xl rounded-br-2xl h-1/3">
              <h2
                className=" min-h-[64px] text-2xl font-semibold line-clamp-1 hover:underline mb-2 flex items-center gap-2 "
                onClick={() => window.open(work.link, '_blank')}
              >
                {work.title}
                <button>
                  <SlGlobe />
                </button>
              </h2>
              <p className="text-[#E6E6E6]/70 line-clamp-2">
                {work.description}
              </p>
              <div className="h-max flex flex-col justify-center py-3">
                <h4 className="text-sm font-medium mb-2 text-secondary">
                  Technologies
                </h4>
                <div className="flex gap-2">
                  <ReactJs /> <Express /> <Vercel /> <TailwindCss /> <MongoDB />{' '}
                  <Netlify />
                </div>
              </div>
              <div className="pt-4 flex justify-end items-center">
                <button
                  className="flex gap-2 py-2 px-4 bg-[#161B22] border border-[#30363D] text-[#E6E6E6] rounded-lg hover:border-[#06B6D4] hover:text-[#06B6D4] transition-colors duration-200 text-base font-semibold"
                  onClick={() => navigate('Project')}
                >
                  Read More <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="https://github.com/AbhirupRoy27"
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#161B22] border border-[#30363D] text-[#E6E6E6] rounded-lg hover:border-[#06B6D4] hover:text-[#06B6D4] transition-colors duration-200 text-base font-semibold"
        >
          <Github />
          View All Projects on GitHub
          <ArrowRight />
        </a>
      </div>
    </section>
  )
}

export default RecentWork
