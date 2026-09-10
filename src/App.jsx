import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Estudios from "./components/Estudios"
import Proyectos from "./components/Proyectos"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import SobreMi from "./components/SobreMi"
import Habilidades from "./components/Habilidades"
import { useEffect } from "react"


function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <SobreMi />
      <Habilidades />
      <Estudios />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
