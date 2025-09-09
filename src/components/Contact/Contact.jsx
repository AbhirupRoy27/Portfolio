import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <section className="contact-section">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-description">
        <b>Have a project in mind or want to discuss potential opportunities? </b>I'm always excited 
        to collaborate on innovative web solutions. Whether you need a modern website, 
        a complex web application, or just want to say hello - drop me a message below!
      </p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Please enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={(e) => {
              // Only allow numbers
              const value = e.target.value.replace(/\D/g, '')
              setFormData(prevState => ({
                ...prevState,
                mobile: value
              }))
            }}
            placeholder="Enter mobile"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength="10"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            rows={6}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit 
        </button>
      </form>
    </section>
  )
}

export default Contact 