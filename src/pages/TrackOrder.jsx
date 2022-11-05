import React from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { useState, useEffect } from 'react';
import './trackorder.scss';
import { collection, query, doc, onSnapshot } from 'firebase/firestore';


const TrackOrder = () => {
  const params = useParams();
  const { id } = params;
  const [trackingData, setTrackingData] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const q = query(collection(db, 'tracking'));

      onSnapshot(q, (querySnapshot) => {
        if (querySnapshot.empty) {
          console.log('empty');
        } else {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          const tracking = data.find((item) => item.id === id);
          setTrackingData(tracking);
        }
      });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [id]);


  return (
    <div className='padding id-container'>
      <div className="track-id-heading">Track Order: {id}</div>
      <div className="container">
        <div className="tracking-div">
          <p className="track-heading">
            Delivery Info:
          </p>
          <p className='delivery_details'>
            {trackingData?.clientDetails}
          </p>

          {
            trackingData && (
              trackingData.extra.map((item, index) => (
                <div key={index} className="tracking-info-extra">
                  <p>Time: <span>{item.pTime}</span> </p>
                  <p>Date: <span>{item.pDate}</span> </p>
                  <p>Comment:  <span>{item.pComment}</span></p>
                </div>
              ))
            )
          }
        </div>

        <div className="tracking-div">
          <p className="track-heading">
            Shipment History
          </p>

          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                trackingData && (
                  trackingData.shipping.map((item, index) => (
                    <tr key={index}>
                      <td>{item.time}</td>
                      <td>{item.location}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))

                )
              }
              {/* {trackingData?.shipping.length === 0 ?
                <tr>
                  <td colSpan="5">No Location hav been added</td>
                </tr> :
                null
              } */}
            </tbody>
          </table>
        </div>

        <div className="tracking-div">
          <p className="track-heading">
            Packages
          </p>

          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Type</th>
                <th>Description</th>
                <th>Length</th>
                <th>Width</th>
              </tr>
            </thead>
            <tbody>
              {
                trackingData && (
                  trackingData.packaging.map((item, index) => (
                    <tr key={index}>
                      <td>{item.PQuantity}</td>
                      <td>{item.PType}</td>
                      <td>{item.PDesc}</td>
                      <td>{item.PLength}</td>
                      <td>{item.PWidth}</td>
                    </tr>
                  ))
                )
              }
              {/* {trackingData?.packaging.length === 0 ?
                <tr>
                  <td colSpan="5">No Package hav been added</td>
                </tr> :
                null
              } */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TrackOrder