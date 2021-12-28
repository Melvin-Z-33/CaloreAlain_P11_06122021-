import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CardWrapper from '../components/CardWrapper';

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<Header />
				<Banner />
				<CardWrapper />
				{/* <Banner background={img} title="Chez vous, partout et ailleurs"/> */}
				{/* <ListLogements /> */}
				{/* <Footer /> */}
			</div>
		);
	}
}

export default Home;
