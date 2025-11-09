import {
  Check,
  FolderCode,
  FolderCodeIcon,
  LaptopMinimalCheck,
  MonitorCog,
  User2Icon,
  UserCircle,
} from 'lucide-react'

const Overview = () => {
  return (
    <section className="code-section relative py-32 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden min-w-[354px]">
      {/* <!-- Background Effects --> */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          data-media='{"id":"2166890616","src":"iStock","type":"image"}'
          alt="Fantastic mountain scenery and glowing neon blue panel. Sci-Fi landscape, on mountain horizon blue-purple sky,wallpaper.3D render"
        >
          <img
            src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/4f99e191-79bb-4ae0-c220-d37a13d8cf00/public"
            alt="Fantastic mountain scenery and glowing neon blue panel. Sci-Fi landscape, on mountain horizon blue-purple sky,wallpaper.3D render"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* <!-- Section Header --> */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <UserCircle color="white" />
            <span className="text-blue-300 font-semibold">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Turning
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Ideas
            </span>
            Into Reality
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Production-ready code architect with expertise in scalable systems
            and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* <!-- Left: Bio & Tech Stack --> */}
          <div className="space-y-8">
            {/* <!-- Bio Card --> */}
            <div className="group relative p-8 rounded-3xl bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                    <User2Icon size={30} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Professional Overview
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      I'm a full-stack developer passionate about crafting
                      exceptional digital experiences. Building production
                      systems, I specialize in the MERN stack (MongoDB, Express,
                      React, Node.js) and have extensive experience with modern
                      development practices including CI/CD, testing.
                    </p>
                  </div>
                </div>

                {/* <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="space-y-2">
                    <div className="text-3xl font-black bg-linear-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                      99%
                    </div>
                    <div className="text-sm text-slate-400">Code Quality</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-black bg-linear-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">
                      24/7
                    </div>
                    <div className="text-sm text-slate-400">System Uptime</div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* <!-- Tech Philosophy --> */}
            <div className="group relative p-8 rounded-3xl bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <FolderCodeIcon strokeWidth={1.25} size={35} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Development Philosophy
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check size={16} strokeWidth={3} color="#51da16" />
                    <span>
                      Clean, maintainable, and scalable code architecture
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check size={16} strokeWidth={3} color="#51da16" />
                    <span>Performance optimization and best practices</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check size={16} strokeWidth={3} color="#51da16" />
                    <span>Comprehensive testing and documentation</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Check size={16} strokeWidth={3} color="#51da16" />
                    <span>Agile methodology and continuous delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Right: Core Competencies --> */}
          <div className="space-y-6">
            {/* <!-- Competency 1 --> */}
            <div className="group relative p-8 rounded-3xl bg-linear-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-8 right-8 text-6xl text-blue-500/10 font-black group-hover:text-blue-500/20 transition-colors">
                01
              </div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <LaptopMinimalCheck size={40} strokeWidth={2.25} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Full-Stack Development
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  End-to-end application development from database design to
                  responsive UIs. Expert in React, Express.js, Node.js, and
                  MongoDB.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                    React
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                    Node.js
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Competency 2 --> */}
            {/* <div className="group relative p-8 rounded-3xl bg-linear-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-8 right-8 text-6xl text-purple-500/10 font-black group-hover:text-purple-500/20 transition-colors">
                02
              </div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i
                    className="fa-solid fa-cloud text-white text-2xl"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Cloud Architecture
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Designing and deploying scalable cloud infrastructure on AWS,
                  Azure, and GCP. CI/CD pipelines and containerization expert.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">
                    AWS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">
                    Docker
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">
                    Kubernetes
                  </span>
                </div>
              </div>
            </div> */}

            {/* <!-- Competency 3 --> */}
            <div className="group relative p-8 rounded-3xl bg-linear-to-br from-green-500/10 to-emerald-500/5 backdrop-blur-xl border border-green-500/20 hover:border-green-400/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-8 right-8 text-6xl text-green-500/10 font-black group-hover:text-green-500/20 transition-colors">
                {/* 03 */}
                02
              </div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MonitorCog strokeWidth={1.5} size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Performance Optimization
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Optimizing applications for speed, efficiency, and user
                  experience. Profiling, caching strategies, and database
                  tuning.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                    Lazy Loading
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                    Code Spliting
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                    Webpack
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
