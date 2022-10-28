import React from 'react'
import "./hero.scss"

const Hero = () => {
  return (
    <div className='hero padding'>
      <div className="hero__container">
        <h1 className="hero__title">Logistics Solutions <br /> Around the World</h1>
        <p className="hero__subtitle">We are able to provide a broad range of services including long haul, dedicated, regional and multiple pick up and deliver services.</p>
        <a href="/">
          {/* Track Package */}
          {/* <button className="hero__button">Track Package</button> */}
        </a>
      </div>
    </div>
  )
}

export default Hero