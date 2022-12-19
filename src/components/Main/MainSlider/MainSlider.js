import MainSlide from "../MainSlide/MainSlide";
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const MainSlider = () => {
    return ( 
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={100}
        >
            <SwiperSlide>
                <MainSlide
                        subtitle='Best Furniture For Your Castle....'
                        title='New Furniture Collection Trends in 2020'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
                        button='Shop Now'
                        img='./images/armchair.png'
                        alt='armchair'
                        sale='50% off'
                />
            </SwiperSlide>
            <SwiperSlide>
                <MainSlide
                        subtitle='Best Furniture For Your Castle....'
                        title='New Furniture Collection Trends in 2020'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
                        button='Shop Now'
                        img='./images/armchair.png'
                        alt='armchair'
                        sale='50% off'
                />
            </SwiperSlide>
            <SwiperSlide>
                <MainSlide
                        subtitle='Best Furniture For Your Castle....'
                        title='New Furniture Collection Trends in 2020'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
                        button='Shop Now'
                        img='./images/armchair.png'
                        alt='armchair'
                        sale='50% off'
                />
            </SwiperSlide>
        </Swiper>
     );
}
 
export default MainSlider;