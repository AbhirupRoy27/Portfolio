import { LogIn } from 'lucide-react'
import React from 'react'

function ContactForm() {
  return (
    <form className="flex flex-col w-full gap-6 mt-8 text-lg md:max-w-[654px] text-white">
      <input
        placeholder="Name"
        autoFocus={false}
        className="py-2 focus:outline-none focus:bg-gray-50/10 focus:border-white focus:pl-2 border-b-1 border-white/70"
      />
      <input
        placeholder="Email"
        autoFocus={false}
        className="py-3 focus:outline-none focus:bg-gray-50/10 focus:border-white focus:pl-2 border-b-1 border-white/70"
      />
      <input
        placeholder="Message"
        autoFocus={false}
        className="py-3 focus:outline-none focus:bg-gray-50/10 focus:border-white focus:pl-2 border-b-1 border-white/70"
      />
      <button
        type="submit"
        className="flex gap-2 w-full py-3 mt-5 justify-center items-center font-bold bg-gray-600/40"
      >
        Send <LogIn color="#ffffff" strokeWidth={2} />
      </button>
    </form>
  )
}

export default ContactForm
