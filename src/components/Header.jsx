import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import '../styles/components/Header.scss';

class Header extends React.Component {
	render() {
		return (
			<header>
				<Link to="/" className="header_logo">
					<img src={logo} alt="Kasa" />
				</Link>
				<nav className="navbar">
					<Link to="/" className="nav__link">
						Accueil
					</Link>
					<Link to="/about" className="nav__link">
						À propos
					</Link>
				</nav>
			</header>
		);
	}
}

export default Header;
