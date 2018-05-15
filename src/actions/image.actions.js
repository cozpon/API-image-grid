import Axios from 'axios';

let urlStart = "https://api.flickr.com/services/feeds/photos_public.gne?tags=";
let urlEnd = "&api_key=abe1d0e837e9682a072fba77f5f87fb4&extras=url_o,url_t&sort=&format=json&nojsoncallback=true";
// &extras=url_c was supposed to return a larger image size as well.

export const LOAD_IMAGES = 'LOAD_IMAGES';
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
