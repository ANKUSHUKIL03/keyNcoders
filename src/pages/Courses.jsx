import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CourseCarousel from "../components/CourseCaraousel"

function Courses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Set autoplay to true
    autoplaySpeed: 3000, // Set autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {/* Your carousel content here */}
      <div>
        <h3 className=' text-center'>Course 1</h3>
		<CourseCarousel/>
      </div>
      <div>
        <h3 className=' text-center'>Course 2</h3>
		<CourseCarousel/>
      </div>
      <div>
        <h3 className=' text-center'>Course 3</h3>
		<CourseCarousel/>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
}

export default Courses;
