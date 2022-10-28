import React from 'react';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact';
import Tracking from './dashboard/Tracking/Tracking';
import TrackDetails from './dashboard/TrackDetails/TrackDetails';
import Login from './dashboard/Login/Login';

import { useAuthContext } from './context/useAuthContext';

const App = () => {
	const { user } = useAuthContext();

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="admin/login" element={user ? <Tracking /> : <Login />} />
				<Route
					path="admin/tracking"
					element={user ? <Tracking /> : <Login />}
				/>
				<Route
					path="admin/tracking-details/:id"
					element={user ? <TrackDetails /> : <Login />}
				/>
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
