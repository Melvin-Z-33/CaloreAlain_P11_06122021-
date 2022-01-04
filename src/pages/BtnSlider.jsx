import React from 'react';
import leftArrow from '../assets/vector-left.png';
import rightArrow from '../assets/vector-right.png';

export default function BtnSlider(props) {
	return (
		<button
			className={props.direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
			onClick={props.moveSlide}
		>
			<img src={props.direction === 'next' ? rightArrow : leftArrow} alt="icone fleches" />
		</button>
	);
}
