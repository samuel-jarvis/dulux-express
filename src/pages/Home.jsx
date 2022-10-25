import React from 'react'
import Track from '../components/track/Track'
import Contact from '../sections/contact/Contact'
import Counter from '../sections/counter/Counter'
import Details from '../sections/details/Details'
import Hero from '../sections/hero/Hero'
import Services from '../sections/services/Services'
// import { projectFirestore } from '../firebase/config'
import { useState } from 'react'
import Modal from '../components/modal/Modal'


const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    console.log("working")
    openModal ? setOpenModal(false) : setOpenModal(true)
  }

  const [data, setData] = useState("beans and the nemesis")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  return (
    <div>
      {
        openModal && <Modal handleModal={handleModal} data={data} loading={loading} error={error} />
      }

      <Hero />
      <Track handleModal={handleModal} setData={setData} setError={setError} setLoading={setLoading} />
      <Details />
      <Services />
      <Counter />
      <Contact />
    </div>
  )
}

export default Home