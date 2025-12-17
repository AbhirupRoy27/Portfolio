const handleNavLinkClick = (
  section,
  setActiveSection,
  setNavOpen,
  navigate
) => {
  if (section == 'blogs' || section == 'Blogs') {
    return navigate('blog')
  }
  const main = document.getElementById('main')
  main?.scrollTo({ top: 0, behavior: 'smooth' })
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setActiveSection(section)
  setNavOpen(false)
  navigate('/')
}

export default handleNavLinkClick
