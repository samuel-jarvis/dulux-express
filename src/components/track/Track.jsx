import React from 'react'
import "./track.scss"
import { useState } from 'react'
import { projectFirestore } from '../../firebase/config'

const Track = ({ handleModal, setData, setError, setLoading }) => {
  const [trackingID, setTrackingID] = useState("")

  const handleSearch = () => {
    if (trackingID === "") {
      alert("Please enter a tracking ID")
      return
    }

    const fetchData = async () => {
      try {
        const res = await projectFirestore.collection('tracking').get()

        if (res.empty) {
          setError('Sorry, we couldn\'t find that tracking number. Please try again.')
          setLoading(false)
        } else {
          const data = res.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))

          const tracking = data.find(item => item.id === trackingID)
          if (tracking) {
            setData(tracking)
            handleModal()
            setLoading(false)
          } else {
            setData({ id: "", shipping: [] })
            handleModal()
          }
          setData(tracking)
        }
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchData()
    // handleModal()
  }

  return (
    <div className='track'>
      <p className='track__heading'>Track your Shipment</p>
      <div className="track__order">
        <div className="track__order__input">
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingID}
            onChange={(e) => setTrackingID(e.target.value)}
          />
          <button onClick={() => handleSearch()}>Track Order</button>
        </div>
      </div>
    </div>
  )
}

export default Track