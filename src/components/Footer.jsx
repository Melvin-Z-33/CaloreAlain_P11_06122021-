import React from 'react';
import logo from '../assets/footer/logo__footer.png';
import '../styles/components/Footer.scss';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<img src={logo} className="footer__logo" alt="logo" />
				<p className="footer__text">© 2020 Kasa. All rights reserved</p>
			</footer>
		);
	}
}
