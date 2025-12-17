import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ActiveSection from './Contexts/activeSection.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ActiveSection>
      <App />
    </ActiveSection>
  </BrowserRouter>
)
