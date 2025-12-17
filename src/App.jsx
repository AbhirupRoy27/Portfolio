import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeLayout, { HomeSkeliton } from './Pages/Landing/HomeHandler'
import AboutEcom from './Pages/Project/AboutEcom'
import NotFound from './Pages/NotFound/NotFound'
import Blog from './Pages/Blog/Blog'
import LandingProject from './Pages/Project/LandingProject'
import ProjectLanding from './Pages/Project/ProjectLanding'
import AboutWorkSync from './Pages/Project/AboutWorkSync'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomeSkeliton />} />
          <Route path="blog" element={<Blog />} />
          <Route path="project" element={<LandingProject />}>
            <Route index element={<ProjectLanding />} />
            <Route path="1" element={<AboutEcom />} />
            <Route path="2" element={<AboutWorkSync />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
