import React, { useState } from 'react'
import Gallery from '../components/GallerySection/GallerySection';
import MainSection from '../components/MainSection/MainSection';
import Navbar from '../components/navbar/Navbar'
import PriceSection from '../components/PriceSection/PriceSection';
import ServicesSlider from '../components/ServicesSlider/ServicesSlider';



import Sidebar from '../components/sidebar/Sidebar'


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
      <Gallery />
      <PriceSection />
     
     
    
      
    </>
  )
}

export default Home