"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Services from "./Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from 'react-slick';

// Dynamically import Slider to prevent SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Carousel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering on the server
  }

  // Explicitly type the settings object
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {/* First Slide: Developmental Themes */}
        <div>
          <Services />
        </div>

        {/* Additional Image Slides */}
        <div>
          <img src="/images/slide 1.jpg" alt="Slide 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide 2.jpg" alt="Slide 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide 3.jpg" alt="Slide 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide 4.jpg" alt="Slide 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide 5.jpg" alt="Slide 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide 6.jpg" alt="Slide 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide 7.jpg" alt="Slide 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide 8.jpg" alt="Slide 1" className="w-full h-auto" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
