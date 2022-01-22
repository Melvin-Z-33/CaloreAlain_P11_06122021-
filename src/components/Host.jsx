import React from 'react';
import '../styles/components/Host.scss';

class Host extends React.Component {
	render() {
		return (
			<div className="host_info">
				<p className="host_name">{this.props.host.name}</p>
				<img
					className="host_picture"
					src={this.props.host.picture}
					alt="propriétaire du logement"
				></img>
			</div>
		);
	}
}

export default Host;
