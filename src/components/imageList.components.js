import React from 'react';
import Image from'./image.components';

const ImageList = ({ images }) => {
  return (
    <div className="Grid Grid--withGutter Grid--fit" >
      {
        images.map((image, index) => {
          let imageLink = image.media.m.replace('_m', '_c');
          // for some reason, flickr's API wasn't cooperating and only returned small images (_m.jpg)
          // simply replacing the _m with _c for larger image files
          return(
            <div className="Grid-cell" key={index}>
                <Image
                  media={ imageLink }
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