import React from 'react'
import Header from '../components/header/Header'
import Details from '../sections/details/Details'
import Counter from '../sections/counter/Counter'
import Contact from '../sections/contact/Contact'
import Trust from '../components/services/Trust'

const About = () => {
  return (
    <div>
      <Header main={"About Dulux"} />
      <Details text={"Our mission is to make the process of buying and managing shipping and logistics services simple, efficient, stress free and cost effective. We do this by providing a friendly, efficient and personalized service combined with innovative IT solutions that enable our customers to always be in control of their supply chains."} />
      <Trust />
      <Counter />
      <Contact />
    </div>
  )
}

export default About