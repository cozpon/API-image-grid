import React from 'react';

const Image = ({ media, title }) => {
  let imageClick = () => {
    console.log(title);
  };
  return (
    <div>
        <img
          src={ media }
          alt={ title }
          onClick={() => imageClick()} />
    </div>
  )
}


export default Image;