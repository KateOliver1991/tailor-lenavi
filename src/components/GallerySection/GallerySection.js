import React from 'react';
import './style.css';

export default function GallerySection(props) {
  console.log(props);
  return (
    <div style={{columns: props.columnCount, columnGap: 0}} id="gallery" className='galleryWrap'>
      {props.photos.map((src, i) => 
        <img src={src} key={i} className="image" alt="" style={{padding: props.gap/1}}/>
      )}

    </div>
  )
}
