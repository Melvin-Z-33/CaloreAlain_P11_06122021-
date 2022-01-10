import React from 'react';
import '../styles/components/DropdownBlock.scss';
import Dropdown from './Dropdown';

class DropdownBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			tot: this.props.text,
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

	render() {
		//const { test } = this.state;
		return (
			<section className="detail-block">
				{this.props.txt.map((pres) => (
					<>
						<Dropdown key={pres.id} title={pres.title} description={pres.description} />
					</>
				))}
			</section>
		);
	}
}

export default DropdownBlock;
