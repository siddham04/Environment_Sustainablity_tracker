import React from 'react'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import Stats from './Stats'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
      <section className="hero">
        <HeroSection/>
      </section>

      <section className="features">
        <FeatureSection/>
      </section>

      <section className="stats">
        <Stats/>
      </section>

      <section className="testimonial">
        <Testimonial/>
      </section>
    </div>

  )
}

export default Home


