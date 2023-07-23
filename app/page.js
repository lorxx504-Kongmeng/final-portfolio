import Main from "@/components/main/main"
import About from "@/app/about/page"
import Projects from "@/app/projects/page"
import {AiOutlineArrowUp} from 'react-icons/ai'
import Link from "next/link"
import Footer from "../components/footer/footer"


export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Projects />
      <div className='flex justify-center py-2 px-2 text-based' >
          <AiOutlineArrowUp size={30} />
          <Link href="/" className='mt-2 ml-2'> Back to Top</Link>
      </div>
      <Footer />
    </div>
  )
}
