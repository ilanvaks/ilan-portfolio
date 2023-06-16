import AppLayout from "../layout/AppLayout";
import Portfolio from "../layout/Portfolio";
import ThreeThingsCopy from "../layout/ThreeThings/ThreeThingsCopy";
import Skills from "../layout/Skills"
import Header from "../layout/Header"
import Certification from "../layout/Certification"
// import Contact from "../layout/Contact"
import About from "../layout/About";


export default function Home () {

  return (
    <AppLayout>
      <Header/>
      <Portfolio/>
      <ThreeThingsCopy/>
      <Skills/>
      <Certification/>
      <About/>
      {/* <Contact/> */}
    </AppLayout>
  )
}