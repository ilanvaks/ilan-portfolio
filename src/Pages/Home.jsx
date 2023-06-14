import AppLayout from "../layout/AppLayout";
import Portfolio from "../layout/Portfolio";
import ThreeThingsCopy from "../layout/ThreeThings/ThreeThingsCopy";
import Header from "../layout/Header"


export default function Home () {

  return (
    <AppLayout>
      <Header/>
      <Portfolio/>
      <ThreeThingsCopy/>
    </AppLayout>
  )
}