import Axios from 'axios';

let urlStart = "https://api.flickr.com/services/feeds/photos_public.gne?tags=";
let urlEnd = "&format=json&nojsoncallback=true";

export const LOAD_IMAGES = 'LOAD_IMAGES';
export const LOAD_IMAGE = 'LOAD_IMAGE';
export const ERROR = 'ERROR';

// creating a GET action that calls all Images
export const loadImages = (tags) => {
  return (dispatch) => {
    return Axios.get(urlStart + tags.search + urlEnd)
    .then(images => {
      let data = images.data.items;
      dispatch({ // dispatch is for activating a function call before returning an object
        type: LOAD_IMAGES,  // include "type"
        images: data // and then a state to be set after XHR request completes.
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        error: err
      });
    });
  };
};

// load single image
// export const loadImage = (id) => {
//   return function(dispatch){
//     return Axios.get(`${url + id}`)
//     .then(image => {
//       dispatch({
//         type: LOAD_IMAGE,
//         image: image.data
//       });
//     });
//   };
// };