// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import Services from "./Services";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Settings } from "react-slick";
// import Image from "next/image";

// // Dynamically import Slider to prevent SSR issues
// const Slider = dynamic(() => import("react-slick"), { ssr: false });

// const Carousel = () => {
//   const settings: Settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="carousel-container">
//       <Slider {...settings}>
//         {/* First Slide: Services Component */}
//         <div>
//           <Services />
//         </div>

//         {/* Additional Image Slides */}
//         <div>
//           <Image
//             src="/images/slide 1.jpg"
//             alt="Slide 1"
//             className="w-full h-auto"
//             width={800}
//             height={600}
//           />
//         </div>
//         <div>
//           <Image
//             src="/images/slide 2.jpg"
//             alt="Slide 2"
//             className="w-full h-auto"
//             width={800}
//             height={600}
//           />
//         </div>
//         <div>
//           <Image
//             src="/images/slide 3.jpg"
//             alt="Slide 3"
//             className="w-full h-auto"
//             width={800}
//             height={600}
//           />
//         </div>
//         <div>
//           <Image
//             src="/images/slide 4.jpg"
//             alt="Slide 4"
//             className="w-full h-auto"
//             width={800}
//             height={600}
//           />
//         </div>
//         <div>
//           <Image
//             src="/images/slide 5.jpg"
//             alt="Slide 5"
//             className="w-full h-auto"
//             width={800}
//             height={600}
//           />
//         </div>
//         <div>
//           <Image
//             src="/images/slide 6.jpg"
//             alt="Slide 6"
//             className="w-full h-auto"
//             width={800}
//             height={600}
//           />
//         </div>
//         <div>
//           <Image
//             src="/images/slide 7.jpg"
//             alt="Slide 7"
//             className="w-full h-auto"
//             width={800}
//             height={600}
//           />
//         </div>
//         <div>
//           <Image
//             src="/images/slide 8.jpg"
//             alt="Slide 8"
//             className="w-full h-auto"
//             width={800}
//             height={600}
//           />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;

import React from 'react'
import Slider from './Slider'

const Carousel = () => {
  return (
    <div>
      <Slider/>
    </div>
  )
}

export default Carousel
