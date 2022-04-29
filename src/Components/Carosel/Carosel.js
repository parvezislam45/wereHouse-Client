import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import img1 from '../../Image/banner-2.jpg'
import img2 from '../../Image/banner-3.jpg'
import img3 from '../../Image/banner-1.jpg'
import { Autoplay, Navigation, Pagination } from "swiper";


const Carosel = () => {
    return (
        <div className="slider">
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className="img1">
                    </div></SwiperSlide>
                    <SwiperSlide><div className="img2">
                    </div></SwiperSlide>
                    <SwiperSlide><div className="img3">
                    </div></SwiperSlide>
                    <SwiperSlide><div className="img4">
                    </div></SwiperSlide>
                    <SwiperSlide><div className="img5">
                    </div></SwiperSlide>
                    
                </Swiper>
            </>

        </div>
    );
};

export default Carosel;