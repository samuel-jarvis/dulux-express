import React from 'react'
import "./trust.scss"
import {AiOutlineSafety} from 'react-icons/ai'
import {SiSpeedtest} from 'react-icons/si'
import {BiAward} from 'react-icons/bi'

const servicesList = [
  {
    id: 1,
    title: "Safe Delivery",
    description: "Hello There",
    icon: AiOutlineSafety,
  },
  {
    id: 2,
    title: "Quick",
    description: "Hello There",
    icon: SiSpeedtest,
  },
  {
    id: 3,
    title: "Years of Excellence",
    description: "Hello There",
    icon: BiAward,
  }
]

const Trust = () => {
  return (
    <div className='services padding'>
      <div className="heading">Why <span className="orange">Trust Us</span></div>
      <p className="subheading">
      Our Industry-Explicit Competence and world’s driving worldwide coordinations supplier  <br /> We uphold industry and exchange the worldwide trade of merchandise through land transport.
      </p>

      <div className="services__section">
        {servicesList.map((service) => (
          <div className="services__section__card" key={service.id}>
            <div className="services__section__card__icon">
              <service.icon />
            </div>
            <div className="services__section__card__title">
              {service.title}
            </div>
            {/* <div className="services__section__card__description">
              {service.description}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trust