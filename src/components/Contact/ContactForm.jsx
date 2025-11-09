import { LogIn } from 'lucide-react'
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="lg:w-1/2 px-2 md:px-4 pb-8 mb-6 lg:bg-gray-900/40 lg:rounded-2xl border-b-2 lg:border-1 hover:border-gray-500/40 transition-all duration-300">
      <div className="flex  justify-center my-6 lg:mb-0">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-emerald-400 text-sm font-semibold ">
            Available for hire
          </span>
        </div>
      </div>
      <h1 className="hidden lg:block text-2xl text-center sm:text-4xl tracking-wide py-[2rem] font-bold bg-gradient-to-br from-gray-100 to-slate-300 bg-clip-text text-transparent">
        Have a project in mind?
      </h1>
      <p className="mb-[1.5rem] sm:mb-[3rem] text-[#888] max-w-600 text-md sm:text-lg sm:pl-[1rem] sm:pr-[1rem] text-center">
        <b className="text-white tracking-wide">Let's Get In Touch </b>
        I'm always excited to collaborate on innovative web solutions. Whether
        you need a modern website, a complex web application, or just want to
        say hello - drop me a message below!
      </p>

      <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col text-left gap-1">
          <label htmlFor="email" className="text-gray-400 text-md mb-2 ">
            Email / Mobile
          </label>
          <input
            className={`bg-gray-300 focus:bg-white text-black ${
              formData.email && 'bg-white'
            } p-2 rounded focus:shadow-xl focus:shadow-white/10 tracking-wide outline-0`}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Please enter your email/mobile"
            required
          />
        </div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
          rows={6}
          className={`bg-gray-300 focus:bg-white text-black ${
            formData.message && 'bg-white'
          } p-2 rounded focus:shadow-xl focus:shadow-white/10 resize-y tracking-wide min-h-[12%] w-full outline-0`}
        />

        <button
          type="submit"
          className="flex gap-4 justify-center bg-[#4BB543] text-white p-2 rounded text-lg font-semibold tracking-wide ease-in cursor-pointer hover:bg-[#3d9235] hover:shadow-xl active:shadow-[#7cdd67a5]/25 active:scale-102"
        >
          <>Send Message </>
          <LogIn color="#ffffff" strokeWidth={2} />
        </button>
      </form>
    </div>
  )
}

export default ContactForm
