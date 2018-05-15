import React from 'react';
import Image from'./image.components';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {
        images.map((image, index) => {
          return(
            <div key={index}>
              <Image
                media={ image.media.m }
                title={ image.title }
              />
            </div>
          )
        })
      }
    </div>


  );
}

export default ImageList;