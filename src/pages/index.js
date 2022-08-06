import React, { useState } from 'react'

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

import {
  MatchMediaBreakpoints,
  MatchBreakpoint,
 
} from 'react-hook-breakpoints';

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopWide: 1500,
  desktopHuge: 1920,
};


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
      <MatchMediaBreakpoints breakpoints={breakpoints}>
        <MatchBreakpoint is="desktop">
          <GallerySection  photos={photos} columnCount="3" gap="5"/>
        </MatchBreakpoint>
        <MatchBreakpoint min="tablet" max="tabletLandscape">
          <GallerySection  photos={photos} columnCount="2" gap="5"/>
        </MatchBreakpoint>
        <MatchBreakpoint is="desktopHuge">
          <GallerySection  photos={photos} columnCount="4" gap="5"/>
        </MatchBreakpoint>
        <MatchBreakpoint min="mobile" max='mobileLandscape'>
          <GallerySection  photos={photos} columnCount="1" gap="5"/>
        </MatchBreakpoint>
      </MatchMediaBreakpoints>
      
      
      <PriceSection/>
      <Review/>
      <Form/>
      <Footer/>

      
    </>
  )
}

export default Home