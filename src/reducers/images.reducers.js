import {
  LOAD_IMAGES,
  LOAD_IMAGE
 } from '../actions/image.actions';

const initialState = [];
// initial state set as an array,
// instead of doing Object.assign({}, state, etc..).
// I think it's a cleaner way of using a spread operator.

const imageList = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_IMAGES:
    console.log(action.images, 'reducers');
      return [ ...action.images ];
    case LOAD_IMAGE:
      return [ ...action.image ];
    default:
      return state;
// default simply returns state if the action.type isn't recognized.
  }
};

export default imageList;
