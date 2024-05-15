import { Virtual, Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import Image from 'next/image';

export const SlideVirtual = (props:{imagesStack: Array<string>}) => {
  
  // Create array with 1000 slides
  const slides = Array.from({ length: 10 }).map(
    (el, index) => `Slide ${index + 1}`
    
  );

  const infiniteSlides = Array.from({ length: props.imagesStack.length }).map(
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
      {/* {slides.map((slideContent, index) => (
        <SwiperSlide className='swiper-slide' key={slideContent} virtualIndex={index}>
          <div className=' max-h-28 h-28 bg-red-900 flex justify-center'>
            <div className='m-auto'>
              {slideContent}
            </div>
          </div>
        </SwiperSlide>
      ))} */}
      {props.imagesStack.map((slideContent, index) => (
        <div className='swiper-wrapper'>
          <SwiperSlide className='swiper-slide' key={`slide-${index}`} virtualIndex={index}>
            <div className=' max-h-32 h-32 w-28 flex justify-center'>
              <div className='m-auto text-center bg-white'>
                <Image src={slideContent} alt={`slide-${index}-img`} className='w-32'/>
              </div>
            </div>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};