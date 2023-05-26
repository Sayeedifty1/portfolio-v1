
import Banner from './components/Banner/Banner'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Projects from './components/Projetcs/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>

    </>
  )
}

export default App
