import React from 'react';
import { GalleryContainer } from './GalleryElements';

import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

import Items from './Images';

export function Gallery() {

  // Add your images here...
  

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 0,
    hoveringBehaviour: 'NEVER_SHOW',
    scrollAnimation: 'FADE_IN',
    imageHoverAnimation: 'ZOOM_IN',
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (

        <GalleryContainer id="gallery">
                <ProGallery
                        items={Items}
                        options={options}
                        container={container}
                        eventsListener={eventsListener}
                        scrollingElement={scrollingElement}
                />
        </GalleryContainer>
        
  );
}

export default Gallery