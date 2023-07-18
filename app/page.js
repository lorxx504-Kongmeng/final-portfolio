import Main from '../components/main/main'
import About from './about/page'
import Contact from './contact/page'
import Projects from './projects/page'
import Experiences from './experiences/page'

export default function Home() {
  return (
  <div>
    <Main />
    <About />
    <Experiences />
    <Projects />
    <Contact />
  </div>
  )
}
