import React from 'react'
import "./modal.scss"
import { GrFormLocation } from 'react-icons/gr'

const Modal = ({ handleModal, data, error }) => {
  console.log(data)
  return (
    <div>
      {/* a modal */}
      <div className="modal" onClick={() => handleModal()}>
        <div className="modal-content">
          <span onClick={() => handleModal()} className="close">&times;</span>

          {/* {
            error ? <p>{error}</p> : <p>Sorry, we couldn't find that tracking number. Please try again.</p>
          } */}

          {data ? (
            <>
              <h2>Standard Shipping</h2>
              <p className='data__heading'>Tracking ID: {data.id}</p>
              <p className='data__details'>Delivery Details: {data.trackingInfo}</p>

              {data.shipping.map(item =>
                <div className="data__item">
                  <GrFormLocation className='item__icon' />
                  <div className="">
                    <p className='locations'>{item.location}</p>
                    <p className='time'>{item.time}</p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <p>Sorry, we couldn't find that tracking number. Please try again.</p>
          )}
        </div>

        <p></p>
      </div>
    </div>
  )
}

export default Modal