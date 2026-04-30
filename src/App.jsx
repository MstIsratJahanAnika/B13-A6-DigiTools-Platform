import './App.css'
import Hero from './components/heroSection/Hero'
import RatingSection from './components/heroSection/RatingSection'
import Navbar from './components/Navbar/Navbar'
import CardContainer from './components/UI/cardContainer/CardContainer'
import DigitalToolsDescription from './components/UI/DigitalToolsDescription'
import GetStarted from './components/UI/GetStarted'
import TransparentPricing from './components/UI/TransparentPricing'
import WorkFlow from './components/UI/WorkFlow'

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

      {/* get started section */}
      <GetStarted />

      {/* Transparent Pricing */}
      <TransparentPricing />

      {/* Transform WorkFlow */}
      <WorkFlow />

      {/* footer section */}
    </>
  )
}

export default App
