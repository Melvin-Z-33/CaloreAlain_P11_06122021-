import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import imgBackground from '../assets/about/gustavo-alves-YOXSC4zRcxw-unsplash 1.png';
// import imgBackgroundMobile from '../assets/about/banner__mobile.png';
import '../styles/pages/About.scss';

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			test: [],
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		fetch('./detailTexte.json')
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					loading: false,
					test: data,
				});
			})
			.catch((error) => {
				console.log(`Fetch error: ${error}`);
			});
	}

	render() {
		const collapseComponents = this.state.test.map((pres, index) => (
			<Collapse
				key={`${pres.title}-${index++}`}
				title={pres.title}
				description={pres.description}
			/>
		));

		const collapse = this.state.loading ? 'loading...' : collapseComponents;

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
				{collapse}
				<Footer />
			</section>
		);
	}
}

export default About;
