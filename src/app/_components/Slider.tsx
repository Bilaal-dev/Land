"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Services from "./Services";
import Image from "next/image";


const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop
    >
      <SwiperSlide>
        <div>
          <Services/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <Image
            src="/images/slide 1.jpg"
            alt="Slide 1"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <Image
            src="/images/slide 2.jpg"
            alt="Slide 2"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <Image
            src="/images/slide 3.jpg"
            alt="Slide 3"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <Image
            src="/images/slide 4.jpg"
            alt="Slide 4"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <Image
            src="/images/slide 5.jpg"
            alt="Slide 5"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <Image
            src="/images/slide 6.jpg"
            alt="Slide 6"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <Image
            src="/images/slide 7.jpg"
            alt="Slide 7"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <Image
            src="/images/slide 8.jpg"
            alt="Slide 8"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;