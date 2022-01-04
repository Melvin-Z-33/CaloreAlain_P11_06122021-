import React from 'react';
//import '../styles/components/Banner.scss';
import '../styles/components/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png';

class Header extends React.Component {
	render() {
		return (
			<header>
				<Link to="/">
					<img src={logo} className="header_logo" alt="Kasa" />
				</Link>
				<nav className="navbar">
					<Link to="/" className="nav-link">
						Accueil
					</Link>
					<Link to="/about" className="nav-link">
						À propos
					</Link>
					<Link to="/tot" className="nav-link">
						toto
					</Link>
				</nav>
			</header>
		);
	}
}

export default Header;
