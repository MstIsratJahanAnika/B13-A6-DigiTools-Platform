import './App.css'
import Hero from './components/heroSection/Hero'
import RatingSection from './components/heroSection/RatingSection'
import Navbar from './components/Navbar/Navbar'
import CardContainer from './components/UI/cardContainer/CardContainer'
import DigitalToolsDescription from './components/UI/DigitalToolsDescription'

function App() {

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* heroSection */}
      <Hero />

      {/* hero section er thik niche gradient part */}
      <RatingSection />

      {/* Digital Tools Description Section */}
      <DigitalToolsDescription />

      {/* card container, ekhane cards load hobe */}
      <CardContainer />
    </>
  )
}

export default App
