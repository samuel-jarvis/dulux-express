import React from 'react'
import Header from '../components/header/Header'
import ContactForm from '../sections/contactForm.jsx/ContactForm'

const Contact = () => {
  return (
    <div>
      <Header main={"Contact Us"} />
      <ContactForm />
    </div>
  )
}

export default Contact