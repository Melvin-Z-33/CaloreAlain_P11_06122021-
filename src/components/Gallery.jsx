import React from 'react';
import '../styles/components/Gallery.scss';
class Gallery extends React.Component {
	state = {
		picturesArray: this.props.pictures,

		currentIndex: 0,
	};

	handleClickRight = () => {
		if (this.state.currentIndex === this.state.picturesArray.length - 1) {
			this.setState({ currentIndex: 0 });
			console.log(this.state.picturesArray.length);
		} else {
			this.setState({ currentIndex: this.state.currentIndex + 1 });
		}
	};

	handleClickLeft = () => {
		if (this.state.currentIndex === 0) {
			this.setState({ currentIndex: this.state.picturesArray.length - 1 });
		} else {
			this.setState({ currentIndex: this.state.currentIndex - 1 });
		}
	};

	render() {
		return (
			<div className="gallery" aria-label="photos du logement">
				<button className="left_btn" aria-label="photo précédente">
					<i className="fas fa-chevron-left" onClick={this.handleClickLeft}></i>
				</button>
				<img
					className="gallery_img"
					src={this.state.picturesArray[this.state.currentIndex]}
					alt="photos du logement"
				></img>
				<button className="right_btn" aria-label="photo suivante">
					<i className="fas fa-chevron-right" onClick={this.handleClickRight}></i>
				</button>
				<p className="image_number">
					{this.state.currentIndex + 1}/{this.props.pictures.length}
				</p>
			</div>
		);
	}
}

export default Gallery;
