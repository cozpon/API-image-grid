import React from 'react';

const Image = ({ media, title }) => {
  return (
    <div className="Grid-cell">
        <img
          src={ media }
          alt={ title }
        />
    </div>
  )
}


export default Image;