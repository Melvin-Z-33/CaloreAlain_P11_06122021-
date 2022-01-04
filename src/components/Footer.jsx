import React from 'react';
import logo from '../assets/footer/logo.png';

export default class Footer extends React.Component {
	render() {
		return (
			<div className="footer-container">
				<footer className="footer">
					<img src={logo} className="footer__logo" alt="logo" />
					<p className="footer__text">© 2020 Kasa. All rights reserved</p>
				</footer>
			</div>
		);
	}
}
