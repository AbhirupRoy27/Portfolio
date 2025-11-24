import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="animate-slide-in-up  flex flex-col py-10">
      <section className="py-4 bg-[#101010] flex flex-col lg:flex-row-reverse items-center lg:px-6 xl:px-15">
        <div className="w-full lg:w-1/2 space-y-4 px-2 md:px-4 lg:px-10">
          <div className="w-full bg-black-500/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:border-white/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-black shadow-md shadow-white/10 rounded-xl flex items-center justify-center">
                <Mail color="white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Email</h3>
                <p className="text-slate-400 text-sm">rabhirup605@gmail.com</p>
              </div>
            </div>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-50 transition-colors"
            >
              Send me an Email
              <ArrowRight />
            </a>
          </div>
          <div className="w-full bg-black-500/10 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-black shadow-md shadow-white/10 rounded-xl flex items-center justify-center">
                <Linkedin color="white" />
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
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-50 transition-colors"
            >
              View my profile
              <ArrowRight />
            </a>
          </div>
          <div className="w-full bg-black-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-300/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-black shadow-md shadow-white/10 rounded-xl flex items-center justify-center">
                <Github color="white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">GitHub</h3>
                <p className="text-slate-400 text-sm">Check out my code</p>
              </div>
            </div>
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-50 transition-colors"
            >
              View repositories
              <ArrowRight />
            </a>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}

export default Contact
