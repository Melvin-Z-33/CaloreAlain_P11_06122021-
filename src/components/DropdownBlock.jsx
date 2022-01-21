import React from 'react';
import '../styles/components/DropdownBlock.scss';
import Dropdown from './Dropdown';

class DropdownBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tot: this.props.text,
		};
	}

	render() {
		//const { test } = this.state;
		console.log(this.state.tot);
		let a = 2;
		return (
			<section className="block-info" key="123">
				{this.props.txt.map((pres, index) =>
					console.log(Dropdown.key)(
						<>
							<Dropdown
								key={`pres.id.toString()-${index++}`}
								title={pres.title}
								description={pres.description}
							/>
						</>,
					),
				)}
			</section>
		);
	}
}

export default DropdownBlock;
