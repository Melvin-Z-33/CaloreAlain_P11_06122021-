// import React, { useState } from 'react';
// import Slider from '../components/Slider';
// import dataSlider from './logements';
// import BtnSlider from './BtnSlider';
// import './Tot.scss';

// export default function Tot() {
// 	console.log(dataSlider[0].cover);
// 	const [slideAnim, setSlideAnim] = useState({
// 		index: 0,
// 		inProgress: false,
// 	});

// 	const nextSlide = () => {
// 		if (slideAnim.index !== dataSlider.length) {
// 			setSlideAnim({ index: slideAnim.index + 1, inProgress: true });
// 		} else if (slideAnim.index === dataSlider.length) {
// 			setSlideAnim({ index: 0, inProgress: true });
// 		}
// 	};
// 	const prevSlide = () => {
// 		if (slideAnim.index !== 0) {
// 			setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
// 		} else if (slideAnim.index === 0) {
// 			setSlideAnim({ index: 20, inProgress: true });
// 		}
// 	};

// 	return (
// 		<div className="container-slider">
// 			{dataSlider.map((obj, index) => {
// 				console.log(dataSlider[index].cover);
// 				return (
// 					<div
// 						key={obj.id}
// 						className={slideAnim.index === index ? 'slide active-anim' : 'slide'}
// 					>
// 						{/* <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" /> */}
// 						<img src={dataSlider[index].cover} alt="" />
// 					</div>
// 				);
// 			})}
// 			<BtnSlider moveSlide={prevSlide} direction={'prev'} />
// 			<BtnSlider moveSlide={nextSlide} direction={'next'} />
// 		</div>
// 	);
// }
