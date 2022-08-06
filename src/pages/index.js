import React, { useState } from 'react'
import { layoutGenerator } from 'react-break';
import Review from '../components/FeedbackSection/Feedback';
import GallerySection from '../components/GallerySection/GallerySection';
import MainSection from '../components/MainSection/MainSection';
import Navbar from '../components/navbar/Navbar'
import PriceSection from '../components/PriceSection/PriceSection';
import ServicesSlider from '../components/ServicesSlider/ServicesSlider';
import Sidebar from '../components/sidebar/Sidebar';
import { photos } from './photos.js';
import Form from '../components/ContactSection/Form';
import Footer from '../components/Footer/Footer';

const layout = layoutGenerator({
  mobile: 0,
  phablet: 768,
  desktop: 1000,
});

const OnMobile = layout.is('mobile');
const OnAtMostPhablet = layout.isAtMost('phablet');
const OnDesktop = layout.is('desktop');

const Home = () => {

  const [ isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <> 
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection/>
      <ServicesSlider />

      <OnDesktop>
        <GallerySection  photos={photos} columnCount="3" gap="5"/>
      </OnDesktop>

      <OnAtMostPhablet>
        <GallerySection  photos={photos} columnCount="2" gap="5"/>
      </OnAtMostPhablet>

      <OnMobile>
        <GallerySection  photos={photos} columnCount="1" gap="5"/>
      </OnMobile>
      <PriceSection/>
      <Review/>
      <Form/>
      <Footer/>

      
    </>
  )
}

export default Home