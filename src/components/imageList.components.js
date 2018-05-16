import React from 'react';
import Image from'./image.components';

const ImageList = ({ images }) => {
  return (
    <div className="Grid v2-Grid--2col v3-Grid--3to2" >
      {
        images.map((image, index) => {
          let imageLink = image.media.m.replace('_m', '_c');
          // Flickr's API wasn't cooperating and only returned small images (_m.jpg)
          // simply replacing the _m with _c for larger image files
          return(
            <div className="u-size1of3" key={index}>
              <div>
                <Image
                  media={ imageLink }
                  title={ image.title }
                />
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default ImageList;