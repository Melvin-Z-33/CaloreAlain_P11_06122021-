import React from 'react';
import Carousel from '../components/Carroussel';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import { housings } from './logements';

export default class Housings extends React.Component {
	render() {
		console.log(housings);
		const urlSplited = window.location.pathname.split('/');
		const id = urlSplited[2];
		const index = housings.findIndex((housing) => {
			return housing.id === id;
		});
		return (
			<div>
				<Carousel pictures={housings[index].pictures} />

				<div className="housing_info">
					<div className="title-location-tags">
						<p className="housing_title" aria-label="titre du logement">
							{housings[index].title}
						</p>
						<p className="housing_location" aria-label="localisation du logement">
							{housings[index].location}
						</p>
						<Tags tags={housings[index].tags} />
					</div>
					<div className="host-rating">
						<Host host={housings[index].host} />
						<Rating rate={housings[index].rating} />
					</div>
				</div>
				<div className="housing_dropdown">
					<Dropdown
						aria="description du logement"
						title="Description"
						content={housings[index].description}
					/>
					<Dropdown
						aria="équipements du logement"
						title="Equipements"
						content={housings[index].equipments}
					/>
				</div>
			</div>
		);
	}
}
