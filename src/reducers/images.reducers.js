import {
  LOAD_IMAGES
 } from '../actions/image.actions';

const initialState = []; // initial state set as an array.
// Instead of doing Object.assign({}, state, etc..).
// I think it's a cleaner way of using a spread operator.

// Using Switch/case
const imageList = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_IMAGES:
      return [ ...action.images ];
    default:
      return state;
// default simply returns state if the action.type isn't recognized.
  }
};

export default imageList;
