import React from 'react';

export default class Rating extends React.Component {
	render() {
		return (
			<div className="rating_box" aria-label="note du logement">
				{(() => {
					switch (this.props.rate) {
						case '0':
							return (
								<div aria-label="0 étoile sur 5">
									{' '}
									<i className="fas fa-star blank"></i>
									<i className="fas fa-star blank"></i>
									<i className="fas fa-star blank"></i>
									<i className="fas fa-star blank"></i>
									<i className="fas fa-star blank"></i>
								</div>
							);

						case '1':
							return (
								<div aria-label="1 étoile sur 5">
									<i className="fas fa-star full"></i>
									<i className="fas fa-star blank"></i>
									<i className="fas fa-star blank"></i>
									<i className="fas fa-star blank"></i>
									<i className="fas fa-star blank"></i>
								</div>
							);

						case '2':
							return (
								<div aria-label="2 étoile sur 5">
									<i className="fas fa-star full"></i>
									<i className="fas fa-star full"></i>
									<i className="fas fa-star blank"></i>
									<i className="fas fa-star blank"></i>
									<i className="fas fa-star blank"></i>
								</div>
							);

						case '3':
							return (
								<div aria-label="3 étoile sur 5">
									<i className="fas fa-star full"></i>
									<i className="fas fa-star full"></i>
									<i className="fas fa-star full"></i>
									<i className="fas fa-star blank"></i>
									<i className="fas fa-star blank"></i>
								</div>
							);

						case '4':
							return (
								<div aria-label="4 étoile sur 5">
									<i className="fas fa-star full"></i>
									<i className="fas fa-star full"></i>
									<i className="fas fa-star full"></i>
									<i className="fas fa-star full"></i>
									<i className="fas fa-star blank"></i>
								</div>
							);

						case '5':
							return (
								<div aria-label="5 étoile sur 5">
									<i className="fas fa-star full"></i>
									<i className="fas fa-star full"></i>
									<i className="fas fa-star full"></i>
									<i className="fas fa-star full"></i>
									<i className="fas fa-star full"></i>
								</div>
							);

						default:
							return (
								<div aria-label="pas de note disponible">
									<i className="fas fa-star blank"></i>
								</div>
							);
					}
				})()}
			</div>
		);
	}
}
