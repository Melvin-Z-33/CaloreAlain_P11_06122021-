import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/pages/Notfound.scss';

class NotFound extends React.Component {
	render() {
		return (
			<>
				<Header />
				<div className="error">
					<p className="error__number">404</p>
					<p className="error__message">Oups! La page que vous demandez n'existe pas.</p>
					<Link to="/" className="error__backHome">
						Retourner sur la page d’accueil
					</Link>
				</div>
			</>
		);
	}
}

export default NotFound;
