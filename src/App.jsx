import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeLayout from './Pages/Landing/HomeHandler'
import AboutEcom from './Pages/Project/AboutEcom'
import NotFound from './Pages/NotFound/NotFound'
import Blog from './Pages/Blog/Blog'
import LandingProject from './Pages/Project/LandingProject'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomeLayout />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/project" element={<LandingProject />}>
          <Route path="1" element={<AboutEcom />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
