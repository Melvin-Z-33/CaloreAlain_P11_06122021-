import React from 'react';
import Card from './Card';
import '../styles/components/CardWrapper.scss';

import '../styles/components/Banner.scss';

class CardWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			housings: [],
		};
	}

	componentDidMount() {
		fetch('./logements.json')
			.then((response) => response.json())
			.then((data) => {
				this.setState({ housings: data });
			})
			.catch((error) => {
				console.log(`Fetch error: ${error}`);
			});
	}

	render() {
		const { housings } = this.state;
		console.log('ici', housings);
		return (
			<section className="cardWrapper">
				<ul>
					{housings.map((housing, index) => (
						<Card
							key={`${housing.id}-${index}`}
							id={housing.id}
							title={housing.title}
							cover={housing.cover}
						/>
					))}
				</ul>
			</section>
		);
	}
}

export default CardWrapper;
