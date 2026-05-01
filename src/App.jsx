import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/heroSection/Hero'
import RatingSection from './components/heroSection/RatingSection'
import Navbar from './components/Navbar/Navbar'
import DigitalToolsDescription from './components/UI/DigitalToolsDescription'
import Footer from './components/UI/Footer'
import GetStarted from './components/UI/GetStarted'
import TransparentPricing from './components/UI/TransparentPricing'
import WorkFlow from './components/UI/WorkFlow'

const fetchToolCards =async()=>{
  const res = await fetch('/public/data.json');
  const jData =await res.json();
  // console.log(jData);//success

  return jData;
}

function App() {

  // json data er promise
  const getToolCardsPromise = fetchToolCards();

  // all tools theke card cart a add hobe
      const [addToCart, setAddToCart] = useState([]);

  return (
    <>
      {/* navbar */}
      <Navbar addToCart={addToCart}/>

      {/* heroSection */}
      <Hero />

      {/* hero section er thik niche gradient part */}
      <RatingSection />

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

      {/* Digital Tools Description Section */}
      <DigitalToolsDescription getToolCardsPromise={getToolCardsPromise} addToCart={addToCart} setAddToCart={setAddToCart}/>
      </Suspense>

      {/* card container, ekhane cards load hobe */}
      {/* <CardContainer /> */}

      {/* get started section */}
      <GetStarted />

      {/* Transparent Pricing */}
      <TransparentPricing />

      {/* Transform WorkFlow */}
      <WorkFlow />

      {/* footer section */}
      <Footer />
    </>
  )
}

export default App
