import React from 'react'
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact padding'>
      <h1 className="heading">
        If You Have Any Questions about Logistics, Please Feel Free to
        <span className="orange"> Contact Us</span>
      </h1>
      <p className='subheading'>
        Dulux Express is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade.
      </p>
      <a href="/contact" className='button'>
        Contact Us
      </a>
    </div>
  )
}

export default Contact