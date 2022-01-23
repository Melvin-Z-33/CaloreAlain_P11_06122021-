import React from 'react';
import '../styles/components/Collapse.scss';
import arrowDown from '../assets/arrow/arrow-down.png';
import arrowUp from '../assets/arrow/arrow-up.png';
class Collapse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
		};
	}

	handleShow = () => {
		this.setState({
			isActive: true,
		});
	};

	handleHide = () => {
		this.setState({
			isActive: false,
		});
	};

	render() {
		return (
			<div className="collapse" key={this.props.id}>
				<div
					className="collapse-header"
					style={{ cursor: 'pointer' }}
					onClick={
						this.state.isActive ? () => this.handleHide() : () => this.handleShow()
					}
				>
					<h2 className="collapse-title">{this.props.title}</h2>
					{this.state.isActive ? (
						<img src={arrowUp} alt="" className="arrow arrow--up" />
					) : (
						<img src={arrowDown} alt="" className="arrow arrow--down" />
					)}
				</div>

				{this.state.isActive ? (
					Array.isArray(this.props.description) ? (
						<ul className="collapse-text">
							{this.props.description.map((element, index) => (
								<li key={index}>{element}</li>
							))}
						</ul>
					) : (
						<p className="collapse-text">{this.props.description}</p>
					)
				) : null}
			</div>
		);
	}
}

export default Collapse;
