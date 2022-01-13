import React, { Component } from 'react';
import '../styles/components/Tags.scss';
export default class Tags extends Component {
	render() {
		return (
			<div className="tags">
				{this.props.tags.map((tag, index) => {
					return (
						<div key={index} className="tag">
							{tag}
						</div>
					);
				})}
			</div>
		);
	}
}
