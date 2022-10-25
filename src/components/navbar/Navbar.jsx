import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.scss';
import Logo from "../../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
// import Web3 from 'web3'

const Navbar = () => {
	// const { authenticate, isAuthenticated, user } = useMoralis();
	// const [tokens, setTokens] = useState([]);

	const [show, setShow] = useState(false);
	// show and hide navbar
	const handleShow = () => {
		if (window.scrollY > 100) {
			setShow(true);
		} else {
			setShow(false);
		}
	};
	window.addEventListener('scroll', handleShow);

	const [showMenu, setShowMenu] = useState(false);


	return (
		<nav className={show ? 'navbar show' : 'navbar'}>
			<div className="navbar__logo">
				<Link to="/" className='navLogoLink'>
					<img src={Logo} alt="" />
					<h1>Dulux Express</h1>
				</Link>
			</div>

			<ul className={showMenu ? 'navbar__menu showMenu' : 'navbar__menu'}>
				{/* close mobile nav button*/}
				<div className="navbar__close" onClick={() => setShowMenu(false)}>
					<FaTimes className="navbar__closeIcon" />
				</div>

				<li className="navbar__item">
					<Link to="/" className="navbar__link">
						Home
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/about" className="navbar__link">
						About
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/contact" className="navbar__link">
						Contact
					</Link>
				</li>

				<div className="navbar__button mobile_connect">
					<div className="connect-wallet-prompt">
						<Link to="/">Track Order</Link>
					</div>
				</div>
			</ul>

			<div className="navbar__button" onClick={() => setShowMenu(true)}>
				<div className="connect-wallet-prompt">
					<Link to="/">Track Order</Link>
				</div>

				<div className="navbar__hamburger">
					<FaBars />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
