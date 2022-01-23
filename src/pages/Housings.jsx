import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Collapse from '../components/Collapse';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import Footer from '../components/Footer';
import '../styles/pages/Housing.scss';

class Housings extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			housings: [],
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		fetch('/logements.json')
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					loading: false,
					housings: data,
				});
			})
			.catch((error) => {
				console.log(`Fetch error: ${error}`);
			});
	}

	render() {
		const { housings } = this.state;
		const queryIdInUrl = window.location.pathname.split('/')[2];

		return (
			<>
				<Header />
				{housings.map((housing, index) =>
					housing.id === queryIdInUrl ? (
						<div key="accomadation-content">
							<Gallery
								pictures={housing.pictures}
								key={`gallery-${housing.id}-${index}`}
							/>
							<div className="housing_info">
								<div className="title-location-tags">
									<p className="housing_title" aria-label="titre du logement">
										{housing.title}
									</p>
									<p
										className="housing_location"
										aria-label="localisation du logement"
									>
										{housing.location}
									</p>
									<Tags tags={housing.tags} key={`tags-${housing.id}`} />
								</div>
								<div className="host-rating">
									<Host host={housing.host} key={`host-${housing.id}`} />
									<Rating rate={housing.rating} key={`key-${housing.id}`} />
								</div>
							</div>
							<div className="housing_collapse ">
								<div className="housing__collapse-block">
									<Collapse
										aria="équipements du logement"
										title="Description"
										description={housing.description}
										key={`collapse1-${housing.id}`}
									/>
								</div>
								<div className="housing__collapse-block">
									<Collapse
										aria="équipements du logement"
										title="Equipements"
										description={housing.equipments}
										key={`collapse2-${housing.id}`}
									/>
								</div>
							</div>
						</div>
					) : null,
				)}
				<Footer />
			</>
		);
	}
}

export default Housings;
