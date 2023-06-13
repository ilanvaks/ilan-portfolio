import AppLayout from "../layout/AppLayout";
import Portfolio from "../layout/Portfolio";
import ThreeThings from "../layout/ThreeThings";
import Header from "../layout/Header"


export default function Home () {

  return (
    <AppLayout>
      <Header/>
      <Portfolio/>
      <ThreeThings/>
    </AppLayout>
  )
}