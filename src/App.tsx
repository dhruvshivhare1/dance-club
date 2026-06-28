import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollVideo from './components/ScrollVideo'
import ParticlesCanvas from './components/ParticlesCanvas'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import FooterSection from './sections/FooterSection'
import ContactPage from './pages/ContactPage'

function Home() {
  return (
    <>
      <ScrollVideo />
      <ParticlesCanvas />
      <main style={{ position: 'relative', zIndex: 5, overflowX: 'clip' }}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
