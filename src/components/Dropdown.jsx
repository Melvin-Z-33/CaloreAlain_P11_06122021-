import React from 'react';

export default class Dropdown extends React.Component {
	state = { showContent: false };

	handleClick = (e) => {
		e.preventDefault();

		this.setState({ showContent: !this.state.showContent });
	};

	render() {
		const { title, content } = this.props;
		const className = this.state.showContent ? 'show' : 'hide';
		const antiClassName = this.state.showContent ? 'hide' : 'show';
		return (
			<div className="dropdown" aria-label={this.props.aria}>
				<button
					className="dropdown_btn"
					onClick={this.handleClick}
					aria-haspopup="true"
					aria-expanded={this.state.showContent}
				>
					{title}
					<i className={'fas fa-chevron-down ' + antiClassName}></i>
					<i className={'fas fa-chevron-up ' + className}></i>
				</button>
				<div className={'dropdown_content ' + className}>
					{Array.isArray(content) ? (
						<ul>
							{content.map((element, index) => (
								<li key={index}>{element}</li>
							))}
						</ul>
					) : (
						<p>{content}</p>
					)}
				</div>
			</div>
		);
	}
}
