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
		console.log('aa');
		return (
			<section className="block-info" key="123">
				{this.props.txt.map((pres) => (
					<>
						<Dropdown
							key={pres.id.toString()}
							title={pres.title}
							description={pres.description}
						/>
					</>
				))}
			</section>
		);
	}
}

export default DropdownBlock;
