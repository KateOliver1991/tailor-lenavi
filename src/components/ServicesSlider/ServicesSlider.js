import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import SwiperCore, { Pagination, Navigation, Thumbs, EffectFade, Mousewheel, Autoplay } from "swiper";
import { SlideTextWrapper, SlideH2, SlideHr, SlideP } from "./SliderElements";
import School from './assets/school.jpg';
import Individual from './assets/individual.jpg';
import Festival from './assets/carnival.jpg';
import Fitting from './assets/fitting.jpg';
import Craft from './assets/crafting.jpg'

SwiperCore.use([Pagination, Navigation, Thumbs, EffectFade, Mousewheel, Autoplay]);

export default function ServicesSlider () {

  return (
    <>

      {/* Modify pagination, mobile view*/}
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{delay: 5000}}
        mousewheel={true}
        modules={[Pagination, EffectFade]}
        className="mySwiper"
        style={{
          height: '917px'
        }}
        effect={"fade"}
        speed={2000}
        id="services"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${School})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <SlideTextWrapper 
            style={{
              background: 'linear-gradient(152.02deg, rgba(142, 158, 167, 0.65) 20.5%, rgba(51, 58, 60, 0.65) 91.24%)',
            }}
          >
            <SlideH2>Пошив школьной формы</SlideH2>
            <SlideHr/>
            <SlideP>
              С каждым годом все больше Томских школ вводит в свой устав строгий дресс-код, 
              школьная форма дисциплинирует наших детей и приучает их одеваться подобающим образом. 
              Однако это совсем не значит, что школьная форма не может быть красивой и удобной. 
              В нашей студии Вы всегда сможете подобрать комплект формы как для школьников 
              начальных классов, так и для старшеклассников, а также заказать пошив формы по индивидуальным эскизам. 
              Все комплекты пошиты из натуральных тканей турецкого производства.
            </SlideP>
          </SlideTextWrapper>
         
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${Individual})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <SlideTextWrapper 
            style={{
              background: 'linear-gradient(162deg, rgba(133,102,83,0.5) 26%, rgba(211,170,142,0.5) 59%)'
            }}
          >
            <SlideH2>Индивидуальный пошив одежды</SlideH2>
            <SlideHr/>
            <SlideP>
              В нашей студии мы убеждены, что абсолютно каждый человек может выглядеть стильно и красиво в 
              независимости от его комплекции. В гардеробе каждой женщины должно быть неповторимое платье, 
              а у каждого мужчины - идеально сидящий костюм. Обращаясь в нашу студию Вы можете быть уверены, 
              что мастер разработает эскиз и пошьёт вещь учитывая все особенности Вашей фигуры и Вы удивитесь 
              насколько она отличается оттого, что предлагает масс-маркет.
            </SlideP>
          </SlideTextWrapper>
        </SwiperSlide>
        <SwiperSlide
            style={{
              backgroundImage: `url(${Festival})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
          }}
        >
          <SlideTextWrapper 
            style={{
              background: 'linear-gradient(122deg, rgba(102,116,122,0.85) 26%, rgba(177,180,188,0.85) 59%)'
            }}
          >
            <SlideH2>Пошив сценических костюмов</SlideH2>
            <SlideHr/>
            <SlideP>
              Школьный утренник? Городской карнавал? Средневековый бал? В нашей мастерской знают как сделать праздник 
              по настоящему ярким, а выступление запоминающимся. Мы уверены, что в жизни каждого человека есть место сказке. 
              Поэтому мы с огромным энтузиазмом создаем всевозможные карнавальные костюмы к новогодним праздникам, фестивалям и другим 
              мероприятиям. А также студия Натальи Лесиной сотрудничает с городскими творческими коллективами и не 
              первый год шьет для них сценические наряды. Приглашаем к сотрудничеству творческие коллективы и фотостудии. 
            </SlideP>
          </SlideTextWrapper>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${Fitting})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <SlideTextWrapper 
              style={{
                background: 'linear-gradient(301deg, rgba(112,102,98,0.65) 21%, rgba(169,168,163,0.65) 48%)'
              }}
            >
              <SlideH2>Подгонка одежды по фигуре</SlideH2>
              <SlideHr/>
              <SlideP>
                Подгонка одежды по фигуре имеет ряд ньюансов, с которыми новичку справиться не под силу. 
                Качественно выполненная работа гарантирует отличную посадку изделия из любой ткани, будь 
                то легкий шифон или кожа. Вместе мы без особых усилий добьемся идеальной посадки, что несомненно 
                сделает Ваш образ безукоризненным.  
              </SlideP>
          </SlideTextWrapper>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${Craft})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <SlideTextWrapper 
              style={{
                background: 'linear-gradient(328deg, rgba(142,158,167,0.65) 38%, rgba(166,178,181,0.65) 58%)'
              }}
            >
              <SlideH2>Ремонт одежды</SlideH2>
              <SlideHr/>
              <SlideP>
                Испортили любимую блузку? Порвали любимые брюки?
                В нашей студии быстро и качественной проведут мелки и средний 
                ремонт вашей одежды, а наши цены Вас приятно удивят.
              </SlideP>
          </SlideTextWrapper>
          </SwiperSlide>
       

      </Swiper>
    </>
  );
}



