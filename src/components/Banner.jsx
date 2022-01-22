import React from 'react';
import banner from '../assets/banner/IMG.png';
import '../styles/components/Banner.scss';

class Banner extends React.Component {
	render() {
		return (
			<div className="banner">
				<img src={banner} alt=""></img>
				<p className="banner_title">Chez vous, partout et ailleurs </p>
			</div>
		);
	}
}

export default Banner;
