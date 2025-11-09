import {
  AppWindow,
  BadgeCheck,
  CheckCircle,
  DatabaseIcon,
  GitBranch,
} from 'lucide-react'

const TechStack = () => {
  return (
    <section
      className="code-section bg-[#0D1117] py-20 sm:py-24 border-t border-[#30363D]"
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* <!-- Section Header --> */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-[#06B6D4] to-transparent"></div>
            <span className="text-[#06B6D4] text-sm font-semibold uppercase tracking-wider">
              Technical Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#E6E6E6] tracking-tight">
            Production-Ready Toolkit
          </h2>
        </div>

        {/* <!-- Skills Grid --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* <!-- Frontend Development --> */}
          <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] flex items-center justify-center">
                <AppWindow strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#E6E6E6]">
                Frontend Development
              </h3>
            </div>

            <div className="space-y-4">
              {/* <!-- React --> */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#E6E6E6] font-semibold text-sm">
                    React &amp; Redux
                  </span>
                  <span className="text-[#06B6D4] text-xs font-semibold">
                    Advanced
                  </span>
                </div>
                <div className="h-2 bg-[#0D1117] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] rounded-full"
                    style={{ width: '90%' }}
                  ></div>
                </div>
                <p className="text-[#9AA0A6] text-xs leading-relaxed">
                  Hooks, Context API, Redux Toolkit, React Router, custom hooks,
                  performance optimization
                </p>
              </div>

              {/* <!-- JavaScript/TypeScript --> */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#E6E6E6] font-semibold text-sm">
                    JavaScript
                    {/* / TypeScript */}
                  </span>
                  <span className="text-[#06B6D4] text-xs font-semibold">
                    Advanced
                  </span>
                </div>
                <div className="h-2 bg-[#0D1117] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] rounded-full"
                    style={{ width: '92%' }}
                  ></div>
                </div>
                <p className="text-[#9AA0A6] text-xs leading-relaxed">
                  ES6+, async/await, promises, type safety, functional
                  programming patterns
                </p>
              </div>

              {/* <!-- HTML/CSS --> */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#E6E6E6] font-semibold text-sm">
                    HTML5 / CSS3 / Tailwind
                  </span>
                  <span className="text-[#06B6D4] text-xs font-semibold">
                    Expert
                  </span>
                </div>
                <div className="h-2 bg-[#0D1117] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] rounded-full"
                    style={{ width: '95%' }}
                  ></div>
                </div>
                <p className="text-[#9AA0A6] text-xs leading-relaxed">
                  Semantic HTML, responsive design, Flexbox, Grid, Tailwind
                  utilities, accessibility
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Backend Development --> */}
          <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                <DatabaseIcon />
              </div>
              <h3 className="text-2xl font-bold text-[#E6E6E6]">
                Backend Development
              </h3>
            </div>

            <div className="space-y-4">
              {/* <!-- Node.js --> */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#E6E6E6] font-semibold text-sm">
                    Node.js &amp; Express
                  </span>
                  <span className="text-[#6366F1] text-xs font-semibold">
                    Advanced
                  </span>
                </div>
                <div className="h-2 bg-[#0D1117] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full"
                    style={{ width: '90%' }}
                  ></div>
                </div>
                <p className="text-[#9AA0A6] text-xs leading-relaxed">
                  middleware, error handling, authentication, JWT, bcrypt,
                  validation
                </p>
              </div>

              {/* <!-- MongoDB --> */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#E6E6E6] font-semibold text-sm">
                    MongoDB &amp; Mongoose
                  </span>
                  <span className="text-[#6366F1] text-xs font-semibold">
                    Advanced
                  </span>
                </div>
                <div className="h-2 bg-[#0D1117] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
                <p className="text-[#9AA0A6] text-xs leading-relaxed">
                  Schema design, indexing, aggregation, relationships, query
                  optimization
                </p>
              </div>

              {/* <!-- APIs --> */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#E6E6E6] font-semibold text-sm">
                    API Design &amp; Integration
                  </span>
                  <span className="text-[#6366F1] text-xs font-semibold">
                    Advanced
                  </span>
                </div>
                <div className="h-2 bg-[#0D1117] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full"
                    style={{ width: '88%' }}
                  ></div>
                </div>
                <p className="text-[#9AA0A6] text-xs leading-relaxed">
                  RESTful APIs,
                  {/* GraphQL, third-party integrations (Stripe, SendGrid, 
                  AWS), webhooks */}
                </p>
              </div>
            </div>
          </div>

          {/* <!-- DevOps & Tools --> */}
          {/* <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                <i
                  className="fa-regular fa-wrench text-white text-xl"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="text-2xl font-bold text-[#E6E6E6]">
                DevOps &amp; Tools
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 bg-[#0D1117] rounded-lg">
                <i
                  className="fa-brands fa-git-alt text-[#06B6D4] text-lg"
                  aria-hidden="true"
                ></i>
                <span className="text-[#E6E6E6] text-sm font-medium">
                  Git &amp; GitHub
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#0D1117] rounded-lg">
                <i
                  className="fa-brands fa-docker text-[#06B6D4] text-lg"
                  aria-hidden="true"
                ></i>
                <span className="text-[#E6E6E6] text-sm font-medium">
                  Docker
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#0D1117] rounded-lg">
                <i
                  className="fa-solid fa-rocket text-[#06B6D4] text-lg"
                  aria-hidden="true"
                ></i>
                <span className="text-[#E6E6E6] text-sm font-medium">
                  CI/CD
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#0D1117] rounded-lg">
                <i
                  className="fa-brands fa-aws text-[#06B6D4] text-lg"
                  aria-hidden="true"
                ></i>
                <span className="text-[#E6E6E6] text-sm font-medium">AWS</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#0D1117] rounded-lg">
                <i
                  className="fa-solid fa-vial text-[#06B6D4] text-lg"
                  aria-hidden="true"
                ></i>
                <span className="text-[#E6E6E6] text-sm font-medium">
                  Jest Testing
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#0D1117] rounded-lg">
                <i
                  className="fa-solid fa-cube text-[#06B6D4] text-lg"
                  aria-hidden="true"
                ></i>
                <span className="text-[#E6E6E6] text-sm font-medium">
                  Webpack
                </span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-[#0D1117] rounded-lg">
              <p className="text-[#9AA0A6] text-sm leading-relaxed">
                <span className="text-[#E6E6E6] font-semibold">
                  Development Workflow:
                </span>
                Version control, branch strategies, code reviews, automated
                testing, continuous deployment
              </p>
            </div>
          </div> */}

          {/* <!-- Professional Skills --> */}
          <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center">
                <CheckCircle />
              </div>
              <h3 className="text-2xl font-bold text-[#E6E6E6]">
                Professional Skills
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-[#0D1117] rounded-lg">
                <BadgeCheck color="#51da16" strokeWidth={1.5} />
                <div>
                  <p className="text-[#E6E6E6] font-semibold text-sm mb-1">
                    Agile Methodologies
                  </p>
                  <p className="text-[#9AA0A6] text-xs">
                    Scrum, sprints, standups, retrospectives
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#0D1117] rounded-lg">
                <BadgeCheck color="#51da16" strokeWidth={1.5} />
                <div>
                  <p className="text-[#E6E6E6] font-semibold text-sm mb-1">
                    Code Quality
                  </p>
                  <p className="text-[#9AA0A6] text-xs">
                    Clean code, SOLID principles, code reviews
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#0D1117] rounded-lg">
                <BadgeCheck color="#51da16" strokeWidth={1.5} />
                <div>
                  <p className="text-[#E6E6E6] font-semibold text-sm mb-1">
                    Team Collaboration
                  </p>
                  <p className="text-[#9AA0A6] text-xs">
                    Cross-functional teamwork, communication
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#0D1117] rounded-lg">
                <BadgeCheck color="#51da16" strokeWidth={1.5} />
                <div>
                  <p className="text-[#E6E6E6] font-semibold text-sm mb-1">
                    Problem Solving
                  </p>
                  <p className="text-[#9AA0A6] text-xs">
                    Debugging, optimization, critical thinking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Certifications/Learning --> */}
        <div className="mt-12 bg-gradient-to-r from-[#161B22] to-[#1C2128] border border-[#30363D] rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#E6E6E6] mb-2">
                Continuous Learning
              </h3>
              <p className="text-[#9AA0A6] text-sm leading-relaxed max-w-2xl">
                Staying current with modern web development trends, contributing
                to open source, and constantly expanding my technical expertise
                through online courses, documentation, and hands-on projects.
              </p>
            </div>
            <a
              href="https://github.com/AbhirupRoy27"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#06B6D4] text-white rounded-lg hover:bg-[#0891B2] transition-colors duration-200 text-sm font-semibold whitespace-nowrap"
            >
              <GitBranch />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
