import React from 'react';
import '../styles/components/DropdownBlock.scss';
import '../styles/components/Dropdown.scss';

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
		console.log('show');
	};

	handleHide = () => {
		this.setState({
			isActive: false,
		});
		console.log('hide');
	};

	render() {
		return (
			<div className="dropdown" key={this.props.key}>
				<h2
					className="dropdown-header"
					style={{ cursor: 'pointer' }}
					onClick={
						this.state.isActive ? () => this.handleHide() : () => this.handleShow()
					}
				>
					{this.props.title}
				</h2>
				{this.state.isActive ? (
					<p className="dropdown-text">{this.props.description}</p>
				) : null}
			</div>
		);
	}
}

export default Dropdown;
