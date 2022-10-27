import React from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { useState, useEffect } from 'react';
import './trackdetails.scss';
import { Link } from 'react-router-dom';
import { collection, query, getDocs, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

const TrackDetails = () => {
  const params = useParams();
  const { id } = params;
  const [trackingData, setTrackingData] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    try {
      const q = query(collection(db, 'tracking'));

      onSnapshot(q, (querySnapshot) => {
        if (querySnapshot.empty) {
          // setError('Sorry, we couldn\'t find that tracking number.')
          // setLoading(false)
          console.log('empty');
        } else {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }));
          const tracking = data.find((item) => item.id === id);
          console.log('tracking', tracking);
          setTrackingData(tracking);
        }
      });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const addData = async (e) => {
    e.preventDefault();
    // add current id to firestore
    const ref = doc(db, 'tracking', id);
    // conver time to timestamp
    // const timestamp = new Date(time).getTime();

    await setDoc(ref, {
      shipping: [
        ...trackingData.shipping,
        {
          time,
          location
        }
      ]
    });
    setTime('');
    setLocation('');
  };

  return (
    <div className="trackingPage padding">
      <h1 className="heading">ADMIN: Add Data for ID </h1>

      <Link to="/tracking">Back to Tracking</Link>

      <div className="tracking-list">
        {trackingData && (
          <>
            <h2 className="head">ID: {trackingData.id}</h2>
            <h2 className="track__details__info">Details: {trackingData.trackingInfo}</h2>

            <div>
              <div className="list-header">
                <p>Location</p>
                <p>Time</p>
              </div>

              {trackingData.shipping.map((item) => (
                <div className="data__item">
                  <div className="item__info">
                    <p className="locations">{item.location}</p>
                    {/* new date from time */}
                    {/* <p className="date">{new Date(item.time.seconds).toDateString()}</p> */}
                    <p className="date">{item.time}</p>
                  </div>
                </div>
              ))}
              {trackingData.shipping.length === 0 ? <p>No Location added yet</p> : null}
            </div>
          </>
        )}

        {/* add input for time and location */}
        <div className="add__tracking__details">
          <form>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
            <input
              type="datetime-local"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Time"
            />
            <button onClick={(e) => addData(e)}>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrackDetails;
