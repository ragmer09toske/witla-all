import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from "../../../Assets/KomeCave.jpg"
import img2 from "../../../Assets/Ndlamo.jpeg"
import img3 from "../../../Assets/Wallpapers/nucleus-afriski.jpg"
import img4 from "../../../Assets/landScape.jpeg"
import img5 from "../../../Assets/Wallpapers/new/2B6A4637_edited.jpg"
import img6 from "../../../Assets/Wallpapers/new/2B6A4648_edited.jpg"
import img7 from "../../../Assets/Wallpapers/new/2B6A4697_edited.jpg"
import img8 from "../../../Assets/Wallpapers/new/2B6A4802_edited.jpg"
import img9 from "../../../Assets/Wallpapers/new/2B6A4764_edited.jpg"
import img10 from "../../../Assets/Wallpapers/new/B DSC00740.jpg"
import img13 from "../../../Assets/Wallpapers/new/G997 SaniPassSunrise2001.jpg"
import img14 from "../../../Assets/Wallpapers/new/Mohale Dam .jpg"
import img15 from "../../../Assets/Wallpapers/new/2B6A4637_edited.jpg"
import img16 from "../../../Assets/Wallpapers/new/2B6A4648_edited.jpg"
import img17 from "../../../Assets/Wallpapers/new/2B6A4697_edited.jpg"
import img18 from "../../../Assets/Wallpapers/new/2B6A4764_edited.jpg"

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
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
