import React from 'react';
import '../styles/components/BlockInfo.scss';

class BlockInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
		};
	}

	handleShow = (index) => {
		this.setState({
			isActive: true,
		});
		console.log(index);
	};

	handleHide = (index) => {
		this.setState({
			isActive: false,
		});
		console.log(index);
	};

	// state = {
	// 	show: true,
	// };

	// montrerContext = () => {
	// 	this.setState({
	// 		show: !this.state.show,
	// 	});
	// };

	render() {
		const { test } = this.state;
		return (
			<section className="detail-block">
				{/* {test.map((block, index) => (
					<>
						<h3
							className="info-block"
							key={`blo-${index}`}
							style={{ cursor: 'pointer' }}
							onClick={
								this.state.isActive
									? () => this.handleHide(index)
									: () => this.handleShow(index)
							}
						>
							{block.title}
						</h3>

						{this.state.isActive ? <div>{block.description}</div> : null}
					</>
				))}  */}
				{this.props.txt.map((pres) => (
					<div className="blockInfo" key={pres.id}>
						<h2
							style={{ cursor: 'pointer' }}
							onClick={
								this.state.isActive
									? () => this.handleHide()
									: () => this.handleShow()
							}
						>
							{pres.title}
						</h2>
						{this.state.isActive ? <div>{pres.description}</div> : null}
					</div>
				))}
			</section>
		);
	}
}

export default BlockInfo;
