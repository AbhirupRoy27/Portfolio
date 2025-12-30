import RecentWork from '../../components/Recentwork/RecentWork'
import Skills from '../../components/Skills/Skills'
import TechStack from '../../components/TechStack/TechStack'
import Footer from '../../components/Footer/FooterMain'
import Homepage from './IntroHome'
import Overview from './Overview'
import NavBar from './NavBar'
import { useSection } from '../../Contexts/activeSection'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  const { setActiveSection } = useSection()
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-screen lg:w-1/7 min-w-[354px] lg:min-w-max border-r-1 border-gray-400/30">
        {/* Nav */}
        <NavBar setActiveSection={setActiveSection} />
      </div>
      <Outlet />
    </div>
  )
}

export const HomeSkeliton = () => {
  const { activeSection, setActiveSection } = useSection()
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'recent-work':
        return <RecentWork />
      case 'skills':
        return <Skills />
      case 'home':
      default:
        return (
          <div className="animate-slide-in-up">
            <Homepage setActiveSection={setActiveSection} />

            <div id="work">
              <RecentWork />
            </div>
            <Overview />
            <TechStack />
          </div>
        )
    }
  }

  return (
    <div
      className="animate-slide-in-up w-screen lg:h-screen overflow-y-auto lg:w-6/7 bg-[#101010] flex flex-col min-w-[354px]"
      id="main"
    >
      {renderActiveSection()}
      <Footer />
    </div>
  )
}

export default HomeLayout
