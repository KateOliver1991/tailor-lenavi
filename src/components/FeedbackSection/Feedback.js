import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"
import SwiperCore, { Pagination, Navigation, Thumbs } from "swiper";
import {FeedbackContainer, FeedbackSlider} from "./FeedbackElements"


SwiperCore.use([Pagination, Navigation, Thumbs]);
const Feedback = () => {
  return (
    <FeedbackContainer id="feedback">
        <FeedbackSlider>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                slidesPerGroup={2}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="feedbackSwiper"
                style={
                    {height: '350px'}
                }
            >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </FeedbackSlider>
    </FeedbackContainer>
  )
}

export default Feedback