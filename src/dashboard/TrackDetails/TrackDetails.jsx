import React from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { useState, useEffect } from 'react';
import './trackdetails.scss';
import { Link } from 'react-router-dom';
import { collection, query, doc, setDoc, onSnapshot } from 'firebase/firestore';

const TrackDetails = () => {
	const params = useParams();
	const { id } = params;
	const [trackingData, setTrackingData] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	// location update
	const [time, setTime] = useState('');
	const [location, setLocation] = useState('');
	const [status, setStatus] = useState('');

	// extra details
	const [pTime, setPTime] = useState('');
	const [pDate, setPDate] = useState('');
	const [pComment, setPComment] = useState('');

	//add products
	const [PQuantity, setPQuantity] = useState('');
	const [PType, setPType] = useState('');
	const [PWeight, setPWeight] = useState('');
	const [PDesc, setPDesc] = useState('');
	const [PWidth, setPWidth] = useState('');
	const [PLength, setPLength] = useState('');

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
						id: doc.id,
					}));
					const tracking = data.find((item) => item.id === id);
					console.log("tracking" + tracking)
					console.log("extra" + tracking.extra)
					setTrackingData(tracking);
					console.log(trackingData);
				}
			});
		} catch (err) {
			setError(err.message);
			setLoading(false);
		}
	}, []);

	const addShipping = async (e) => {
		e.preventDefault();
		const ref = doc(db, 'tracking', id);

		const extra = trackingData.extra;
		const packaging = trackingData.packaging;
		const clientDetails = trackingData.clientDetails;

		await setDoc(ref, {
			clientDetails,
			extra,
			packaging,
			shipping: [
				...trackingData.shipping,
				{
					time,
					location,
					status
				},
			],
		});
		setTime('');
		setLocation('');
	};

	const deleteLastItem = async () => {
		const confirm = window.confirm(
			'Are you sure you want to delete this tracking number?'
		);
		if (confirm) {
			// delete from firestore
			const ref = doc(db, 'tracking', id);
			// remove the last item from shipping array
			const extra = trackingData.extra;
			const packaging = trackingData.packaging;
			const clientDetails = trackingData.clientDetails;

			const shipping = trackingData.shipping;
			shipping.pop();
			await setDoc(ref, {
				clientDetails,
				extra,
				packaging,
				shipping,
			});
		}
	};

	const addExtraData = async (e) => {
		e.preventDefault();
		const ref = doc(db, 'tracking', id);

		const shipping = trackingData.shipping;
		const clientDetails = trackingData.clientDetails
		const packaging = trackingData.packaging

		await setDoc(ref, {
			clientDetails,
			packaging,
			shipping,
			extra: [
				{
					pTime,
					pDate,
					pComment,
				}
			],
		});

		setPTime('');
		setPDate('');
		setPComment('');
	};

	const addPackage = async (e) => {
		e.preventDefault();
		const ref = doc(db, 'tracking', id);

		const shipping = trackingData.shipping;
		const extra = trackingData.extra;
		const clientDetails = trackingData.clientDetails;


		await setDoc(ref, {
			clientDetails,
			shipping,
			extra,
			packaging: [
				...trackingData.packaging,
				{
					PQuantity,
					PType,
					PDesc,
					PWidth,
					PLength,
				}
			],
		});

		setPQuantity('');
		setPType('');
		// setPWeight('');
		setPDesc('');
		setPWidth('');
		setPLength('');
	};

	const deleteLastProduct = async () => {
		const confirm = window.confirm(
			'Are you sure you want to delete this tracking number?'
		);
		if (confirm) {
			// delete from firestore
			const ref = doc(db, 'tracking', id);
			// remove the last item from shipping array
			const packageList = trackingData.packaging;
			const shipping = trackingData.shipping;
			const extra = trackingData.extra;
			const clientDetails = trackingData.clientDetails;

			packageList.pop();

			await setDoc(ref, {
				clientDetails,
				shipping,
				extra,
				packaging: packageList,
			});
		}
	};


	return (
		<div className="trackingPage padding">
			<h1 className="heading">ADMIN: Add Data for ID </h1>

			<Link className="back_link" to="/admin/tracking">
				Back to Tracking
			</Link>

			<div className="tracking-list">
				{trackingData && (
					<>
						<h2 className="head">ID: {trackingData.id}</h2>
						<h2 className="track__details__info" style={{ marginBottom: "2rem" }}>
							Client Details: {trackingData.clientDetails}
							{/* Client Details: {trackingData.extra} */}
						</h2>

						<div>
							<h2>Extra Details</h2>
							<div className='extra_text'>
								{
									trackingData.extra.map((item, index) => (
										<div key={index}>
											<p>Time: {item.pTime}</p>
											<p>Date: {item.pDate}</p>
											<p>Comment: {item.pComment}</p>
										</div>
									))
								}
								{/* <p>Pickup Date: {trackingData.extra.PTime}</p>
								<p>Pickup Time: {trackingData.extra?.PDate}</p>
								<p>Comment: {trackingData.extra?.PComment}</p> */}
							</div>
						</div>

						{/* form for date time and comment update and set */}

						<form className="form" onSubmit={addExtraData}>
							<div className="extraForm">
								<div className="form__group">
									<label htmlFor="time">Pickup Date</label>
									<input
										type="date"
										name="time"
										value={pDate}
										onChange={(e) => setPDate(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<label htmlFor="location">Pick Up Time</label>
									<input
										type="time"
										name="location"
										value={pTime}
										onChange={(e) => setPTime(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<label htmlFor="location">Comment</label>
									<input
										type="text"
										value={pComment}
										onChange={(e) => setPComment(e.target.value)}
									/>
								</div>
							</div>

							<button className="btn" type="submit">
								Update
							</button>
						</form>

						<h2>Tracking Locations</h2>
						<div>
							<table>
								<thead>
									<tr>
										<th>Time</th>
										<th>Location</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									{trackingData.shipping.map((item, index) => (
										<tr key={index}>
											<td>{item.time}</td>
											<td>{item.location}</td>
											<td>{item.status}</td>
										</tr>
									))}
								</tbody>
							</table>
							{trackingData.shipping.length === 0 ? (
								<p>No Location added yet</p>
							) : null}
						</div>
					</>
				)}

				{/* add input for time and location */}
				<div className="add__tracking__details">
					<form>
						<input
							type="datetime-local"
							value={time}
							onChange={(e) => setTime(e.target.value)}
							placeholder="Time"
						/>
						<input
							type="text"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							placeholder="Location"
						/>
						<input
							type="text"
							value={status}
							onChange={(e) => setStatus(e.target.value)}
							placeholder="Status"
						/>
						<button onClick={(e) => addShipping(e)}>Add</button>
					</form>
				</div>

				{/*  */}
				<div className="delete_last">
					<p onClick={() => deleteLastItem()}>Delete Last Location</p>
				</div>
				<h2>Product Info</h2>

				{/*table for product info*/}
				<div>
					{
						trackingData && (
							<>
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
										{trackingData.packaging.map((item, index) => (
											<tr key={index}>
												<td>{item.PQuantity}</td>
												<td>{item.PType}</td>
												<td>{item.PDesc}</td>
												<td>{item.PLength}</td>
												<td>{item.PWidth}</td>
											</tr>
										))}
									</tbody>
								</table>
								{trackingData.packaging.length === 0 ? <p>No Product added yet</p> : null}
							</>
						)
					}

				</div>


				{/* form to add qty, type, desc, length, width */}
				<div className="add__tracking__details">
					<form>
						<input
							type="text"
							value={PQuantity}
							onChange={(e) => setPQuantity(e.target.value)}
							placeholder="Quantity"
						/>
						<input
							type="text"
							value={PType}
							onChange={(e) => setPType(e.target.value)}
							placeholder="Type"
						/>
						<input
							type="text"
							value={PDesc}
							onChange={(e) => setPDesc(e.target.value)}
							placeholder="Description"
						/>
						<input
							type="text"
							value={PLength}
							onChange={(e) => setPLength(e.target.value)}
							placeholder="Length"
						/>
						<input
							type="text"
							value={PWidth}
							onChange={(e) => setPWidth(e.target.value)}
							placeholder="Width"
						/>
						<button onClick={(e) => addPackage(e)}>Add Prod.</button>
					</form>
				</div>

				<div className="delete_last">
					<p onClick={() => deleteLastProduct()}>Delete Last Product Added</p>
				</div>

			</div>
		</div>
	);
};

export default TrackDetails;
