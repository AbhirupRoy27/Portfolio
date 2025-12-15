const handleNavLinkClick = (section, setActiveSection, setNavOpen) => {
  const main = document.getElementById('main')
  main?.scrollTo({ top: 0, behavior: 'smooth' })
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setActiveSection(section)
  setNavOpen(false)
}

export default handleNavLinkClick
