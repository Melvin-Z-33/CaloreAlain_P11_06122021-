import React from 'react';
import DropdownBlock from '../components/DropdownBlock';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Header from '../components/Header';
import imgBackground from '../assets/about/gustavo-alves-YOXSC4zRcxw-unsplash 1.png';
import imgBackgroundMobile from '../assets/about/banner__mobile.png';
import '../styles/pages/About.scss';

//import { withRouter } from 'react-router-dom';
// import '../../style/components/Banner.scss';
// import { about } from '../../kasa_about';
// import mountains from '../../assets/moutains.png';
// import '../../style/layout/about.scss';

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
				<div className="banner__about">
					<img
						src={imgBackground}
						className="banner__about-img"
						alt="banner_img_moutains"
					/>
				</div>
				{/* {DropdownBlock ? <DropdownBlock txt={this.state.test} /> : null} */}
				{/* <DropdownBlock txt={this.state.test} /> */}
				{this.state.test.map((pres, index) => (
					<>
						<Dropdown
							key={`${pres.title}-${index++}`}
							title={pres.title}
							description={pres.description}
						/>
					</>
				))}
				<Footer />
			</section>
		);
	}

	// <>{this.state.test.length > 0 ? <DropdownBlock txt={this.state.test} /> : null} </>
}
export default About;
