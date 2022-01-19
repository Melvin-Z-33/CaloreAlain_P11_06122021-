import React from 'react';
import Carousel from '../components/Carroussel';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import { housings } from './logements';
import '../styles/pages/Housing.scss';
import Footer from '../components/Footer';

export default class Housings extends React.Component {
	render() {
		console.log(housings);
		const urlSplilt = window.location.pathname.split('/');
		const queryString_url_id = urlSplilt[2];
		console.log(urlSplilt);
		const index = housings.findIndex((housing) => {
			return housing.id === queryString_url_id;
		});
		// let Content = "<div aria-label='étoiles'>";
		// let Star = 'blank';

		// const test = () => {
		// 	for (let i = 1; i <= 5; i++) {
		// 		if (i <= housings[index].rating) Star = 'full';
		// 		Content += "<i className='fas fa-star " + Star + "'></i>";
		// 	}
		// 	Content += '</div>';
		// 	console.log('etoile' + ' ' + housings[index].rating);
		// };

		// <div aria-label="1 étoile sur 5">
		// 	<i className="fas fa-star full"></i>
		// 	<i className="fas fa-star blank"></i>
		// 	<i className="fas fa-star blank"></i>
		// 	<i className="fas fa-star blank"></i>
		// 	<i className="fas fa-star blank"></i>
		// </div>;

		// let rating;

		// const putStar = (nbrOfStars) => {
		// 	const starMaximum = 5;
		// 	let starGrey = starMaximum - nbrOfStars;
		// 	const starFull = '<i className="fas fa-star full"></i> ';
		// 	const starBlank = '<i className="fas fa-star blank"></i> ';
		// 	rating = `"<div  className="rating" aria-label=\" ${nbrOfStars} étoile sur 5\">"`;

		// 	for (let i = 1; i < starMaximum; i++) {
		// 		rating += starFull;
		// 	}
		// 	for (let j = 0; j < starGrey; j++) {
		// 		rating += starBlank;
		// 	}

		// 	rating += '<div/>';
		// 	return rating;
		// };

		return (
			<>
				<Header />
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
					<div className="housing__dropdown-block">
						<Dropdown
							aria="description du logement"
							title="Description"
							description={housings[index].description}
						/>
					</div>
					<div className="housing__dropdown-block">
						<Dropdown
							aria="équipements du logement"
							title="Equipements"
							description={housings[index].equipments}
						/>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}
