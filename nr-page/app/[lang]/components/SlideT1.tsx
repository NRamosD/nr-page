import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';

import './stylescomponents.css';
// import required modules
import { Autoplay, EffectCards, EffectCoverflow, EffectCube, Pagination } from 'swiper/modules';
import { Skills } from '@/app/interfaces/main';



interface SlideT1Props {
    skillsData: Skills[];
}

export const SlideT1 = ({skillsData}:SlideT1Props) => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                
            }}
            pagination={true}
            modules={[Autoplay, EffectCards, EffectCoverflow]}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                reverseDirection: true
            }}

        >
            {
                skillsData?.map((item,index)=>{
                    return(
                        <SwiperSlide key={index} className='text-black'>
                            <img src={item.img} />
                            {item.tech}
                        </SwiperSlide>
                        
                    )
                })
                
            }
            {/* <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide> */}
        </Swiper>
    );
};