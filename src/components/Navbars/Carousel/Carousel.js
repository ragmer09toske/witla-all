import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from "../../../Assets/packages/pk1.jpeg"
import img2 from "../../../Assets/packages/pk2.jpeg"
import img3 from "../../../Assets/packages/pk3.jpeg"
import img4 from "../../../Assets/packages/pk4.jpeg"
import img5 from "../../../Assets/packages/pk5.jpeg"

const images = [
    img1,
    img2,
    img3,
    img4,
    img5
];

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Slide ${index}`}
              className="slide-image"
            />
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slideshow-container {
          width: 100%; /* Adjust the width as needed */
          margin: 0 auto; /* Center the slideshow */
          position: relative;
          overflow: hidden;
        }

        .slide-image {
          height: 400px; /* Set a fixed height for all images */
          object-fit: cover; /* Ensure the image covers the area without stretching */
          width: 100%; /* Make sure the images fill the container horizontally */
        }
      `}</style>
    </div>
  );
};

export default Slideshow;
