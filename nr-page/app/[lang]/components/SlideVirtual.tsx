import { Virtual, Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

export const SlideVirtual = () => {
  // Create array with 1000 slides
  const slides = Array.from({ length: 10 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  
  return (
    <Swiper className='swiper-container' modules={[Autoplay, Virtual, FreeMode]} 
        slidesPerView={3}
        spaceBetween={0}  
        virtual={true}
        freeMode={true}
        loop = {true}
        autoplay = {{
            "delay": 1,
            "disableOnInteraction": false,
            // "pauseOnMouseEnter": false,
            // "stopOnLastSlide": false,
            //"waitForTransition": true
        }}
        mousewheel= {true}
        keyboard= {true}
        speed={2000}
        grabCursor = {true}
        oneWayMovement
    >
      {slides.map((slideContent, index) => (
        <SwiperSlide className='swiper-slide' key={slideContent} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};