"use client";

import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Makeup from './Makeup'
import Academy from './Academy'
import Aesthetics from './Aesthetics'
import CelebrityMakeup from './CelebrityMakeup'
import Location from './Location'
import ParallaxBanner from './ParallexBanner'
import Review from './Review'
import Faq from './Faq'
import LuxuryBooking from './LuxuryBooking'
function Home() {

  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Makeup/>
      <Aesthetics/>
      <Academy/>
      <CelebrityMakeup/>
      <Location/>
      <ParallaxBanner/> 
      <Review/>
      <Faq/>
      <LuxuryBooking/>
    </>
  )
}

export default Home