import React from 'react'
import "./services.scss"
import {RiTruckLine} from 'react-icons/ri'
import {SlPlane} from 'react-icons/sl'
import {IoBoatOutline} from 'react-icons/io5'

const servicesList = [
  {
    id: 1,
    title: "Land Transport",
    description: "Our Road Freight Products offer high quality road transportation, from standard services such as PTL (Part) or FTL (Full-Truck Load) shipments to temperature controlled and highly secured transports.",
    icon: RiTruckLine,
  },
  {
    id: 2,
    title: "Air Transport",
    description: "Next flight out service to more than 220 countries and territories means that you’ll receive shipments in the shortest time possible.",
    icon: SlPlane,
  },
  {
    id: 3,
    title: "Sea Transport",
    description: "Our ocean freight shipment offer a wide range of quality controlled equipment types. We strive for on time deliverability and provide end-to-end visibility.",
    icon: IoBoatOutline,
  }
]

const Services = () => {
  return (
    <div className='services padding'>
      <div className="heading">Explore Our <span className="orange">Services</span></div>
      <p className="subheading">
        Dulux Express is the world’s driving worldwide coordinations supplier — we uphold industry <br /> and exchange the worldwide trade of merchandise through land transport.
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
            <div className="services__section__card__description">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services