import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSelling from '../components/BestSelling'
import OurPolicy from '../components/OurPolicy'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSelling />
      <OurPolicy />
      <Newsletter />
    </div>
  )
}

export default Home