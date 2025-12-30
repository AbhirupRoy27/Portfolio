import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'

function ContactLayout() {
  return (
    <div className="animate-slide-in-up py-10 px-10 sm:px-15 md:px-20 text-white min-w-[354px] w-full md:mt-20">
      <h1 className="text-6xl lg:text-8xl font-extralight pb-6 tracking-wider text-white/50 font-serif">
        Contact Abhirup
      </h1>
      <p className="text-gray-400 py-3 md:max-w-[654px] tracking-widest leading-7">
        Let's Get In Touch I'm always excited to collaborate on innovative web
        solutions. Whether you need a modern website, a complex web application,
        or just want to say hello - drop me a message below!
      </p>
      <div className="flex flex-col md:flex-row gap-5  w-full">
        <div className="md:w-2/3">
          <ContactForm />
        </div>
        <section className="md:w-1/3 mt-10 text-xl pb-2">
          <h2 className="tracking-wider font-serif">Social Links</h2>
          <SocialLinks />
          <h2 className="tracking-wider py-3 font-serif">Talk to me</h2>
          <div className="text-sm flex flex-col gap-2">
            <p className="text-lg">
              <b className="text-[16px] text-gray-400/60">Phone: </b>+91
              9851253334
            </p>
            <p className="text-lg">
              <b className="text-[16px] text-gray-400/60">Email: </b>
              rabhirup605@gmail.com
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactLayout
