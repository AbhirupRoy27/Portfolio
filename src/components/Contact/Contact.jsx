import { useState } from 'react'
import './Contact.css'

const Contact = () => {
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
    <section className="px-[1rem] py-[2rem] bg-[#333] sm:bg-[#101010] flex flex-col justify-around items-center sm:max-w-[60%] mt-25 sm:mt-15">
      <h1 className="text-2xl sm:text-4xl tracking-wide px-2 py-[2rem] font-bold">
        Have a project in mind?
      </h1>
      <p className="mb-[1.5rem] sm:mb-[3rem] text-[#888] max-w-600 text-md sm:text-xl sm:pl-[1rem] sm:pr-[1rem]">
        <b className="text-white tracking-wide">Let's Get In Touch </b>
        I'm always excited to collaborate on innovative web solutions. Whether
        you need a modern website, a complex web application, or just want to
        say hello - drop me a message below!
      </p>

      <form
        className="w-full sm:max-w-[500px] flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col text-left gap-1">
          <label htmlFor="email" className="text-white text-md">
            Email / Mobile
          </label>
          <input
            className={`bg-gray-300 focus:bg-white text-black ${
              formData.email && 'bg-white'
            } p-2 rounded focus:shadow-xl focus:shadow-white/10 tracking-wide`}
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
          } p-2 rounded focus:shadow-xl focus:shadow-white/10 resize-y tracking-wide min-h-[12%] w-full`}
        />

        <button
          type="submit"
          className="bg-[#4BB543] text-white p-2 rounded text-lg font-semibold tracking-wide ease-in cursor-pointer hover:bg-[#3d9235] hover:shadow-xl active:shadow-[#7cdd67a5]/25 active:scale-102"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact
