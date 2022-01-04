import React from 'react';
import imgBackground from '../assets/about/gustavo-alves-YOXSC4zRcxw-unsplash 1.png';
//import { withRouter } from 'react-router-dom';
// import '../../style/components/Banner.scss';
// import { about } from '../../kasa_about';
import Footer from '../components/Footer';
// import mountains from '../../assets/moutains.png';
// import '../../style/layout/about.scss';
import BlockInfo from '../components/BlockInfo';
import Header from '../components/Header';

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			test: [],
		};
	}

	componentDidMount() {
		fetch('./detailTexte.json')
			.then((response) => response.json())
			.then((data) => {
				this.setState({ test: data });
			})
			.catch((error) => {
				console.log(`Fetch error: ${error}`);
			});
	}

	render() {
		console.log(this.state.test);
		return (
			<section className="about">
				<Header />
				<div className="banner">
					<img src={imgBackground} className="banner__img" alt="banner_img_moutains" />
				</div>
				<BlockInfo txt={this.state.test} />
				<Footer />
			</section>
		);
	}
}

export default About;
