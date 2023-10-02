import "../styles/components/mainContent.sass"
import About from "./About"
import Projects from "./Projects"
import Technologies from "./Technologies"

const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Technologies />
      <Projects />
    </main>
  )
}

export default MainContent