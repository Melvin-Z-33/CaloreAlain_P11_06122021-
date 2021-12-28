import React from 'react';
import imgBackground from '../assets/about/gustavo-alves-YOXSC4zRcxw-unsplash 1.png';
//import { withRouter } from 'react-router-dom';
// import '../../style/components/Banner.scss';
// import { about } from '../../kasa_about';
import DetailBlock from '../components/DetailBlock';
// import mountains from '../../assets/moutains.png';
// import '../../style/layout/about.scss';

class About extends React.Component {
	generateDetailBlocks = (data) => {
		return Object.keys(data).map((key, index) => (
			<DetailBlock blockName={key} blockContent={data[key]} key={`${index}`} />
		));
	};

	render() {
		return (
			<section className="about">
				<div className="banner">
					<img src={imgBackground} className="banner__img" alt="banner_img_moutains" />
				</div>
				<div className="about_block-info">oki </div>
			</section>
		);
	}
}

export default About;
