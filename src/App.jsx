
// import { PiArticle } from 'react-icons/pi'
import './App.css'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Testimonial from './sections/Testimonial'
import CustomCursor from './components/CustomCursor'

function App() {
  

  return (
    <>
      <div className='relative gradient text-white'>
        <CustomCursor/>
        
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        
        
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
