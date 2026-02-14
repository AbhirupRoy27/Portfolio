import { LogIn } from 'lucide-react'
import { useState } from 'react'

function ContactForm() {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: '',
  })
  return (
    <form
      className="flex flex-col w-full gap-6 mt-8 text-lg md:max-w-[654px] text-white"
      onSubmit={(e) => handleMessage(e, setMessage, message)}
    >
      <input
        placeholder="Name"
        autoFocus={false}
        className="py-2 focus:outline-none focus:bg-gray-50/10 focus:border-white focus:pl-2 border-b-1 border-white/70"
        required
        value={message.name}
        onChange={(e) =>
          setMessage((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
      />
      <input
        type="email"
        placeholder="Email"
        autoFocus={false}
        className="py-3 focus:outline-none focus:bg-gray-50/10 focus:border-white focus:pl-2 border-b-1 border-white/70"
        required
        value={message.email}
        onChange={(e) =>
          setMessage((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
      />
      <input
        type="text"
        placeholder="Message"
        autoFocus={false}
        className="py-3 focus:outline-none focus:bg-gray-50/10 focus:border-white focus:pl-2 border-b-1 border-white/70"
        required
        value={message.message}
        onChange={(e) =>
          setMessage((prev) => ({
            ...prev,
            message: e.target.value,
          }))
        }
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

function handleMessage(e, setMessage, message) {
  e.preventDefault()
  alert(
    'Message sent\n' +
      'name: ' +
      message.name +
      '\nEmail: ' +
      message.email +
      '\nMessage: ' +
      message.message,
  )
  return setMessage({
    name: '',
    email: '',
    message: '',
  })
}
