import React from 'react';
import Carousel from '../components/Carroussel';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
// import { housings } from './logements';
import '../styles/pages/Housing.scss';
import Footer from '../components/Footer';

export default class Housings extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			housings: [],
			index: '',
			obj: {},
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
				const { housings } = this.state;
				console.log(housings);
				const urlSplilt = window.location.pathname.split('/');
				const queryString_url_id = urlSplilt[2];
				console.log(urlSplilt);
				const searchIndex = housings.findIndex((housing) => {
					return housing.id === queryString_url_id;
				});
				this.setState({ index: searchIndex });
				this.setState({ obj: this.state.housings[this.state.index] });
			})
			.catch((error) => {
				console.log(`Fetch error: ${error}`);
			});
	}

	render() {
		const { housings, index, obj } = this.state;
		const urlSplilt = window.location.pathname.split('/')[2];

		const DropdownComponentsDescription = (housing) => {
			return (
				<>
					<Dropdown
						aria="équipements du logement"
						title="Description"
						description={housing.description}
						key={`dropdown2-${housing.id}`}
					/>
					,
				</>
			);
		};

		const DropdownComponentsEquipment = (housing) => {
			return (
				<>
					<Dropdown
						aria="équipements du logement"
						title="Equipements"
						description={housing.equipments}
						key={`dropdown2-${housing.id}`}
					/>
					,
				</>
			);
		};

		// const DropwdownDescription = this.state.loading
		// 	? 'loading...'
		// 	: DropdownComponentsDescription;

		return (
			<>
				<Header />
				{housings.map((housing, index) =>
					housing.id === urlSplilt ? (
						<div>
							<Carousel
								pictures={housing.pictures}
								key={`slider-${housing.id}-${index}`}
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
							<div className="housing_dropdown ">
								<div className="housing__dropdown-block">
									{DropdownComponentsDescription(housing)}
								</div>
								<div className="housing__dropdown-block">
									{DropdownComponentsEquipment(housing)}
								</div>
							</div>
						</div>
					) : null,
				)}

				<Footer />
			</>
		);
	}

	/* <div className="housing_info">
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
				</div>{' '}
				*/
}
