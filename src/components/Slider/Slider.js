/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import monsoon from '../../images/slider/monson-sale.png';
import imageOne from '../../images/slider/slide1.png';
import imageTwo from '../../images/slider/slide2.png';
import imageThree from '../../images/slider/slide3.png';
import imageFour from '../../images/slider/slide4.png';
const images = [
    monsoon,
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
];
const Slider = () => {
    return (
        <div className="slide-container">
            <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
        </div>
    );
};

export default Slider;