import React from 'react';
import '../styles/components/Rating.scss';

class Ratings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			etoile: props,
		};
	}

	render() {
		const arrayOfStar = [];
		const starMaximum = 5;
		const starGrey = starMaximum - this.state.etoile.rate;

		for (let i = 0; i < this.state.etoile.rate; i++) {
			arrayOfStar.push(<i key={'star-full-' + i} className="fas fa-star full"></i>);
		}
		for (let j = 0; j < starGrey; j++) {
			arrayOfStar.push(<i key={'star-blank-' + j} className="fas fa-star blank"></i>);
		}

		return <div>{arrayOfStar}</div>;
	}
}

export default Ratings;
