import { Github, Linkedin, Mail } from 'lucide-react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="animate-slide-in-up  flex flex-col py-4">
      <section className="py-4 bg-[#101010] flex flex-col lg:flex-row-reverse items-center lg:px-6 xl:px-15">
        <div className="w-full lg:w-1/2 space-y-4 px-2 md:px-4 lg:px-10">
          <div className="w-full bg-linear-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Mail />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Email</h3>
                <p className="text-slate-400 text-sm">rabhirup605@gmail.com</p>
              </div>
            </div>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Send me an email
              <i className="fas fa-arrow-right text-sm" aria-hidden="true"></i>
            </a>
          </div>
          <div className="w-full bg-linear-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Linkedin />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">LinkedIn</h3>
                <p className="text-slate-400 text-sm">
                  Connect with me professionally
                </p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/abhirup-roy-60ab95225/"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View my profile
              <i className="fas fa-arrow-right text-sm" aria-hidden="true"></i>
            </a>
          </div>
          <div className="w-full bg-linear-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Github />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">GitHub</h3>
                <p className="text-slate-400 text-sm">Check out my code</p>
              </div>
            </div>
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              View repositories
              <i className="fas fa-arrow-right text-sm" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}

export default Contact
