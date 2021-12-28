import React from 'react';

class BlockInfo extends React.Component {
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
			<div>
				{this.state.isActive && <h1>Hello React</h1>}
				<button onClick={this.handleShow}>Show</button>
				<button onClick={this.handleHide}>Hide</button>
			</div>
		);
	}
}

export default BlockInfo;
