import React from 'react';
import '../styles/components/Card.scss';
import { Link } from 'react-router-dom';

class Card extends React.Component {
	render() {
		return (
			<Link to={`/accommodation/${this.props.id}`} className="card" id={this.props.id}>
				<img src={this.props.cover} className="card__img" alt="card-img" />
				
				<p className="card__title">{this.props.title}</p>
			</Link>
		);
	}
}

export default Card;
