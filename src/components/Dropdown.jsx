import React from 'react';
import '../styles/components/DropdownBlock.scss';
import '../styles/components/Dropdown.scss';
import arrowDown from '../assets/arrow/arrow-down.svg';
import arrowUp from '../assets/arrow/arrow-up.png';
class Dropdown extends React.Component {
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
			<div className="dropdown" key={this.props.id}>
				<div className="dropdown-header">
					<h2
						className="dropdown-title"
						style={{ cursor: 'pointer' }}
						onClick={
							this.state.isActive ? () => this.handleHide() : () => this.handleShow()
						}
					>
						{this.props.title}
					</h2>
					{this.state.isActive ? (
						<img src={arrowUp} alt="" className="arrow arrow--up" />
					) : (
						<img src={arrowDown} alt="" className="arrow arrow--down" />
					)}
				</div>
				{this.state.isActive ? (
					<p className="dropdown-text">{this.props.description}</p>
				) : null}
			</div>
		);
	}
}

export default Dropdown;
