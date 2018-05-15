import React from 'react';

const Image = ({ media, title }) => {
  return (
    <div>
        <img
          src={ media }
          alt={ title }
        />
    </div>
  )
}


export default Image;