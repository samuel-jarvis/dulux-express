import React from 'react'
import "./details.scss"
// import Image from "../../assets/details.png"

const Details = ({ text }) => {
  return (
    <div className='details padding'>
      <div className="details__section">
        <div className="details__section__left">
          <h1 className="title heading">Dulux Express Logistics Around <span className="orange">the World</span> </h1>
          <p className='subheading'>The trusted name for almost two decades. We are an International Freight and logistics service company and have been dedicated to serving the freight industry for quite a long time. Our headquarters are in the USA and we have branches in Moscow, Russia St. Petersburg, Russia & Odessa, Ukraine to. Our services are world class and our timings are perfect.</p>
          <p className='subheading'>
            {
              text ? text : ""
            }
          </p>
        </div>

        <div className="details__section__right">
          <div className="details__image">
            <img src="https://images.unsplash.com/photo-1624008915317-cb3ad69b16ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="details" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details